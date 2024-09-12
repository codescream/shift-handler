import Client from "../models/Client.js";

export const create = (req, res) => {
  const body = req.body;

  Client.create(body)
    .then((client) => res.status(201).json(client))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "something went wrong" });
    });
};

export const fetchAll = (req, res) => {
  Client.findAll()
    .then((clients) => res.status(200).json(clients))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "something went wrong" });
    });
};

export const fetchOne = (req, res) => {
  const id = req.params.id;

  Client.findByPk(id)
    .then((client) => res.status(200).json(client))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "something went wrong" });
    });
};

export const remove = (req, res) => {
  const id = req.params.id;

  Client.destroy({
    where: { id: id },
  })
    .then(() => res.status(200).json({ message: "client deleted" }))
    .catch((err) => {
      res.status(500).json({ error: "something went wrong" });
    });
};
