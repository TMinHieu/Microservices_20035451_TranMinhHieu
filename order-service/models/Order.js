const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customerId: String,
  productId: String,
  quantity: Number,
  totalPrice: Number,
  orderDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Order', orderSchema);
