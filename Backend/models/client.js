'use strict';

import { DataTypes } from 'sequelize';
import sequelize from '../utils/DB.js';

const Client = sequelize.define('Client', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  phone: {
    type: DataTypes.STRING
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  gender: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  DOB: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  ndisNo: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    defaultValue: "client",
  },
  desc: DataTypes.TEXT,
  startDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  endDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  picture: {
    type: DataTypes.STRING,
  },
  documents: {
    type: DataTypes.JSON
  }},
  {
    sequelize,
    initialAutoIncrement: 1000,
    modelName: 'Client',
  }
);

export default Client;