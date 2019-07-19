const request = require("supertest");
const expect = require("chai").expect;
const knex = require("../db/knex.js"); // connection
const app = require("../app.js");

describe("CRUD articles blog", () => {
  before(done => {
    //run migrations
    knex.migrate
      .latest()
      .then(() => {
        // run seeds
        return knex.seed.run();
      })
      .then(() => done());
  });

  it("GET All Articles", done => {
    request(app)
      .get("/api/articles")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .then(response => {
        expect(response.body).to.be.a("array");
        done();
      });
  });

  it("GET All Comments", done => {
    request(app)
      .get("/api/comments")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .then(response => {
        expect(response.body).to.be.a("array");
        done();
      });
  });

  it("POST an article", done => {
    request(app)
      .post("/api/articles")
      .send({
        article: {
          title: "New Post",
          body: "New Post body"
        }
      })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .then(response => {
        expect(response.body).to.be.a("array");
        done();
      });
  });

  it("Delete an article", done => {
    request(app)
      .delete("/api/articles/2")
      .expect("Content-Type", /json/)
      .expect(200)
      .then(response => {
        expect(response.body).to.be.a("object");
        expect(response.body).to.deep.equal({
          deleted: true
        });
        done();
      });
  });
});
