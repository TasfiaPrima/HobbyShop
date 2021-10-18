const express = require('express');
const router = express.Router();
const Controller = require('../controllers/wishlist.controller');

router.get('/wishlist/:userId', Controller.getWishlistProducts);
router.post('/wishlist/:userId', Controller.addWishlistProducts);
router.delete('/wishlist/:WishlistId', Controller.deleteWishlistProducts);

module.exports = router;
