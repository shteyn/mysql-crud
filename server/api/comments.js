const express = require("express");
const knex = require("../db/knex");

const router = express.Router();
const queries = require("../db/queries");

function validComment(comment) {
  return (hasBody =
    typeof comment.body == "string" && comment.body.trim() != "");
}

//POST a comment
router.post("/", (req, res, next) => {
  if (validComment(req.body.comment)) {
    //insert to db
    queries.postComment(req.body.comment).then(comment => {
      res.json(comment);
    });
  } else {
    next(new Error("Invalid Article"));
  }
});

//GET all comments
router.get("/", (req, res) => {
  queries.getAllComments().then(comments => {
    res.json(comments);
  });
});
module.exports = router;
