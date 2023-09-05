const express = require("express");
const routes = express();
const OrderController = require("../controller/OrderController");
//const createValidation = require("../middleware/validation");
//const UserValidator = require("../middleware/validation")



routes.get("/all", OrderController.getAll);
routes.get("/detail/:id", OrderController.getOneById);
//routes.delete("/delete/:id", UserController.deletetById);
routes.post("/create", OrderController.create);
// // routes.post("/create", createValidation, ProductController.create);
//routes.patch("/update/:id", UserController.updateById);

module.exports = routes;