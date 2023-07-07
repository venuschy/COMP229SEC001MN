module.exports = app => {

  const products = require("../controllers/product.controller.js");

 

  var router = require("express").Router();

 

  // Create a new Product

  router.________("__", products.create);

 

  // Retrieve all Products

  router.________("__", products.findAll);

 

  // Retrieve all published Products

  router._________("_________", products.findAllPublished);

 

  // Retrieve a single Product with id

  router._________("____", products.findOne);

 

  // Update a Product with id

  router.__________("____", products.update);

 

  // Delete a Product with id

  router.__________("____", products.delete);

 

  // Delete all Products

  router.delete("/", products.deleteAll);

 

  app.use('/api/products', router);

};