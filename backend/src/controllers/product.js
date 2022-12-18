// const { Product } = require("../models/models-index")
import { Products } from "../models/index.js"

export const postProduct = async (req, res) => {
  let newPost = {
    image: req.file.path,
    product_name: req.body.product_name,
    stock: req.body.stock,
    price: req.body.price,
    description: req.body.description,
    user_seller_id: req.body.user_seller_id,
  }

  try {
    const post = await Products.create(newPost)
    if (post) {
      res.json({
        message: "product berhasil di POST YEY",
      })
    }
  } catch (err) {
    console.log(err, "ini error")
  }
}

export const getProduct = async (req, res) => {
  try {
    const get = await Products.findAll({
      where: {
        user_seller_id: req.body.user_seller_id,
      },
    })
    if (get) {
      res.json({
        data: get,
      })
    }
  } catch (err) {
    console.log(err, "ini error")
  }
}

export const getAllProduct = async (req, res) => {
  try {
    const get = await Products.findAll()
    if (get) {
      res.json({
        data: get,
      })
    }
  } catch (err) {
    console.log(err, "ini error")
  }
}

export const getProductById = async (req, res) => {
  const id = req.params.id
  try {
    const get = await Products.findOne({
      where: {
        id: id,
      },
    })
    res.json({
      data: get,
    })
  } catch (err) {
    return err
  }
}

export const editProductById = async (req, res) => {
  try {
    const edit = await Products.update(req.body, {
      where: {
        id: req.params.id,
      },
    })

    if (edit) {
      res.json({
        message: "DATA BERHASIL DI EDIT",
      })
    }
  } catch (err) {
    console.log(err)
  }
}
