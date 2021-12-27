const nodemailer = require('nodemailer');
require('dotenv').config
const pool = require('../../config/database.config');
const queries = require("..//queries/user.queries");
const { logger } = require("../../logger/logger");
exports.sendEmail = (data,callback) => {
  let code = Math.random().toString(36).substring(2, 15)
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    requireTLS: true,
    service: "gmail",
    auth: {
      user: "aishwaryaashokkadam",
      pass:"8605025507"
    }
  });
  logger.info("Jwt Token Generate");
  
  //const token = Helper.jwtTokenGenerate(data);
  const mailOptions = {
    from: process.env.EMAIL,
    to: "aishwaryaashokkadam@gmail.com",
    subject: "Reset password Link",
    html: `<h2>please click on this link to change the password</h2>
               
                <p>/resetpassword/${code}</p>
                `
  };
  
  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
     
      return callback(err,null);
    } else{
          const values = [code,process.env.EMAIL];
          console.log(values);
          pool.query(queries.resetUser,values);
          };
      return callback(null,data);
   });
}; 