const { logger } = require("../../logger/logger");
const { validateNote} = require("../utility/user.validation");
const noteService = require("../service/note.service");
class noteController {
  createNote =(req, res) => {
    try {
      const note = {
        user_id:req.userData.user_id,
        title: req.body.title,
        description: req.body.description
      };
      noteService.createNote(note, (error, data) => {
        if (error) {
          console.log(error);
          logger.error("failed to post note");
          return res.status(400).json({
            message: "failed to post note",
            success: false
          });
        }else{
          logger.info("Successfully inserted note");
          return res.status(201).send({
            message: "Successfully inserted note",
            success: true,
            data: data
          });
        }
      });
    } catch {
      logger.error("Internal server error");
      return res.status(500).json({
        message: "Internal server error",
        success: false
      });
    }
  }
  getNote = (req, res) => {
    try {
          logger.error("Failed to get all notes");
          return res.status(201).send({
            message: "Note inserted Successfully",
            success: true
          });
    } catch {
      logger.error("Error occured while retrieving notes");
      return res.status(500).json({
        message: "Internal Error"
      });
    }
  }
}
  module.exports = new noteController();