const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config({path: "./config/.env"});
const { CLIENT_URL } = process.env;

console.log("Client Url:", CLIENT_URL);

// middleware
app.use(cors({
    origin: CLIENT_URL,
    optionsSuccessStatus: 200
}))

app.use(express.json());

// routes
const refugee = require("./routes/refugeeRoute");

app.use("/api/v1", refugee);

module.exports = app;