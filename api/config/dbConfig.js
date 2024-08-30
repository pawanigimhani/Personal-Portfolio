const mongoose = require("mongoose");

mongoose.connect(process.env.mongo_url);

const connection = mongoose.connection;

connection.on("error", (error) => console.error(error));

connection.on("open", () => console.log("Connected to Database"));

module.exports = connection;