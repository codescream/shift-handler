import CryptoJS from "crypto-js";
import { env as _env } from "process";
import User from "../models/user.js";
import updatePassword from "../emailService/updatePassword.js";
import { Op } from "sequelize";
import resetPassword from "../emailService/resetPass.js";
import Shift from "../models/shift.js";

export const createUser = (req, res) => {
  const body = req.body;

  console.log(body);

  const password = CryptoJS.AES.encrypt(
    body.password,
    _env.CRYPTOJS_KEY
  ).toString();

  User.create({ ...body, password: password })
    .then((user) => {
      console.log(user);
      const { password, ...info } = user.get();
      res.status(201).json(info);
    })
    .catch((err) => console.error(err));
};

export const fetchAllUser = (req, res) => {
  User.findAll({
    include: [{ model: Shift, as: "shifts" }],
    attributes: { exclude: ["password"] },
  })
    .then((users) => {
      res.status(200).json(users);
    })
    .catch((err) => console.error(err));
};

export const fetchUser = (req, res) => {
  console.log(req.params.id);
  User.findOne({
    where: { id: req.params.id },
    attributes: { exclude: ["password"] },
  })
    .then((user) => {
      console.log(user);
      res.status(200).json(user);
    })
    .catch((err) => console.error(err));
};

export const updatePass = async (req, res) => {
  const body = req.body;
  const username = body.username || null;
  // const user = await User.findByPk(body.id);

  const user = await User.findOne({
    where: { username },
  });

  if (!user) return res.status(404).json({ message: "User not found" });

  user
    .update({
      password: CryptoJS.AES.encrypt(
        body.password,
        _env.CRYPTOJS_KEY
      ).toString(),
    })
    .then(() => {
      console.log(user);
      updatePassword(body.password, user.email)
        .then(() =>
          res.status(200).json({ message: "Password update email sent" })
        )
        .catch((err) => res.status(500).json(err.message));
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).json({ error: `something went wrong - ${err.message}` });
    });
};

export const resetPass = async (req, res) => {
  const body = req.body;

  const user = await User.findOne({
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
  });

  if (!user) return res.status(404).json({ message: "User not found" });

  resetPassword(user.email)
    .then((resp) => {
      console.log(resp);
      res
        .status(200)
        .json({ message: "Password reset link sent to your email" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err.message });
    });
};

export const updateUser = async (req, res) => {
  const body = req.body;
  const id = req.params.id;

  const user = await User.findByPk(id);

  user
    .update(body)
    .then(() => {
      console.log(user);
      // updatePassword(body.password, user.email)
      //   .then(() =>
      //     res.status(200).json({ message: "Password update email sent" })
      //   )
      //   .catch((err) => res.status(500).json(err.message));
      res.status(200).json({ message: "user updated successfully" });
    })
    .catch((err) => {
      console.log(err.message);
      res.status(500).json(err);
    });
};

export const deleteUser = (req, res) => {
  const id = req.params.id;

  User.destroy({
    where: {
      id: id,
    },
  })
    .then((resp) => {
      console.log(resp);
      res.status(200).json({ response: "user deleted" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "something went wrong!" });
    });
};
