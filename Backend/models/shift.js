'use strict';
import { DataTypes } from "sequelize";
import sequelize from "../utils/DB.js";
import Client from "./Client.js";
import User from "./user.js";

const Shift = sequelize.define('Shift', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  time: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  duration: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  clientId: {
    type: DataTypes.INTEGER,
    references: {
      model: Client,
      key: 'id'
    },
    allowNull: false,
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT',
  },
  staffId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'RESTRICT',
    set(val) {
      if(val === null) {
        this.setDataValue('status', 'open')
      }else {
        this.setDataValue('status', 'filled');
        this.setDataValue('staffId', val);
      }
    }
  },
  amount: {
    type: DataTypes.FLOAT,
    defaultValue: 0,
  },
  paid: {
    type: DataTypes.FLOAT,
    defaultValue: 0,
  },
  status: {
    type: DataTypes.ENUM,
    values: ['open', 'filled', 'ongoing', 'closed', 'finished'],
    allowNull: false,
    defaultValue: 'open',
    validate: {
      isIn: {
        args: [['open', 'filled', 'ongoing', 'closed', 'finished']],
        msg: "Must be one of these: 'open', 'filled', 'ongoing', 'closed', 'finished'"
      }
    },
    set(val) {
      if(val === "closed") {
        this.setDataValue('staffId', null);
      }
    }
  },
  notes: {
    type: DataTypes.JSON,
    defaultValue: {},
    //1:{name: "", notes: "", datetime: ""}
  },
  clockin: {
    type: DataTypes.JSON,
    defaultValue: {
      time: "",
      accuracy: 0.0,
      coords: {
        lat: 0.0,
        long: 0.0
      }
    },
    set(val) {
      if(val !== null) {
        this.setDataValue('status', 'ongoing');
        this.setDataValue('clockin', val);
      }
    }
  },
  clockout: {
    type: DataTypes.JSON,
    defaultValue: {
      time: "",
      accuracy: 0.0,
      coords: {
        lat: 0.0,
        long: 0.0
      }
    },
    set(val) {
      if(val !== null) {
        this.setDataValue('status', 'finished');
        this.setDataValue('clockout', val);
      }
    }
  }
}, 
{
  sequelize,
  modelName: "Shift"
});

export default Shift;