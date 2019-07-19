const express = require("express");

const router = express.Router();
const queries = require("../db/queries");
const knex = require("../db/knex");

//Check if ID is valid
function checkId(req, res, next) {
  if (!isNaN(req.params.id)) return next();
  next(new Error("Invalid ID"));
}

//Check if article is valid
function validArticle(article) {
  const hasTitle =
    typeof article.title == "string" && article.title.trim() != "";
  const hasBody = typeof article.body == "string" && article.body.trim() != "";
  return hasTitle && hasBody;
}

//GET all articles
router.get("/", (req, res) => {
  queries.getAllArticles().then(articles => {
    res.json(articles);
  });
});

//GET single article by ID
router.get("/:id", checkId, (req, res, next) => {
  queries.getOneArticle(req.params.id).then(article => {
    if (article) {
      res.json(article);
    } else {
      next();
    }
  });
});

//POST an article
router.post("/", (req, res, next) => {
  if (validArticle(req.body.article)) {
    //insert to db
    queries.postArticle(req.body.article).then(article => {
      res.json(article);
    });
  } else {
    next(new Error("Invalid Article"));
  }
});

//Update an article
router.put("/:id", checkId, (req, res, next) => {
  if (validArticle(req.body.article)) {
    //insert to db
    queries
      .updateArticle(req.params.id, req.body.article)
      .then(updatedArticle => {
        res.json(updatedArticle);
      });
  } else {
    next(new Error("Invalid Article"));
  }
});

//Delete an article
router.delete("/:id", checkId, (req, res, next) => {
  knex("article_comments")
    .where("article_id", req.params.id)
    .delete()
    .then(() => {
      knex("articles_tbl")
        .where("id", req.params.id)
        .del()
        .then(() => {
          res.json({
            deleted: true
          });
        });
    });
});

module.exports = router;
