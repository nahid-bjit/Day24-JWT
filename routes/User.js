const express = require("express");
const routes = express();
const UserController = require("../controller/UserController");
//const createValidation = require("../middleware/validation");
//const UserValidator = require("../middleware/validation")


routes.get("/all", UserController.getAll);
routes.get("/detail/:id", UserController.getOneById);
//routes.delete("/delete/:id", UserController.deletetById);
//routes.post("/create", UserValidator.create, UserController.create);
// // routes.post("/create", createValidation, ProductController.create);
//routes.patch("/update/:id", UserController.updateById);

module.exports = routes;