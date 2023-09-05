const express = require("express");
const app = express();
const ProductRouter = require("./routes/Product");
const UserRouter = require("./routes/User");
const OrderRouter = require("./routes/Order");
const AuthRouter = require("./routes/Auth");
const dotenv = require("dotenv");
const cors = require("cors");
const databaseConnection = require("./config/database");

dotenv.config();

app.use(cors({ origin: "*" }));
app.use(express.json()); // Parses data as JSON
app.use(express.text()); // Parses data as text
app.use(express.urlencoded({ extended: true })); // Parses data as urlencoded

app.use("/products", ProductRouter);
app.use("/users", UserRouter);
app.use("/orders", OrderRouter);
app.use("/auth", AuthRouter);

databaseConnection(() => {
    app.listen(8000, () => {
        // console.log(process.env.TEST_DB);
        console.log("Server is running on port 8000");
    });
})
