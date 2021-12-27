class Service {
    createNote = (note, callback) => {
        if (note) {
          callback(null, note);
        }
      }
  }
  module.exports = new Service();
 