const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../server");
chai.use(chaiHttp);
chai.should();
const user=require("./user.test.json")

describe("User Registration ", () => {
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
it('givenEmptyFirstName_shouldReturnStatus400',(done)=>{
  const userDetails = user.user.detailsWithEmptydFirstName;
        chai
        .request(server)
        .post('/register')
        .send(userDetails)
        .end((err,res)=>{
          if(err){
            return done(err);
        }
        res.should.have.status(400);
        res.body.should.have.property('success').eql(false);
        done();
    });
});
       
      it('givenEmptyLastName_shouldReturnStatus400',(done)=>{
        const userDetails = user.user.detailsWithEmptyLastName;
        chai
        .request(server)
        .post('/register')
        .send(userDetails)
        .end((err,res)=>{
            if(err){
                return done(err);
            }
            res.should.have.status(400);
            res.body.should.have.property('success').eql(false);
            done();
        });
    });
    it('givenInvalidEmailId_shouldReturnStatus400',(done)=>{
    const userDetails = user.user.detailsWithInvalidmail;
        chai
        .request(server)
        .post('/register')
        .send(userDetails)
        .end((err,res)=>{
            if(err){
                return done(err);
            }
            res.should.have.status(400);
            res.body.should.have.property('success').eql(false);
            done();
        });
    });
  
  it('givenWeakPassword_shouldReturnStatus400',(done)=>{
      const userDetails = user.user.detailsWithWeakPassword;
      chai.request(server)
      chai
      .request(server)
      .post('/register')
      .send(userDetails)
      .end((err,res)=>{
        if(err){
          return done(err);
      }
      res.should.have.status(400);
      res.body.should.have.property('success').eql(false);
      done();
  });
});
describe("Login", () => {

  it("givenLoginDetails_whenProper_UserLogin_successfully", (done) => {
        const loginDetails = user.user.login
        chai
          .request(server)
          .post("/login") 
          .send(loginDetails)
          .end((err, res) => {
            if (err) {
              console.log("error")
            }
            res.should.have.status(200);
            done();
          });
      });
      /**
       * it function for login when user login with Wrong Password.
       * */
  
      it("givenLoginDetails_when_WrongPassword", (done) => {
        const loginDetails = user.user.loginWrongPassword
        chai
          .request(server)
          .post("/login")
          .send(loginDetails)
          .end((err, res) => {
            if (err) {
              console.log("error")
            }
            res.should.have.status(400);
            done();
          });
      });
      /**
       * it function for login when user login with Without Password.
       * */
      it("givenLoginDetails_whenNo_Password", (done) => {
        const loginDetails = user.user.loginWithoutPassword
        chai
          .request(server)
          .post("/login")
          .send(loginDetails)
          .end((err, res) => {
            if (err) {
              console.log("error")
            }
            res.should.have.status(400);
            done();
          });
      });
      /**
       * it function for login when user login With Wrong Email.
       * */
      
      it( "givenLoginDetails_whenWrongEmail", (done) => {
        const loginDetails = user.user.loginWithWrongEmail
        chai
          .request(server)
          .post("/login")
          .send(loginDetails)
          .end((err, res) => {
            if (err) {
              console.log("error")
            }
            res.should.have.status(400);
            done();
          });
      });
    });
     
    describe("Forgot Password API", () => {
      it(" when call Forgot password api,should return response status success", (done) => {
        const forgotPasswordDetails = user.user.userForgotPassword;
        chai.request(server)
          .post("/forgotPassword")
          .send({ email: "aishwaryaashokkadam@gmail.com" })
          .end((error, res) => {
            if (error) {
              return done("Invalid details received instead of valid");
            }
            res.should.have.status(201);
            return done();
          });
      });

  it(" should validate the input , return appropriate response", (done) => {
    const forgotPasswordDetails = user.user.userForgotPassword;
    chai
      .request(server)
      .post("/forgotPassword")
      .send({ email: "aishwaryaashokkadam@gmail.com" } )
      .end((err, res) => {
        if (err) {
          console.log("plz check your credential");
          return done();
        }
        res.should.have.status(201);
        return done();
      });
  });
  it(" Should return true from ForgotPassword service, return appropriate response", (done) => {
    const forgotPasswordDetails = user.user.userForgotPassword;
    chai
      .request(server)
      .post("/forgotPassword")
      .send({ email: "aishwaryaashokkadam@gmail.com" } )
      .end((err, res) => {
        if (err) {
          console.log("plz check your credential"+err);
          return done();
        }
        res.should.have.status(201);
        return done();
      });
  });
  
  it(" Should return true from ForgotPassword model, return appropriate response", (done) => {
    const forgotPasswordDetails = user.user.userForgotPassword;
    chai
      .request(server)
      .post("/forgotPassword")
      .send({ email: "aishwaryaashokkadam@gmail.com" })
      .end((err, res) => {
        if (err) {
          console.log("plz check your credential");
          return done();
        }
        res.should.have.status(201);
        return done();
      });
  });
    });

    // Test cases for RESET Password API
    describe("Forgot Password API", () => {
      it.only(" when call Forgot password api,should return response status success", (done) => {
        chai
          .request(server)
          .post("/resetpassword")
          .send({"email": "rohitg213@gmail.com",
          "password": "clickN70@",
          "code": "4rhghgtW@"})
          .end((err, res) => {
            if (err) {
              console.log("plz check your credential");
              return done();
            }
            res.should.have.status(200);
            return done();
          });
        });   
    
    it.only("should validate the input , return appropriate response", (done) => {
      chai
      .request(server)
      .post("/resetpassword")
      .send({"email": "aishwaryaashokkadam@gmail.com",
      "password": "Aishwarya@123",
      "code": "0cfcuxlnbnnb"})
      .end((err, res) => {
        if (err) {
          console.log("plz check your credential");
          return done();
        }
        res.should.have.status(200);
        return done();
      });
  });
  it.only("should validate the wrong input of password, return appropriate response", (done) => {
    chai
      .request(server)
      .post("/resetpassword")
      .send({ "email": "aishwaryaashokkadam@gmail.com",
      "password": "Aishwarya",
      "code": "0cfcuxlnbnnb" })
      .end((err, res) => {
        if (err) {
          console.log("plz check your credential");
          return done();
        }
        res.should.have.status(400);
        return done();
      });
  });
  it.only("should validate the wrong input of email, return appropriate response", (done) => {
    chai
      .request(server)
      .post("/resetpassword")
      .send({ "email": "aishwarykadam@gmail.com",
      "password": "Aishwarya",
      "code": "0cfcuxlnbnnb" })
      .end((err, res) => {
        if (err) {
          console.log("plz check your credential");
          return done();
        }
        res.should.have.status(400);
        return done();
      });
  });
}); 
  