import ejs from "ejs";
import { env as _env } from "process";
import sendEmail from "../utils/sendEmail.js";

const resetPassword = async (email) => {
  ejs.renderFile(
    "email_templates/resetPass.ejs",
    {
      password,
    },
    (err, template) => {
      if (!err && template) {
        const mailOption = {
          from: _env.EMAIL,
          to: email,
          subject: "Password Reset",
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

export default resetPassword;