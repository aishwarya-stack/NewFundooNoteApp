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
	  validateReset = Joi.object({
		random_string: Joi.string().required(),
		password: Joi.string().min(8)
		  .pattern(new RegExp("[A-Za-z0-9]{4,}[$&+,:;=?@#|<>.^*()%!-]{2,}"))
		  .required()
	  })
	
	  const resetSchema = Joi.object({
		email: Joi.string().required(),
		password: Joi.string()
		  .min(8)
		  .max(20)
		  .pattern(
			// eslint-disable-next-line prefer-regex-literals
			new RegExp(
			  "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#/$%/^&/*])(?=.{8,})"
			)
		  )
		  .required()
	  });
	  const validateNote = Joi.object({
		title: Joi.string()
		  .required(),
		  description: Joi.string()
		  .required()
	  });
	 
module.exports = {authUserRegister,authUserLogin,validForgotPassword,authUserforgot,validateReset,resetSchema,validateNote,validateNote};