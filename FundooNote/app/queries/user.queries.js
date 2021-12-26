const loginUser = "SELECT * FROM users where email=$1";
const createUser = "INSERT INTO users (firstname,lastname,email,password) VALUES ($1,$2,$3,$4)";
const otp = "INSERT INTO OTP  (email,code,expireIn,timestamps) VALUES ($1,$2,$3,$4)";
const resetUser = "UPDATE expire_table1 SET random_string = $1 WHERE email = $2";
module.exports={
	createUser,
	loginUser,
	otp,
	resetUser
};