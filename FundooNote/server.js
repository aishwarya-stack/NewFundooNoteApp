//import express library
require('dotenv').config()
const express = require("express");

//require("dotenv").config;

//create app
const app = express();

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger/swagger.json");


app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(express.json());

require("./app/routes/user.routes")(app);

// define a simple route
app.get("/", (req, res) => {
	res.json({"message": "Welcome to Fundoo Notes App"});
});

// listen for requests
app.listen(3000, () => {
	console.log("Server is listening on port 3000");
});
module.exports = app;