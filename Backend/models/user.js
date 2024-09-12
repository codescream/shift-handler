"use strict";
import { DataTypes } from "sequelize";
import sequelize from "../utils/DB.js";

const User = sequelize.define(
  'User',
  {
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
    username: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      defaultValue: "",
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    phone: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      defaultValue: "user",
    },
    failed_login_count: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
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
    }
  },
  {
    sequelize,
    initialAutoIncrement: 1000,
    timestamps: true,
    hooks: {
      afterCreate: async (user, options) => {
        user.username = `${user.lastName.toLowerCase()}${user.id}`;
        await user.save();
      }
    },
    modelName: "User",
  }
);

export default User;