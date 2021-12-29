const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../server.js");
chai.use(chaiHttp);
chai.should();
const faker = require("faker");
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
  it("when call create note api, should return appropriate response from controller", (done) => {
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
  it("give valid input, should return appropriate response from controller", (done) => {
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

it("when call createNoteAPI, should return appropriate response from service", (done) => {
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
it("when call createNoteAPI, should return appropriate response from model", (done) => {
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
it("when call createNoteAPI with validToken, should return appropriate response from model", (done) => {
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
describe("Get all Notes", () => {
 /* it("when call getNote api without token, should return appropriate response from controller", (done) => {
    chai
      .request(server)
      .get("/getnotes")
      .end((err, res) => {
        if (err) {
          console.log("plz check your credential");
          return done();
        }
        res.should.have.status(400);
        return done();
      });
  });
*/
  it("when call getNote api with token, should return appropriate response from controller", (done) => {
    const token = noteInputs.notes.loginValidToken;
    chai
      .request(server)
      .get("/getnotes")
      .set({ authorization: token })
      .end((err, res) => {
        if (err) {
          console.log("plz check your credential");
          return done();
        }
        res.should.have.status(201);
        return done();
      });
  });
  it("when call getNote api with token, should return appropriate response from controller", (done) => {
    const token = noteInputs.notes.loginValidToken;
    chai
      .request(server)
      .get("/getnotes")
      .set({ authorization: token })
      .end((err, res) => {
        if (err) {
          console.log("plz check your credential");
          return done();
        }
        res.should.have.status(201);
        return done();
      });
  });
  it("when call getNote api , should return appropriate response from service", (done) => {
    const token = noteInputs.notes.loginValidToken;
    chai
      .request(server)
      .get("/getnotes")
      .set({ authorization: token })
      .end((err, res) => {
        if (err) {
          return done(err);
        }
        res.should.have.status(201);
        done();
      });
  });
  it("when call getNote api , should return appropriate response from model", (done) => {
    const token = noteInputs.notes.loginValidToken;
    chai
      .request(server)
      .get("/getnotes")
      .set({ authorization: token })
      .end((err, res) => {
        if (err) {
          console.log("plz check your credential");
          return done();
        }
        res.should.have.status(201);
        return done();
      });
  });
  it("when call getNote api then get all note , should return appropriate response", (done) => {
    const token = noteInputs.notes.loginValidToken;
    chai
      .request(server)
      .get("/getnotes")
      .set({ authorization: token })
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
describe("GetNoteById", () => {
  it("when call getNoteById with InvalidToken , should return appropriate response", (done) => {
    const token = noteInputs.notes.TokenInvalid;
    chai
      .request(server)
      .get(`/getnotesbyid/`)
      .set({ authorization: token })
      .end((err, res) => {
        if (err) {
          console.log("plz check your credential");
          return done();
        }
        res.should.have.status(404);
        return done();
      });
  });
  it("when call getNoteById with validToken , should return appropriate response", (done) => {
    const token = noteInputs.notes.loginValidToken;
    const id = noteInputs.notes.GetById;
    chai
      .request(server)
      .get(`/getnotesbyid/${id}`)
      .set({ authorization: token })
      .end((err, res) => {
        if (err) {
          console.log("plz check your credential");
          return done(err);
        }
        res.should.have.status(200);
        return done();
      });
  });
  it("when call getNoteById with validToken , should return appropriate response from service", (done) => {
    const token = noteInputs.notes.loginValidToken;
    const id = noteInputs.notes.GetById;
    chai
      .request(server)
      .get(`/getnotesbyid/${id}`)
      .set({ authorization: token })
      .end((err, res) => {
        if (err) {
          console.log("plz check your credential");
          return done(err);
        }
        res.should.have.status(200);
        return done();
      });
  });
  it("when call getNoteById with validToken , should return appropriate response from model", (done) => {      
    const token = noteInputs.notes.loginValidToken;
    const id = noteInputs.notes.GetById;
    chai
      .request(server)
      .get(`/getnotesbyid/${id}`)
      .set({ authorization: token })
      .end((err, res) => {
        if (err) {
          console.log("plz check your credential");
          return done(err);
        }
        res.should.have.status(200);
        return done();
      });
  });
  it("when call getNoteById with validToken using find method , should return appropriate response from model", (done) => {
    const token = noteInputs.notes.loginValidToken;
    const id = noteInputs.notes.GetById;
    chai
      .request(server)
      .get(`/getnotesbyid/${id}`)
      .set({ authorization: token })
      .end((err, res) => {
        if (err) {
          console.log("plz check your credential");
          return done(err);
        }
        res.should.have.status(200);
        return done();
      });
  });
});
describe("Update Note By Id", () => {
  it.only("when call updateNoteById with validToken , should return appropriate response from controller", (done) => {
    const token = noteInputs.notes.loginValidToken;
    chai
      .request(server)
      .put("/updatenotes/:note_id")
      .set({ authorization: token })
      .end((err, res) => {
        if (err) {
          console.log("plz check your credential");
          return done();
        }
        res.should.have.status(201);
        return done();
      });
  });
  it.only("when call updateNoteById with inValidToken , should return appropriate response from controller", (done) => {
    const token = noteInputs.notes.TokenInvalid;
    chai
      .request(server)
      .put("/updatenotes/:note_id")
      .set({ authorization: token })
      .end((err, res) => {
        if (err) {
          console.log("plz check your credential");
          return done();
        }
        res.should.have.status(201);
        return done();
      });
  });
  it.only("when call updateNoteById with ValidToken , should return appropriate response from controller", (done) => {
    const token = noteInputs.notes.loginValidToken;
    chai
      .request(server)
      .put("/updatenotes/:note_id")
      .set({ authorization: token })
      .end((err, res) => {
        if (err) {
          console.log("plz check your credential");
          return done();
        }
        res.should.have.status(201);
        return done();
      });
  });
  it.only("when call updateNoteById with valid input , should return appropriate response from controller", (done) => {
      const token = noteInputs.notes.loginValidToken;
      const id = noteInputs.notes.UpdateById;
      const updateNote = {
        title: faker.lorem.word(),
        description: faker.lorem.sentence()
      };
      chai
        .request(server)
        .put(`/updatenotes/${id}`)
        .set({ authorization: token })
        .send(updateNote)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          res.should.have.status(201);
          done();
        });
    });
    it.only("when call updateNoteById with valid input , should return appropriate response from service", (done) => {
      const token = noteInputs.notes.loginValidToken;
      const id = noteInputs.notes.UpdateById;
      const updateNote = {
        title: faker.lorem.word(),
        description: faker.lorem.sentence()
      };
      chai
        .request(server)
        .put(`/updatenotes/${id}`)
        .set({ authorization: token })
        .send(updateNote)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          res.should.have.status(201);
          done();
        });
    });
    it.only("when call updateNoteById , should return appropriate response from model", (done) => {
      const token = noteInputs.notes.loginValidToken;
      const id = noteInputs.notes.UpdateById;
      const updateNote = {
        title: faker.lorem.word(),
        description: faker.lorem.sentence()
      };
      chai
        .request(server)
        .put(`/updatenotes/${id}`)
        .set({ authorization: token })
        .send(updateNote)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          res.should.have.status(201);
          done();
        });
    });
    it.only("given id is matched then update, should return proper response", (done) => {
      const token = noteInputs.notes.loginValidToken;
      const id = noteInputs.notes.UpdateById;
      const updateNote = {
        title: faker.lorem.word(),
        description: faker.lorem.sentence()
      };
      chai
        .request(server)
        .put(`/updatenotes/${id}`)
        .set({ authorization: token })
        .send(updateNote)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          res.should.have.status(201);
          done();
        });
    });
});
