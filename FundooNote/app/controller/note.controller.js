const { logger } = require("../../logger/logger");
const { validateNote} = require("../utility/user.validation");
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
        return res.status(201).send({
          message: "Validation Success",
          success: true
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