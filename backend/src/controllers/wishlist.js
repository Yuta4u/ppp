import { Wishlist, Products } from "../models/index"

export const getWishlist = async (req, res) => {
  console.log(req.body)
  try {
    const get = await Wishlist.findAll({
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

export const postWishlist = async (req, res) => {
  console.log(req.body)
  try {
    const post = await Wishlist.create({
      user_id: req.body.user_id,
      link_id: req.body.link_id,
    })
    if (post) {
      res.json({
        message: "berhasil post wishlist",
        data: post,
      })
    }
  } catch (err) {
    console.log(err, "ini error")
  }
}
