import Incident from "../models/Incident.js";

export const create = (req, res) => {
  const body = req.body;

  Incident.create(body)
    .then((incident) => res.status(201).json(incident))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "something went wrong" });
    });
};

export const fetchAll = (req, res) => {
  Incident.findAll()
    .then((incidents) => res.status(200).json(incidents))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "something went wrong" });
    });
};

export const fetchOne = (req, res) => {
  const id = req.params.id;

  Incident.findByPk(id)
    .then((incident) => res.status(200).json(incident))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "something went wrong" });
    });
};

export const remove = (req, res) => {
  const id = req.params.id;

  Incident.destroy({
    where: { id: id },
  })
    .then(() => res.status(200).json({ message: "Incident deleted" }))
    .catch((err) => {
      res.status(500).json({ error: "something went wrong" });
    });
};
