const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../server.js");
chai.use(chaiHttp);
chai.should();
const noteInputs = require("..//test/note.test.json");
const userInput = require("..//test/user.test.json");
const { createNote } = require("../app/controller/note.controller.js");
beforeEach((done) => {
  chai.request(server)
      .post('/login')
      .send(userInput.user.login)
      .end((error, res) => {
          if (error) {
            return done(error);
          }
          token = "bearer "+res.body.token;
          done();
      });
});
describe("Create Note", () => {
  it.only("when call create note api, should return appropriate response from controller", (done) => {
    const token = noteInputs.notes.loginValidToken;
    chai
      .request(server)
      .post("/createnote")
      .set({ authorization: token })
      .send(token)
      .end((err, res) => {
        if (err) {
          console.log("plz check your credential");
          return done();
        }
        res.should.have.status(201);
        return done();
      });
  });
  it.only("give valid input, should return appropriate response from controller", (done) => {
    const token = noteInputs.notes.loginValidToken;
    const createNotes = {
      title:"google" ,
      description: "google is good search engine"
    };
    chai
      .request(server)
      .post("/createnote")
      .set({ authorization: token })
      .send({createNotes })
      .end((err, res) => {
        if (err) {
          console.log("plz check your credential");
          return done();
        }
        res.should.have.status(201);
        return done();
      });
  });

it.only("when call createNoteAPI, should return appropriate response from service", (done) => {
  const token = noteInputs.notes.loginValidToken;
  const createNotes = {
    title:"google" ,
    description: "google is good search engine"
  };
  chai
    .request(server)
    .post("/createnote")
    .set({ authorization: token })
    .send({createNotes })
    .end((err, res) => {
      if (err) {
        console.log("plz check your credential");
        return done();
      }
      res.should.have.status(201);
      return done();
    });
});
it.only("when call createNoteAPI, should return appropriate response from model", (done) => {
  const token = noteInputs.notes.loginValidToken;
  const createNotes = {
    title:"google" ,
    description: "google is good search engine"
  };
  chai
    .request(server)
    .post("/createnote")
    .set({ authorization: token })
    .send({createNotes })
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