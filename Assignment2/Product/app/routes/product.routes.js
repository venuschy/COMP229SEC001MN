module.exports = app => {
    const products = require("../controllers/product.controller.js");
    var router = require("express").Router();
  
    // Create a new Product
    router.post("/", products.create);
  
    // Get all Products or Find all Products which name contains 'kw'
    router.get("/", products.findAll);

    // Get Product by id
    router.get("/:id", products.findOne);
  
    // Update Product by id 
    router.put("/:id", products.update);
  
    // Remove Product by id
    router.delete("/:id", products.delete);

    // Remove all Products
    router.delete("/", products.deleteAll);

    app.use('/api/products', router);
};