const UserService = require("..//service/user.service");
const { authUserRegister, authUserLogin, validForgotPassword } = require("..//utility/user.validation");
const { genSaltSync, hashSync } = require("bcrypt");

class UserDataController {
	/**
	 * @description : Function created to add user into database
	 * @param {*} req
	 * @param {*} res
	 * @returns
	 */
	create = (req, res) => {
		console.log("inside controller", req.body);
		try {
			const userData = {
				firstName: req.body.firstName,
				lastName: req.body.lastName,
				email: req.body.email,
				password: req.body.password,
			};
			const Salt = genSaltSync(10);
			userData.password = hashSync(req.body.password, Salt);
			console.log(userData.password);
			const registerValidation = authUserRegister.validate(userData);
			if (registerValidation.error) {
				res.status(400).send({
					success: false,
					message: "Enter valid fields",
					data: registerValidation
				});
				return;
			}
			console.log("incontroller1", registerValidation);
			UserService.registerUser(userData, (err, data) => {
				if (err) {
					return res.status(201).json({
						success: false,
						message: "User allready exist"
					});

				} else {
					res.status(200).json({
						success: true,
						message: "user successfully registered",
						data: data,
					});

				}
			});
		} catch (err) {
			console.log(err);
			return res.status(500).json({
				success: false,
				message: "Server-Error",
				data: null
			});
		}
	};
	/**
	 * @description: Function created to verify user login info
	 * @param {*} req
	 * @param {*} res
	 */
	login = (req, res) => {
		console.log("inside controller", req.body);
		try {
			const loginData = {
				email: req.body.email,
				password: req.body.password,
			};
			const loginValidation = authUserLogin.validate(loginData);
			if (loginValidation.error) {
				res.status(400).send({
					success: false,
					message: "check inserted fields",
					data: loginValidation
				});
				return;
			}
			UserService.loginUser(loginData, (err, data) => {
				if (err) {
					return res.status(400).send({
						success: false,
						message: "login failed",
						err,
					});
				}
				return res.status(200).send({
					success: true,
					message: "logged in successfully",
					token: data
				});
			});
		} catch (err) {
			console.log(err);
			return res.status(500).send({
				success: false,
				message: "server error",
			});
		}
	};

	/**
	 * @description : forgot password
	 * @param {*} req
	 * @param {*} res
	 * @returns
	 */
	forgotPassword = (req, res) => {
		
		const user = {
			email: req.body.email
		
		  };
		  try {
			const userForgotPasswordInfo = {
			  email: req.body.email
			};
			const forgotValidation = validForgotPassword.validate(userForgotPasswordInfo);
			console.log(forgotValidation.error);
			if (forgotValidation.error) {
			  res.status(400).send({
				success: false,
				message: forgotValidation.error.message
			  });
			}
			UserService.forgotPassword(userForgotPasswordInfo, (error, result) => {
			  if (error) {
				return res.status(400).send({
				  success: false,
				  message: "failed to send email",
				});
			  } else {
				return res.status(200).send({
				  success: true,
				  message: "Email sent successfully",
			});
		  } 
		});
	}
		  catch (error) {
			console.log("Error", error);
			return res.status(500).send({
			  success: false,
			  message: "Internal server error",
			  result: null
			});
		  }
		  };
		}
	  

	

module.exports = new UserDataController(); 