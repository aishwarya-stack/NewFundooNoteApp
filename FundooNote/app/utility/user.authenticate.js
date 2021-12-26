const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

class Helper {
hashing = (password, callback) => {
  bcrypt.hash(password, 10, (err, hashpassword) => {
    if (err) {
      console.log("error is hashing");
      return callback(err, null);
    } else {
      return callback(null, hashpassword);
    }
  });
};

/**
   * Generate Token
   * @param {*} data
   * @param {*} callback
   */

jwtTokenGenerate = (data) => {
  const dataForToken = {
    email: data.email,
    id: data.id
  };
  return jwt.sign(dataForToken, process.env.TOKEN_KEY, { expiresIn: "24H" });
};

verifyToken = (req, res, next) => {
  try {
    // const header = req.headers.authorization;
    // const myArr = header.split(" ");
    // const token = myArr[1];
    const token = req.params.token;
    const decode = jwt.verify(token, process.env.TOKEN_KEY);
    if (decode) {
      console.log("token verified");
      //console.log("token verified");
      req.userData = decode;
      next();
    } else {
      console.log("token verify error");
    }
  } catch (error) {
    res.status(401).send({
      error: "Your token has expiered"
    });
  }
};
}

module.exports = new Helper()