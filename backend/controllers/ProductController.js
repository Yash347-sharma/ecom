const ProductModel = require("../models/ProductModel");

const getProductsByCategory = async (req, res) => {
  const category_id = req.params.category_id;
  // validate category_id
  if (!category_id) {
    return res
      .status(400)
      .json({ success: false, message: "Category id is required" });
  }

  const results = await ProductModel.getProductsByCategory(category_id);
  //check if results is empty
  if (results.length === 0) {
    return res
      .status(404)
      .json({ success: false, message: "No products found" });
  }
  res.status(200).json({ success: true, data: results });
};

const getAllProducts = async (req, res) => {
    const results = await ProductModel.getAllProducts();
    if(results.length === 0){
        return res.status(404).json({success: false, message: "No products found"});
    }

    return res.status(200).json({ success: true, products: results });

};

const getProductById = async (req, res) => {
  const id = req.params.id;
  // validate id
  if (!id) {
    return res
      .status(400)
      .json({ success: false, message: "Product id is required" });
  }
  const results = await ProductModel.getProductById(id);
  //check if results is empty
  if (results.length === 0) {
    return res
      .status(404)
      .json({ success: false, message: "No product found" });
  }
  return res.status(200).json({ success: true, data: results });
};

const insertProduct = async (req, res) => {
  const data = req.body;
  // validate data
  if (!data) {
    return res
      .status(400)
      .json({ success: false, message: "Product data is required" });
  }

  const results = await ProductModel.insertProduct(data);
  // check if results is empty
  if (results.length === 0) {
    return res
      .status(404)
      .json({ success: false, message: "No product inserted" });
  }
  return res.status(200).json({ success: true, data: results });
};

// update product
const updateProduct = async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  // validate id
  if (!id) {
    return res
      .status(400)
      .json({ success: false, message: "Product id is required" });
  }
  // validate data
  if (!data) {
    return res
      .status(400)
      .json({ success: false, message: "Product data is required" });
  }

  // check prudct exists
  const product = await ProductModel.getProductById(id);
  if (product.length === 0) {
    return res
      .status(404)
      .json({ success: false, message: "No product found" });
  }

  const results = await ProductModel.updateProduct(id, data);
  // check if results is empty
  if (results.length === 0) {
    return res
      .status(404)
      .json({ success: false, message: "No product updated" });
  }
  return res.status(200).json({ success: true, data: results });
};

// delete product
const deleteProduct = async (req, res) => {
  const id = req.params.id;
  // validate id
  if (!id) {
    return res
      .status(400)
      .json({ success: false, message: "Product id is required" });
  }

  const results = await ProductModel.deleteProduct(id);
  // check if results is empty
  if (results.length === 0) {
    return res
      .status(404)
      .json({ success: false, message: "No product deleted" });
  }
  return res.status(200).json({ success: true, data: results });
};

// get products by slug
const getProductsBySlug = async (req, res) => {
  const slug = req.params.slug;
  // validate slug
  if (!slug) {
    return res
      .status(400)
      .json({ success: false, message: "Product slug is required" });
  }

  const results = await ProductModel.getProductsBySlug(slug);

  // check if results is empty
  if (results.length === 0) {
    return res
      .status(404)
      .json({ success: false, message: "No product found" });
  }
  return res.status(200).json({ success: true, data: results });
};

module.exports = {
  getProductsByCategory,
  getAllProducts,
  getProductById,
  insertProduct,
  updateProduct,
  deleteProduct,
  getProductsBySlug,
};
