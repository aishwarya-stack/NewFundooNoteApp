const { logger } = require("../../logger/logger");
const pool = require("..//../config/database.config");
const queries = require("..//queries/user.queries");
class noteModel {
    createNote = (info, callback) => {
        const values = [info.user_id,info.title,info.description];
        pool.query(queries.createNote,values,(err, data) => {
          if (data) {
            callback(null, data.rows[0]);
          }else {
            logger.error("error"+ err);
            callback(err.stack, null);
          }
        });
      }
    
    getNote = (callback) => {
      pool.query(queries.getNote,(err, data) => {
        if (err) {
          return callback(err, null);
        } else {
          return callback(null, data);
        }
      });
    };
    getNoteById = (id, callback) => {
      try {
        const values = [id.note_id];
        pool.query(queries.getNoteById,values, (err, data) => {
          if (err) {
            return callback(err, null);
          } else {
            return callback(null, data);
          }
        });
      } catch (err) {
        return err;
      }
    }
  }
    module.exports = new noteModel();