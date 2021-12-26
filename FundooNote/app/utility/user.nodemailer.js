const nodemailer = require('nodemailer');
require('dotenv').config
const pool = require('../../config/database.config');
const queries = require("..//queries/user.queries");
const auth = require("../utility/user.authenticate");
exports.sendEmail = (data) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: 'aishwaryaashokkadam',
      pass: '8605025507'
    }
  });
  console.log("Jwt Token Generate");
  const token = auth.jwtTokenGenerate(data);
  const mailOptions = {
    from: process.env.EMAIL,
    to: "aishwaryaashokkadam@gmail.com",
    subject: "Reset password Link",
    html: `<h2>please click on this link to change the password</h2>
                <p>${process.env.CLIENT_MAIL}/resetPassword/${token}</p>
                `
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log("error",err);
      return null;
    } else {
      const values = [code,process.env.EMAIL];
            console.log(values);
            pool.query(queries.resetUser,values);
      };
      return data;
    });
  }