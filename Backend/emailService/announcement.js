import ejs from "ejs";
import { env as _env } from "process";
import sendEmail from "../utils/sendEmail.js";
import User from "../models/user.js";

const announcement = async (message, role, title) => {
  let targetUsers = [];
  if(role === "All") {
    targetUsers = await User.findAll();
  } else {
    targetUsers = await User.findAll({
      where: {
        role: role
      }
    });
  }

  if (targetUsers.length) {
    targetUsers.forEach((user) =>
      ejs.renderFile(
        "email_templates/announcement.ejs",
        {
          description: `${message}`
        },
        (err, template) => {
          if (!err && template) {
            const mailOption = {
              from: _env.EMAIL,
              to: user.email,
              subject: title,
              html: template,
            };
            sendEmail(mailOption);
          }
        }
      )
    );
  } else {
    console.log("No users found!");
  }
};

export default announcement;