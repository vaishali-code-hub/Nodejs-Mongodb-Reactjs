const mongoose = require("mongoose");
const Products = require("../Models/Products");

async function getAllProducts(req, res) {
  console.log("calling getAllProducts from API NODE server");
  const db_Products = await Products.find();
  //   res.json(db_Products)
  res.json({ Products: db_Products });
}

module.exports = {
  getAllProducts,
};
