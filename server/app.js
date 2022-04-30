const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config({path: "./config/.env"});
const { CLIENT_URL } = process.env;

// middleware
app.use(cors({
    origin: CLIENT_URL,
    optionsSuccessStatus: 200
}))

app.use(express.json());

// routes


module.exports = app;