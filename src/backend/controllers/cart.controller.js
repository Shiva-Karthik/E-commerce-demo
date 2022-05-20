// const express = require("express");

// const Cart = require("../models/cart.model");

// const router = express.Router();

// router.get("/:id", async (req, res) => {
//   try {
//     const cart = await Cart.find({user_id:req.params.id}).populate({path:"product_id", ref:"product"}).lean().exec();
//     return res.send(cart);
//   } catch (error) {
//     return res.status(500).send({ message: error.message });
//   }
// });
// router.post("/", async (req, res) => {
//   try {
//     const cart = await Cart.create(req.body);
//     return res.send(cart);
//   } catch (error) {
//     return res.status(500).send({ message: error.message });
//   }
// });

// module.exports = router;

const express = require("express");

const Cart = require("../models/cart.model");

const router = express.Router();

router.post("", async (req, res) => {
  try {
    let cart = await Cart.findOne({ product_id: req.body.product_id }).lean().exec();
    if (cart) {
      await Cart.findOneAndUpdate(
        { product_id: req.body.product_id },
        { $inc: { qty: 1 } },
        {
          new: true,
        }
      );
      return res.send(cart);
    }
     cart = await Cart.create(req.body);

    return res.send(cart);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("", async (req, res) => {
  try {
    const carts = await Cart.find()
      .populate({ path: "product_id", ref: "product" })
      .lean()
      .exec();
    return res.send(carts);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const carts = await Cart.findById(req.params.id);
    return res.send(carts);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});
router.patch("/:id", async (req, res) => {
  try {
    const cart = await Cart.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();
    console.log(cart, req.body);
    return res.status(200).send(cart);
  } catch (error) {
    return res.status(400).send({ error: error });
  }
});
router.delete("/:id", async (req, res) => {
  try {
    if (req.params.id === "clearCart") {
      const cart = await Cart.deleteMany({}).lean().exec();
      return res.status(200).send(cart);
    }
    const cart = await Cart.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(200).send(cart);
  } catch (err) {
    return res.status(400).send(err.message);
  }
});

module.exports = router;
