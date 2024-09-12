import jwt from "jsonwebtoken";
import { env as _env } from "process";

export const verifyToken = (req, res, next) => {
  const auth = req.headers.authorization;

  const token = auth.split(" ")[1];

  console.log(token);

  try {
    if (!token) return res.status(401).json({ message: "Unauthenticated" });

    let decoded = jwt.verify(token, _env.JSONWEBT_KEY);

    console.log(decoded);

    req.id = decoded?.id;
    req.user = decoded?.user;

    next();
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error });
  }
};

export const verifyRole = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.role !== "admin")
      return res.status(403).json({ message: "You do not have access" });

    next();
  });
};
