const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    product_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
      required: true,
    },
    qty: {type: Number, required: true, default: 1}
  },
  
  {
    versionKey: false,
  }
);

const Cart = new mongoose.model("cart", cartSchema);
module.exports = Cart;
