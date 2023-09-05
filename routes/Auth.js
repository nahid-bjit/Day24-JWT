// const express = require("express");
// const routes = express();
// const AuthController = require("../controller/AuthController");
// const { userValidator } = require("../middleware/validation");
// const { authValidator } = require("../middleware/validation");


// routes.post("/login", authValidator.login, AuthController.login);
// routes.post("/sign-up", authValidator.create, AuthController.signup);
// module.exports = routes;

// ## shifu ## 

// const express = require("express");
// const authValidator = require("../validators/authValidator");
// const AuthController = require("../controllers/AuthController");

// const routes = express.Router();

// routes.post("/login", authValidator.login, AuthController.login);

// module.exports = routes;

// ## shifu 2 ## 
const express = require("express");
const routes = express.Router(); // Use express.Router() instead of express()

const AuthController = require("../controller/AuthController");
const { authValidator } = require("../middleware/validation"); // Import the authValidator directly

routes.post("/login", AuthController.login);
routes.post("/sign-up", authValidator.signup, AuthController.signup);

module.exports = routes;

