//Creating routes for CRUD operations

const UserDataController = require("../controller/user.controller");

module.exports = (app) => {
   
	app.post("/register", UserDataController.create);
	app.post("/login", UserDataController.login);
	app.post("/forgotPassword", UserDataController.forgotPassword);
};