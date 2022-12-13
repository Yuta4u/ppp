// const { Product } = require("../models/models-index")
import Products from "../models/product"

const PostProduct = async (req, res) => {
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
    console.log(err)
  }
}

export default PostProduct
// module.exports.postProduct = (req, res) => {
//   let newPost = {
//     image: req.file.path,
//     product_name: req.body.product_name,
//     stock: req.body.stock,
//     price: req.body.price,
//     description: req.body.description,
//     user_id: req.body.user_id,
//   }
//   Product.create(newPost)
//     .then((respon) => {
//       res.status(200).json({
//         message: "data berhasil di POST",
//         data: respon,
//       })
//     })
//     .catch((err) => console.log(err))
// }
