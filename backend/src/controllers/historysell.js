import { HistorySell, Products } from "../models"

export const getHistorySell = async (req, res) => {
  console.log(req.body, "ini sell")
  try {
    const get = await HistorySell.findAll({
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
export const sellProduct = async (req, res) => {
  console.log(req.body, "ini buy product")
  try {
    const postSell = await HistorySell.create({
      quantity: req.body.quantity,
      user_id: req.body.user_id,
      link_id: req.body.link_id,
    })
    if (postSell) {
      res.json({
        message: "barang berhasil di jual YEY!",
        data: postSell,
      })
    }
  } catch (err) {
    console.log(err, "ini error")
  }
}
// export const postHistorySell = async (req, res) => {
//   try {
//     const post = await HistorySell.findAll({
//       where: {
//         user_id: req.body.user_id,
//       },
//       include: Products,
//     })
//     if (post) {
//       res.json({
//         data: post,
//       })
//     }
//   } catch (err) {
//     console.log(err, "ini error")
//   }
// }
// export const buyProduct = async (req, res) => {
//     console.log(req.body)
//     try {
//       const postBuy = await HistoryBuy.create({
//         user_id: req.body.user_id,
//         link_id: req.body.link_id,
//       })
//       if (postBuy) {
//         res.json({
//           message: "barang berhasil di beli yey",
//           data: postBuy,
//         })
//       }
//     } catch (err) {
//       console.log(err, "ini error")
//     }
//   }
