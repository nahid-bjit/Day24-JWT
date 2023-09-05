const HTTP_STATUS = require("../constants/statusCodes");
const { failure } = require("../util/common");
const jsonwebtoken = require("jsonwebtoken");
const UserController = require("../controller/UserController")

const isAuthorized = (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            return res.status(HTTP_STATUS.UNAUTHORIZED).send(failure("Unauthorized access"));
        }
        const jwt = req.headers.authorization.split(" ")[1];
        const validate = jsonwebtoken.verify(jwt, process.env.SECRET_KEY);
        if (validate) {
            next();
        } else {
            throw new Error();
        }

        // console.log(jwt);
    } catch (error) {
        console.log(error);
        if (error instanceof jsonwebtoken.JsonWebTokenError) {
            return res.status(HTTP_STATUS.UNAUTHORIZED).send(failure("Token invalid"));
        }
        if (error instanceof jsonwebtoken.TokenExpiredError) {
            return res.status(HTTP_STATUS.UNAUTHORIZED).send(failure("Token expired"));
        }
        return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).send(failure("Token expired"));
    }
};

const isAdmin = (req, res, next) => {
    console.log("body te ki ache", req.body)
    console.log("role:", req.body.role);
    if (req.body.role == 1) {
        next();
    } else {
        return res.status(HTTP_STATUS.FORBIDDEN).send(failure("Unauthorized access"))
    }
}

// const isAdmin = async (req, res, next) => {
//     try {
//         // Assuming you have a function to retrieve user information by userId
//         const user = await UserController.getOneById(req.body.userId);
//         console.log(user)

//         if (!user) {
//             return res.status(HTTP_STATUS.NOT_FOUND).send(failure("User not found"));
//         }

//         if (user.role === 1) {
//             // User has admin role, allow access
//             next();
//         } else {
//             return res.status(HTTP_STATUS.FORBIDDEN).send(failure("Unauthorized access"));
//         }

//         console.log("User role:", user.role);
//     } catch (error) {
//         console.error("Error:", error);
//         return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).send(failure("Internal Server Error"));
//     }
// };


module.exports = { isAuthorized };
module.exports = { isAdmin };