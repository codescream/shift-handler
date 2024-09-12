import ejs from "ejs";
import { env as _env } from "process";
import sendEmail from "../utils/sendEmail.js";

const updatePassword = async (password, email) => {
  ejs.renderFile(
    "email_templates/updatePass.ejs",
    {
      password,
    },
    (err, template) => {
      if (!err && template) {
        const mailOption = {
          from: _env.EMAIL,
          to: email,
          subject: "Password changed",
          html: template,
        };
        try {
          sendEmail(mailOption);
        } catch (error) {
          throw new Error(error.message);
        }
        
      }
    }
  );
};

export default updatePassword;
