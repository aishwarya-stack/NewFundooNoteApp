/* eslint-disable no-undef */
const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../fundoonoteapp/server");
chai.use(chaiHttp);
chai.should();
const user=require("./user.test.json");

// eslint-disable-next-line no-undef
describe("User Registration ", () => {
	// eslint-disable-next-line no-undef
	it("given_validDetails_WhenCorrect_ShouldReturn201", (done) => {
		const userDetails = user.user.validDetails;
		chai
			.request(server)
			.post("/register")
			.send(userDetails)
			.end((err, res) => {
				if(err){
					return done(err);
				}
				res.should.have.status(201);
				done();
			});
	});
});
// eslint-disable-next-line no-undef
it("givenEmptyFirstName_shouldReturnStatus400",(done)=>{
	const userDetails = user.user.detailsWithEmptydFirstName;
	chai
		.request(server)
		.post("/register")
		.send(userDetails)
		.end((err,res)=>{
			if(err){
				return done(err);
			}
			res.should.have.status(400);
			res.body.should.have.property("success").eql(false);
			done();
		});
});
       
// eslint-disable-next-line no-undef
it("givenEmptyLastName_shouldReturnStatus400",(done)=>{
	const userDetails = user.user.detailsWithEmptyLastName;
	chai
		.request(server)
		.post("/register")
		.send(userDetails)
		.end((err,res)=>{
			if(err){
				return done(err);
			}
			res.should.have.status(400);
			res.body.should.have.property("success").eql(false);
			done();
		});
});
// eslint-disable-next-line no-undef
it("givenInvalidEmailId_shouldReturnStatus400",(done)=>{
	const userDetails = user.user.detailsWithInvalidmail;
	chai
		.request(server)
		.post("/register")
		.send(userDetails)
		.end((err,res)=>{
			if(err){
				return done(err);
			}
			res.should.have.status(400);
			res.body.should.have.property("success").eql(false);
			done();
		});
});
  
// eslint-disable-next-line no-undef
it("givenWeakPassword_shouldReturnStatus400",(done)=>{
	const userDetails = user.user.detailsWithWeakPassword;
	chai.request(server);
	chai
		.request(server)
		.post("/register")
		.send(userDetails)
		.end((err,res)=>{
			if(err){
				return done(err);
			}
			res.should.have.status(400);
			res.body.should.have.property("success").eql(false);
			done();
		});
});
// eslint-disable-next-line no-undef
describe("Login", () => {

	// eslint-disable-next-line no-undef
	it("givenLoginDetails_whenProper_UserLogin_successfully", (done) => {
		const loginDetails = user.user.login;
		chai
			.request(server)
			.post("/login") 
			.send(loginDetails)
			.end((err, res) => {
				if (err) {
					console.log("error");
				}
				res.should.have.status(200);
				done();
			});
	});
	/**
       * it function for login when user login with Wrong Password.
       * */
  
	// eslint-disable-next-line no-undef
	it("givenLoginDetails_when_WrongPassword", (done) => {
		const loginDetails = user.user.loginWrongPassword;
		chai
			.request(server)
			.post("/login")
			.send(loginDetails)
			.end((err, res) => {
				if (err) {
					console.log("error");
				}
				res.should.have.status(400);
				done();
			});
	});
	/**
       * it function for login when user login with Without Password.
       * */
	it("givenLoginDetails_whenNo_Password", (done) => {
		const loginDetails = user.user.loginWithoutPassword;
		chai
			.request(server)
			.post("/login")
			.send(loginDetails)
			.end((err, res) => {
				if (err) {
					console.log("error");
				}
				res.should.have.status(400);
				done();
			});
	});
	/**
       * it function for login when user login With Wrong Email.
       * */
	it( "givenLoginDetails_whenWrongEmail", (done) => {
		const loginDetails = user.user.loginWithWrongEmail;
		chai
			.request(server)
			.post("/login")
			.send(loginDetails)
			.end((err, res) => {
				if (err) {
					console.log("error");
				}
				res.should.have.status(400);
				done();
			});
	});
}); 