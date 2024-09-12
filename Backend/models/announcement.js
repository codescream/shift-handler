'use strict';
import { DataTypes } from 'sequelize';
import sequelize from '../utils/DB.js';

const Announcement = sequelize.define('Announcement', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  desc: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  recipient_group: {
    type: DataTypes.STRING,
    allowNull: false,
  }
},
  {
    sequelize,
    modelName: 'Announcement',
  }
);

export default Announcement;