const loginUser = "SELECT * FROM users where email=$1";
const createUser = "INSERT INTO users (firstname,lastname,email,password) VALUES ($1,$2,$3,$4)";
module.exports={
	createUser,
	loginUser
};