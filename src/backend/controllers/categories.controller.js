const express = require("express");

const Category = require("../models/categories.model");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const category = await Category.find().lean().exec();
    return res.send(category);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});
router.post("/", async (req, res) => {
  try {
    const category = await Category.create(req.body);
    return res.send(category);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});
