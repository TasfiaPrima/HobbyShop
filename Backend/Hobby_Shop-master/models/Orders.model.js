const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  products: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Products',
      },
      image: { type: String, required: true },
      name: String,
      quantity: {
        type: Number,
        required: true,
        min: [1, 'Quantity can not be less then 1.'],
      },
    },
  ],
  bill: {
    type: Number,
    required: true,
  },
  date_added: {
    type: Date,
    default: Date.now,
  },
  contactDetails: { type: String },
  shippingDetails: { type: String },
});

const Orders = mongoose.model('Orders', OrderSchema);
module.exports = Orders;
