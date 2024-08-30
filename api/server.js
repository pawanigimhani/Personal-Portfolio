const express = require("express");

const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();
const config = require("./config/dbConfig");
const portfolio = require("./routers/portfolioRouter");
const path = require('path');
const cors = require("cors");
require('dotenv').config();

app.use(cors());

app.use(express.json());
app.use("/api/portfolio", portfolio);

app.use(express.static('./frontend/build'));
app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    });

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
 });

