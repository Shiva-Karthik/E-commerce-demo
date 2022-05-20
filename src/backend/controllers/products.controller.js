const express = require("express");

const Product = require("../models/products.model");

const router = express.Router();

router.post("", async (req, res) => {
  try {
    const product = await Product.create(req.body);

    return res.send(product);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});

router.get("", async (req, res) => {
  try {
    const products = await Product.find().lean().exec();
    return res.send(products);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});
router.get("/:id", async (req, res) => {
  try {
    const products = await Product.findById(req.params.id);
    return res.send(products);
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
});
router.patch("/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true}).lean().exec();
    return res.status(200).send(product);
  } catch (error) {
    return res.status(400).send({ error: error });
  }
});
router.delete("/:id", async (req, res) => {
    try {
      const product = await Product.findByIdAndDelete(req.params.id).lean().exec();
      return res.status(200).send(product);
    } catch (err) {
      return res.status(400).send(err.message);
    }
  });

module.exports = router;
