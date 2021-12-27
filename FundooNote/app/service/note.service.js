const noteModel = require("../models/note.model");

class Service {
    createNote = (note, callback) => {
        noteModel.createNote(note, (error, data) => {
        if (error) {
            return callback(error, null);
          } else {
            return callback(null, data);
          }
        });
      }
  }
  module.exports = new Service();
 