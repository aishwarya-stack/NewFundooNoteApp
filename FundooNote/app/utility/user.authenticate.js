const jwt = require("jsonwebtoken");
require("dotenv").config();
const bcrypt = require("bcrypt");
exports.generateToken = (data)=>{
	const Token = {
		firstName: data.firstName,
		lastName: data.lastName,
		email: data.email
	}; 
	// eslint-disable-next-line no-undef
	return jwt.sign({Token}, process.env.ACCESS_TOKEN_KEY, {expiresIn: "30M"});
}; 