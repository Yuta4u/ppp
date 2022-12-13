// const { Sequelize } = require("sequelize")
import { Sequelize } from "sequelize"
import db from "../config/db_config.js"
// const db = require("../config/database")

// init DataTypes
const { DataTypes } = Sequelize

// Defie schema
const Users = db.define(
  "users",
  {
    name: {
      type: DataTypes.STRING,
    },
    balance: {
      type: DataTypes.INTEGER,
    },
    phone_number: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    gender: {
      type: DataTypes.STRING,
    },
    refresh_token: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    timestamps: true,
  }
)

// Users.sync()
// Profile.sync().then()
// Export model
export default Users
