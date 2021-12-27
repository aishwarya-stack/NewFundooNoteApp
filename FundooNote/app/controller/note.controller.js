const { logger } = require("../../logger/logger");
const { validateNote} = require("../utility/user.validation");
const noteService = require("../service/note.service");
class noteController {
  createNote =(req, res) => {
    console.log("controller")
      try{
        const note = {
          user_id:req.userData.user_id,
          title: req.body.title,
          description: req.body.description
        };
        const valid = validateNote.validate(req.body);
        if (valid.error) {
          logger.error("Invalid Note");
          return res.status(400).send({
            success: false,
            message: "Please enter valid note"
          });
        }
        noteService.createNote(note, (error, data) => {
          if (error) {
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
      }
        catch (error) {
          console.log(error)
          return res.status(500).send({
            success: false,
            message: "Internal server error"
          });
        }
}
}

  module.exports = new noteController();