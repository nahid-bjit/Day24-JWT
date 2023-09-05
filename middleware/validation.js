// const { failure } = require("../util/common");

// const createValidation = (req, res, next) => {
//     const { title, description, price, rating, stock } = req.body;
//     const errors = {};
//     if (!title || title === "") {
//         errors.title = "Title was not provided";
//     }
//     if (!price || price <= 200) {
//         errors.price = "Price should be provided, and it should less than 200";
//     }
//     if (!stock || stock === 0) {
//         errors.stock = "Stock should be provided and greater than 0";
//     }

//     if (Object.keys(errors).length > 0) {
//         return res.status(422).send(failure("unprossible entry", errors));
//     }
//     next();
// };

const { body, query, param } = require("express-validator");

// const productValidator = {
//     create: [
//         body("title")
//             .exists()
//             .withMessage("Title was not provided")
//             .bail()
//             .notEmpty()
//             .withMessage("Title cannot be empty")
//             .bail()
//             .isString()
//             .withMessage("Title must be a string")
//             .bail()
//             .isLength({ max: 30 })
//             .withMessage("Title must be less than 50 characters, and more than 5 characters"),
//         body("description")
//             .exists()
//             .withMessage("Description was not provided")
//             .bail()
//             .notEmpty()
//             .withMessage("Description cannot be empty")
//             .bail()
//             .isString()
//             .withMessage("Description must be a string")
//             .bail()
//             .isLength({ min: 5, max: 200 })
//             .withMessage("Description must be less than 200 characters, and more than 50 characters"),
//         body("price")
//             .exists()
//             .withMessage("Price was not provided")
//             .bail()
//             .isNumeric()
//             .withMessage("Price must be numeric")
//             .custom((value) => {
//                 if (value <= 0) {
//                     throw new Error("Price cannot be 0 or negative");
//                 }
//                 return true;
//             }),
//         body("rating")
//             .exists()
//             .withMessage("Rating was not provided")
//             .bail()
//             .isNumeric()
//             .withMessage("Rating must be numeric")
//             .bail()
//             .isFloat({ min: 0, max: 5 })
//             .withMessage("Rating must be between 0 and 5"),
//         // .custom((value) => {
//         //   if (value < 0 || value > 5) {
//         //     throw new Error("Rating must be between 0 and 5");
//         //   }
//         //   return true;
//         // })
//         body("stock")
//             .exists()
//             .withMessage("Stock was not provided")
//             .bail()
//             .isNumeric()
//             .withMessage("Stock must be numeric")
//             .bail()
//             .custom((value) => {
//                 if (value <= 0) {
//                     throw new Error("Stock cannot be 0 or negative");
//                 }
//                 return true;
//             }),
//     ],
// };

const authValidator = {
    signup: [
        body("email")
            .exists()
            .withMessage("Email must be provided")
            .bail()
            .isString()
            .withMessage("Email must be a string")
            .bail()
            .isEmail()
            .withMessage("Email must be in valid format"),
        body("password")
            .exists()
            .withMessage("Password must be provided")
            .bail()
            .isString()
            .withMessage("Password must be a string")
            .bail()
            .isStrongPassword({ minLength: 8, minLowercase: 1, minUppercase: 1, minSymbols: 1, minNumbers: 1 })
            .withMessage("Password must contain at least 8 characters with 1 lower case, 1 upper case, 1 number, 1 symbol"),
    ],
};

//module.exports = productValidator
module.exports = { authValidator }