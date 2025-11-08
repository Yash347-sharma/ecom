const express = require("express");
const router = express.Router();
// import controller
const ProductController = require("../controllers/ProductController");

router.get("/", ProductController.getAllProducts);  
router.get("/:slug", ProductController.getProductsBySlug);
router.get("/category/:category_id", ProductController.getProductsByCategory);


router.get("/:id", ProductController.getProductById);
router.post("/", ProductController.insertProduct);
router.put("/:id", ProductController.updateProduct);
router.delete("/:id", ProductController.deleteProduct);

module.exports = router;
