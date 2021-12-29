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
       noteService.getNote((err, data) => {
        if (err) {
          logger.error("Failed to get all notes");
          return res.status(400).json({
            message: "failed to get note",
            success: false
          });
        } else {
          logger.info("All notes retrived");
          return res.status(201).json({
            message: "Notes retrived successfully",
            success: true,
            data: data
          });
        }
      });
    } catch {
      logger.error("Error occured while retrieving notes");
      return res.status(500).json({
        message: "Internal Error"
      });
    }
  }
    getNoteById = (req, res) => {
      try {
        const id = {
          note_id: req.body.note_id,
          user_id:req.body.user_id,
        };
         noteService.getNoteById(id, (err, data) => {
          if (err) {
            return res.status(401).json({
              message: "Note not found",
              success: false
            });
          } else {
            return res.status(200).json({
              message: "Note retrived succesfully",
              success: true,
              data: data
            });
          }
        });
      } catch (err) {
        console.log(err);
        return res.status(401).json({
          error: err,
          success: false
        });
      }
    }
    updateNoteById = (req, res) => {
      try {
        return res.status(201).json({
          message: "successfully note updated......",
          success: true
        });
      } catch (error) {
        return res.status(500).json({
          message: "Internal server error",
          success: false
        });
      }
    }
  }
  module.exports = new noteController();