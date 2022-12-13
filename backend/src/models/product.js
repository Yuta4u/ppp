// const { Sequelize } = require("sequelize")
import { Sequelize } from "sequelize"
import db from "../config/db_config.js"
// const db = require("../config/database")

// init DataTypes
const { DataTypes } = Sequelize

// Defie schema
const Products = db.define(
  "products",
  {
    product_name: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.INTEGER,
    },
    quantity: {
      type: DataTypes.INTEGER,
    },
    user_seller_id: {
      type: DataTypes.INTEGER,
    },
    description: {
      type: DataTypes.STRING,
    },
    image: {
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
export default Products
