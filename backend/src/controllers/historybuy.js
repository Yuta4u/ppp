import { HistoryBuy, Products } from "../models"

export const getHistoryBuy = async (req, res) => {
  try {
    const get = await HistoryBuy.findAll({
      where: {
        user_id: req.body.user_id,
      },
      include: Products,
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

export const buyProduct = async (req, res) => {
  try {
    const postBuy = await HistoryBuy.create({
      quantity: req.body.quantity,
      user_id: req.body.user_id,
      link_id: req.body.link_id,
    })
    if (postBuy) {
      res.json({
        message: "barang berhasil di beli yey",
        data: postBuy,
      })
    }
  } catch (err) {
    console.log(err, "ini error")
  }
}
