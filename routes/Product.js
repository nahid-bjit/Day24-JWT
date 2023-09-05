const express = require("express");
const routes = express();
const ProductController = require("../controller/ProductController");
//const createValidation = require("../middleware/validation");
//const productValidator = require("../middleware/validation")


routes.get("/all", ProductController.getAll);
routes.get("/detail/:id", ProductController.getOneById);
//routes.delete("/delete/:id", ProductController.deletetById);
//routes.post("/create", productValidator.create, ProductController.create);
// // routes.post("/create", createValidation, ProductController.create);
//routes.patch("/update/:id", ProductController.updateById);

module.exports = routes;