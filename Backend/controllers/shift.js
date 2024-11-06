import shiftAssign from "../emailService/shiftAssign.js";
import Client from "../models/Client.js";
import Shift from "../models/shift.js";
import User from "../models/user.js";

export const create = (req, res) => {
  const body = req.body;

  Shift.create(body)
    .then(async (shift) => {
      const client = await Client.findByPk(shift.clientId);
      User.findByPk(shift.staffId)
        .then((staff) => {
          if (!staff)
            return res
              .status(200)
              .json({ shift, message: "Shift created successfully" });

          shiftAssign({
            userId: staff.id,
            location: shift.location,
            date: shift.date,
            time: shift.time,
            type: shift.type,
            duration: shift.duration,
            client: `${client.firstName} ${client.lastName}`,
            notes: shift.notes["1"]?.notes || "",
          })
            .then(() =>
              res
                .status(200)
                .json({ shift, message: "Staff notified via email" })
            )
            .catch((err) => {
              console.log(err);
              res.status(500).json({
                error: `something went wrong: ${err?.errors[0].message}`,
              });
            });
        })
        .catch((err) => {
          console.log(err);
          res
            .status(500)
            .json({ error: `something went wrong: ${err?.errors[0].message}` });
        });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ error: `something went wrong: ${err?.errors[0].message}` });
    });
};

export const fetchAll = (req, res) => {
  Shift.findAll({
    include: [
      { model: User, as: "staff" },
      { model: Client, as: "client" },
    ],
    attributes: {
      exclude: ["staffId", "clientId"],
    },
  })
    .then((shifts) => {
      res.status(200).json(shifts);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "something went wrong" });
    });
};

export const fetchOne = (req, res) => {
  const id = req.params.id;

  Shift.findByPk(id)
    .then((shift) => {
      console.log(shift);
      res.status(200).json(shift);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "something went wrong" });
    });
};

export const clientShifts = async (req, res) => {
  const id = req.params.id;
  console.log(id);
  const client = await Client.findByPk(id);

  console.log(await client.getShifts());

  Shift.findAll({
    where: {
      staffId: id,
    },
  })
    .then((shifts) => {
      console.log(shifts);
      res.status(200).json(shifts);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
};

export const update = (req, res) => {
  const id = req.params.id;

  Shift.findByPk(id)
    .then(async (shift) => {
      if (!shift) return res.status(404).json({ message: "shift not found" });

      const staffId = shift.staffId;
      const client = await Client.findByPk(shift.clientId);

      shift
        .update(req.body)
        .then((shift) => {
          console.log(shift);
          if (staffId) {
            User.findByPk(staffId)
              .then((user) => {
                shiftAssign({
                  userId: staffId,
                  location: shift.location,
                  date: shift.date,
                  time: shift.time,
                  type: shift.type,
                  duration: shift.duration,
                  client: `${client.firstName} ${client.lastName}`,
                  notes: shift.notes["1"]?.notes || "",
                });
                res.status(200).json({
                  message:
                    "shift updated successfully - email sent to assigned staff",
                });
              })
              .catch((error) => {
                console.log(error);
              });
          }
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json({ error: "shift update failed" });
        });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "shift update failed" });
    });
};

export const deleteOne = (req, res) => {
  const id = req.params.id;

  Shift.destroy({
    where: { id: id },
  })
    .then(() => res.status(200).json({ message: "successfully deleted shift" }))
    .catch(() => res.status(500).json({ error: "somthing went wrong" }));
};
