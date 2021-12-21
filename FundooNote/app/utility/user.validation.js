const Joi = require("joi");


const authUserRegister  = Joi.object({
	firstName: Joi.string().required().pattern(new RegExp("^[A-Z]{1}[a-z]{2,}")),
	lastName: Joi.string().required().pattern(new RegExp("^[A-Z]{1}[a-z]{2,}")),
	email: Joi.string().email().required(),
	// eslint-disable-next-line no-useless-escape
	password: Joi.string().required().pattern(new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")),
});

const authUserLogin = Joi.object({
	email: Joi.string().email().required(),
	password: Joi.string().required()
});
module.exports = {authUserRegister,authUserLogin};

