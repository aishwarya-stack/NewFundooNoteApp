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

  const validForgotPassword =
    Joi.object({
      email: Joi.string().required(),

    });
	const authUserforgot = Joi.object({
		email: Joi.string().email().required()
	  });
const    validResetPassword =
    Joi.object({
      email: Joi.string().required().pattern(new RegExp("^^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")),
      password: Joi.string().required().pattern(new RegExp("(?=^.{8,}$)((?=.*\\d)|(?=.*\\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$")),
      code: Joi.string().required()

    });

module.exports = {authUserRegister,authUserLogin,validForgotPassword,authUserforgot,validResetPassword};

