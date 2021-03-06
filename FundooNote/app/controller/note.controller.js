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
        const updateNote = {
          note_id: req.body.note_id,
          user_id: req.body.user_id,
          title: req.body.title,
          description: req.body.description
        };
        noteService.updateNoteById(updateNote, (error, data) => {
          if (error) {
            console.log(error)
            logger.error("Note not updated");
            return res.status(400).json({
              message: "Note not updated",
              success: false
            });
          } else {
            logger.info("Successfully note updated");
            return res.status(201).send({
              message: "Successfully note updated",
              success: true,
              data: data
            });
          }
        });
      } catch (error) {
        console.log(error);
        return res.status(500).json({
          message: "Internal server error",
          success: false,
          
        });
      }
    }
    deleteNoteById = (req, res) => {
      try {
        const id = { note_id: req.params.note_id, user_id: req.body.user_id};
        const data =  noteService.deleteNoteById(id);
        return res.status(200).json({
          message: "Note Deleted succesfully",
          success: true,
          data: data
        });
      } catch (err) {
        return res.status(500).json({
          message: "Note not updated",
          success: false,
          data: err
        });
      }
    }
  }
  
  module.exports = new noteController();