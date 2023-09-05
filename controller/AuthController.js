const { validationResult } = require("express-validator");
const HTTP_STATUS = require("../constants/statusCodes");
const Auth = require("../model/Auth");
const { failure, success } = require("../util/common");
const bcrypt = require("bcrypt");
const jsonwebtoken = require("jsonwebtoken");


class AuthController {
    async login(req, res) {
        const { email, password } = req.body;
        console.log(email, password);
        const auth = await Auth.findOne({ email: email })
            .populate("user", "-createdAt -updateAt")
            .select("-createdAt -updateAt");
        if (!auth) {
            return res.status(HTTP_STATUS.OK).send(failure("User is not registered"));
        }
        const checkPassword = await bcrypt.compare(password, auth.password);

        if (!checkPassword) {
            return res.status(HTTP_STATUS.OK).send(failure("Invalid credentials"))
        }
        const responseAuth = auth.toObject();
        delete responseAuth.password;
        delete responseAuth._id;
        const jwt = jsonwebtoken.sign(responseAuth, process.env.SECRET_KEY, { expiresIn: "1h" });
        responseAuth.token = jwt;
        return res.status(HTTP_STATUS.OK).send(success("Successfully logged in", responseAuth));
    }

    async signup(req, res) {
        try {
            const validation = validationResult(req).array();
            if (validation.length > 0) {
                return res.status(HTTP_STATUS.OK).send(failure("Failed to add the user", validation));
            }
            const { email, password, role } = req.body;
            console.log("kichu ekta", email, password, role)

            const hashedPassword = await bcrypt.hash(password, 10).then((hash) => {
                return hash;

            });
            console.log(hashedPassword)

            const result = await Auth.create({
                email: email,
                password: hashedPassword,
                role: 1,
            });

            console.log(result)
            if (!result) {
                return res.status(HTTP_STATUS.OK).send(failure("Failed to add the user"));

            }

            // console.log(hashedPassword);

            return res.status(HTTP_STATUS.OK).send(success("Success"));

        } catch (error) {
            console.log("error: ", error)
            return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).send(failure("Internal Server Error"));

        }

    }


}

module.exports = new AuthController();