const UserModel = require("../models/user.model");
const auth = require("..//utility/user.authenticate");
const  bcrypt  = require("bcrypt");
const nodemailer = require("../utility/user.nodemailer");
const { logger } = require("../../logger/logger");
class UserService {
	/**
     * @description: Function sends new user info to model
     * @param {*} userData
     * @param {*} callback
     */
	registerUser = (userData,callback) => {
		console.log("inside service");
		UserModel.createDetails(userData, (err,data)=>{
			console.log("inservice",userData);
			if (err){
				callback(err,null);
			}else {
				console.log(data);
				callback(null,data);
			}
		});
	};
	/**
     * @description: Function gets data from model, whether it is valid or not.
     * @param {*} loginData
     * @param {*} authenticateUser
     */
	 loginUser = (loginData, authenticateUser) => {
		// call model layer
		UserModel.loginUser(loginData, (err, data) => {
		  if (err) {
			logger.error("Error found in service");
			return authenticateUser(err, null);
		  } else {
			const result = bcrypt.compareSync(loginData.password, data.password);
			if (result) {
			  const token = auth.jwtTokenGenerate(data);
			  logger.info("Valid Password");
			  return authenticateUser(null, token);
			} else {
				logger.error("Password does not match");
			  return authenticateUser("Password does not match", null);
			}
		  };
		});
	  }
	
	forgotPassword = (email, callback) => {
		console.log("inservice",email);
		UserModel.forgotPassword(email, (err, data) => {
			if (err) {
				return callback(err, null);
			  } else{
				return callback(null, nodemailer.sendEmail(data));
			  }
	  });
	}
	resetPassword = (resetInfo, callback) => {
		console.log("inside service");
		UserModel.resetPassword(resetInfo, (error, data) => {
		  if (data) {
			return callback(null, data);
		  } else {
			return callback(error, null);
		  }
		});
	  };
		
	}
	


module.exports = new UserService(); 