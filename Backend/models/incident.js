'use strict';

import { DataTypes } from 'sequelize';
import sequelize from '../utils/DB.js';
import User from './user.js';
import Client from './Client.js';

const Incident = sequelize.define('Incident', {
  id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    incidentDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    incidentTime: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: 'id',
      }
    },
    clientId: {
      type: DataTypes.INTEGER,
      references: {
        model: Client,
        key: 'id',
      }
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  }, {
    sequelize,
    modelName: 'Incident',
  }
);

export default Incident;