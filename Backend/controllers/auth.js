import { Op } from "sequelize";
import CryptoJS from "crypto-js";
import jwt from "jsonwebtoken";
import { env as _env } from "process";
import User from "../models/user.js";

export const login = (req, res) => {
  const body = req.body;
  console.log(body);
  const max_attempt = 8;

  User.findOne({
    where: {
      [Op.or]: [
        {
          username: body.user_email,
        },
        {
          email: body.user_email,
        },
      ],
    },
  })
    .then((user) => {
      if (!user)
        return res
          .status(404)
          .json({ message: "username and/or password incorrect" });

      if (user.failed_login_count < max_attempt) {
        const decryptPass = CryptoJS.AES.decrypt(
          user.password,
          _env.CRYPTOJS_KEY
        ).toString(CryptoJS.enc.Utf8);

        if (decryptPass === body.password) {
          const accessToken = jwt.sign(
            { id: user.id, username: user.username, role: user.role },
            _env.JSONWEBT_KEY,
            { expiresIn: "1h" }
          );
          const { password, ...data } = user.get();
          res.status(200).json({ ...data, accessToken, message: "logged in!" });
          user.update({ failed_login_count: 0 });
        } else {
          user
            .update({ failed_login_count: ++user.failed_login_count })
            .then(() => {
              user
                .reload()
                .then((user) => {})
                .catch((err) => {
                  console.error(err);
                });

              res.status(401).json({
                message: "username and/or password incorrect",
                warning: `You have ${
                  max_attempt - user.failed_login_count
                } attempt(s) left`,
              });
            })
            .catch(() =>
              res.status(500).json({ message: "something went wrong!" })
            );
        }
      } else {
        console.log("failed login exceeded. Contact your administrator.");
        res.status(401).json({
          message: "failed login exceeded. Contact your administrator.",
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
};
