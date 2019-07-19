//importing connection
const knex = require("./knex");

module.exports = {
  //ARTICLES QUERIES
  getAllArticles() {
    return knex("articles_tbl");
  },
  getOneArticle(id) {
    return knex("articles_tbl")
      .where("id", id)
      .first();
  },
  postArticle(article) {
    return knex("articles_tbl").insert(article);
  },
  updateArticle(id, article) {
    return knex("articles_tbl")
      .where("id", id)
      .update(article);
  },
  //COMMENTS QUERIES
  getAllComments() {
    return knex("article_comments");
  },
  postComment(comment) {
    return knex("article_comments").insert(comment);
  }
};
