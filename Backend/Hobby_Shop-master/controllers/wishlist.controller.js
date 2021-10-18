const Wishlist = require('../models/Wishlist.model');
const Products = require('../models/Products.model');

const getWishlistProducts = async (req, res) => {
  const userId = req.params.userId;
  try {
    let wishlist = await Wishlist.find({ userId });
    if (wishlist) {
      return res
        .status(200)
        .json({ success: true, message: 'Wishlist found', wishlist });
    } else {
      return res
        .status(504)
        .json({ success: false, message: 'finding Wishlist failed' });
    }
  } catch (err) {
    console.log(err);
    return res
      .status(504)
      .json({ success: false, message: 'finding Wishlist failed' });
  }
};

const addWishlistProducts = async (req, res) => {
  const userId = req.params.userId;
  console.log(req.body);
  const { products } = req.body;

  try {
    const id = products.productId;
    console.log(id);
    const name = products.productName;
    const image = products.image;

    try {
      const newWishlist = await Wishlist.create({
        userId,
        products: { productId: id, name, image },
      });
      return res
        .status(201)
        .json({ success: true, message: 'Added to wishlist' });
    } catch (err) {
      console.log(err);
      res.status(500).json({ success: false, message: 'Something went wrong' });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send('Something went wrong');
  }
};

const deleteWishlistProducts = async (req, res) => {
  const wishlistId = req.params.WishlistId;
  try {
    let wishlist = await Wishlist.findByIdAndRemove(wishlistId);
    return res.status(200).json({ success: true, message: 'Wishlist deleted' });
  } catch (err) {
    console.log(err);
    res.status(500).send('Something went wrong');
  }
};

module.exports = {
  addWishlistProducts,
  getWishlistProducts,
  deleteWishlistProducts,
};
