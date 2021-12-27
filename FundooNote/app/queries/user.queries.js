const loginUser = "SELECT * FROM users where email=$1";
const createUser = "INSERT INTO users (firstname,lastname,email,password) VALUES ($1,$2,$3,$4)";
const otp = "INSERT INTO OTP  (email,code,expireIn,timestamps) VALUES ($1,$2,$3,$4)";
const updateUser = "UPDATE users SET password = $1 WHERE email= $2";
const resetUser = "UPDATE expire_table1 SET random_string = $1 WHERE email = $2";
const verifyToken = "select random_string from expire_table1 where email=$1";
const verifyString = "select random_string from expire_table1 where email=$1";
const createNote = "INSERT INTO notes2 (user_id,title,description) VALUES ($1,$2,$3) RETURNING *";
module.exports={
	createUser,
	loginUser,
	otp,
	resetUser,
	updateUser,
	verifyToken,
	verifyString,
	createNote
};