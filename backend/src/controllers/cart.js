import { Cart, Products, Users } from "../models"

export const getUsers = async (req, res) => {
  try {
    const act = await Users.findAll({
      where: {
        id: req.body.id,
      },
      include: Cart,
    })
    if (act) {
      res.json({
        message: "lel",
        data: act,
      })
    }
  } catch (err) {
    console.log(err)
  }
}

export const postCart = async (req, res) => {
  try {
    const act = await Cart.create(req.body)
    if (act) {
      res.json({
        message: "BERHASIL POST CART!!",
        data: act,
      })
    }
  } catch (err) {
    console.log(err)
  }
}

export const getCart = async (req, res) => {
  try {
    const act = await Cart.findAll({
      where: {
        user_id: req.body.user_id,
      },
      include: Products,
    })
    if (act) {
      res.json({
        message: "BERHASIL GET CART",
        data: act,
      })
    }
  } catch (err) {
    console.log(err)
  }
}
