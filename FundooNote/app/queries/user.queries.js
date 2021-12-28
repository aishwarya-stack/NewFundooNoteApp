const loginUser = "SELECT * FROM users where emailid=$1";
const createUser = "INSERT INTO users (firstname,lastname,emailid,password) VALUES ($1,$2,$3,$4)";
const otp = "INSERT INTO OTP  (email,code,expireIn,timestamps) VALUES ($1,$2,$3,$4)";
const updateUser = "UPDATE users SET password = $1 WHERE emailid = $2";
const resetUser = "UPDATE users SET pw_reset_token = $1 WHERE emailid = $2";
const verifyToken = "select pw_reset_token from users where emailid=$1";
const verifyString = "select random_string from expire_table1 where email=$1";
const createNote = "INSERT INTO note (user_id,title,description) VALUES ($1,$2,$3) RETURNING *";
const getNote =    "select * from note";
const getNoteById = "select * from note where note_id=$1";
module.exports={
	createUser,
	loginUser,
	otp,
	resetUser,
	updateUser,
	verifyToken,
	verifyString,
	createNote,
	getNote,
	getNoteById
};