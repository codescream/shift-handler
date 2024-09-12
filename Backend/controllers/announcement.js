import announcement from "../emailService/announcement.js";
import Announcement from "../models/Announcement.js";

export const sendMessage = (req, res) => {
  const body = req.body;

  announcement(body.message, body.role, body.title)
    .then(() => {
      Announcement.create({
        title: body.title,
        desc: body.message,
        recipient_group: body.role
      })
      res.status(200).json({ status: "message sent" });
    })
    .catch(() => res.status(500).json({ status: "error sending message" }));
};

export const fetchAll = (req, res) => {
  Announcement.findAll()
    .then((resp) => res.status(200).json(resp))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "something went wrong" });
    });
};

export const remove = (req, res) => {
  const id = req.params.id;

  Announcement.destroy({
    where: { id },
  })
    .then(() => res.status(200).json({ message: "Removed" }))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "something went wrong" });
    });
};
