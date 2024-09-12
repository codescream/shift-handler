import nodemailer from 'nodemailer';
import { env as _env } from "process";
import { configDotenv } from 'dotenv';

// configDotenv();

const configuration = {
  service: 'gmail',
  requireTLS: true,
  auth: {
    user: _env.EMAIL,
    pass: _env.PASS
  }
};

const sendEmail = (mailOption) => {
  const transporter = nodemailer.createTransport(configuration);

  transporter.verify()
    .then(() => {
      transporter.sendMail(mailOption, (error, info) => {
        if (error) throw new Error(error);
    
        console.log(info.response);
      })
    })
    .catch((error) => console.error(error));
}

export default sendEmail;