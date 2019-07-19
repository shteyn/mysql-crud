const articles = require("../article.js");

exports.seed = function(knex) {
  return knex("article_comments")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("articles_tbl")
        .del()
        .then(function() {
          // Inserts seed entries
          return knex("articles_tbl").insert(articles);
        });
    });
};
