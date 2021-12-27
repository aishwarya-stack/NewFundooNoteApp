//import controller
const UserDataController = require("../controller/user.controller")
const Helper = require("..//utility/user.authenticate");

module.exports = (app) => {
    // registration of user - POST request
    app.post('/register', UserDataController.create);
    // login uses - POST request
    app.post('/login', UserDataController.login);
    // forgot password API - POST request
    app.post("/forgotpassword", UserDataController.forgotPassword);
     // reset user password
    
    app.post("/resetpassword",  UserDataController.resetPassword);
   
};