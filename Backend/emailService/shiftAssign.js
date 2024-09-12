import ejs from "ejs";
import { env as _env } from "process";
import sendEmail from "../utils/sendEmail.js";
import User from "../models/user.js";

const shiftAssign = async (args) => {
  console.log(args);
  const user = await User.findByPk(args.userId);

  console.log(user);

  if(!user)
    return console.log("No such user found!");

  
  ejs.renderFile(
    "email_templates/shiftAssignment.ejs",
    {
      location: args.location,
      date: args.date,
      time: args.time,
      type: args.type,
      duration: args.duration,
      client: args.client,
      notes: args.notes,
    },
    (err, template) => {
      if (!err && template) {
        const mailOption = {
          from: _env.EMAIL,
          to: user.email,
          subject: "Shift Assigned",
          html: template,
        };
        sendEmail(mailOption);
      }
    }
  );
};

export default shiftAssign;