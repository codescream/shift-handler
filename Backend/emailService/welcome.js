import cron from "node-cron";
import ejs from "ejs";
import CryptoJS from "crypto-js";
import { env as _env } from "process";
import sendEmail from "../utils/sendEmail.js";
import User from "../models/user.js";

export const scheduleWelcome = () =>
  cron.schedule("* * * * *", () => {
    welcomeMessage();
  });

const welcomeMessage = async () => {
  const newUsers = await User.findAll({
    where: {
      isActive: false,
    },
  });

  if (newUsers.length) {
    newUsers.forEach((user) =>
      ejs.renderFile(
        "email_templates/welcome.ejs",
        {
          fullname: `${user.firstName} ${user.lastName}`,
          staffID: `${user.username}`,
          password: CryptoJS.AES.decrypt(
            user.password,
            _env.CRYPTOJS_KEY
          ).toString(CryptoJS.enc.Utf8),
        },
        (err, template) => {
          if (!err && template) {
            const mailOption = {
              from: _env.EMAIL,
              to: user.email,
              subject: "Welcome to Shiftly",
              html: template,
            };
            sendEmail(mailOption);
          }
        }
      )
    );

    User.update(
      { isActive: true },
      {
        where: {
          isActive: false,
        },
      }
    );
  } else {
    console.log("No new users found!");
  }
};
