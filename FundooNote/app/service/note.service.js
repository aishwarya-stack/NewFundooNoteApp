const noteModel = require("../models/note.model");
const { logger } = require("../../logger/logger");
class Service {
    createNote = (note, callback) => {
        noteModel.createNote(note, (error, data) => {
          if (error) {
            logger.error(error);
            return callback(error, null);
          } else {
            console.log(data);
            return callback(null, data);
          }
        });
      }
      getNote = (callback) => {
        noteModel.getNote((err, data) => {
          if (err) {
            return callback(err, null);
          } else {
            return callback(null, data);
          }
        });
      }
    }
  module.exports = new Service();
 