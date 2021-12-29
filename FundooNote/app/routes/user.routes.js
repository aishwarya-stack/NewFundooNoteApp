//import controller
const UserDataController = require("../controller/user.controller")
const noteController = require("../controller/note.controller");
const Helper = require("..//utility/user.authenticate");

module.exports = (app) => {
    // registration of user - POST request
    app.post('/register', UserDataController.create);
    // login uses - POST request
    app.post('/login', UserDataController.login);
    // forgot password API - POST request
    app.post("/forgotpassword", UserDataController.forgotPassword);
     // reset user password
    
    app.post("/resetpassword",UserDataController.resetPassword);
    app.post("/createnote", Helper.verifyToken,noteController.createNote);
    
    app.get("/getnotes",Helper.verifyToken, noteController.getNote);
    app.get("/getnotesbyid/:note_id", noteController.getNoteById);
    app.put("/updatenotes/:note_id", noteController.updateNoteById);
};