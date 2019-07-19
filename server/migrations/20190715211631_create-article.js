exports.up = function(knex, Promise) {
  return createArticlesTable()
    .then(createCommentsTable)
    .then(() => knex.destroy());

  function createArticlesTable() {
    return knex.schema.createTable("articles_tbl", table => {
      table.increments("id").unsigned();
      table.string("title");
      table.string("body");
    });
  }

  function createCommentsTable() {
    return knex.schema.createTable("article_comments", table => {
      table
        .increments("id")
        .primary()
        .unsigned();
      table.string("body");
      table
        .integer("article_id")
        .unsigned()
        .references("articles_tbl.id");
    });
  }
};

exports.down = function(knex, Promise) {
  return dropCommentsTable().then(dropArticlesTable);

  function dropArticlesTable() {
    return knex.schema.dropTable("articles_tbl");
  }

  function dropArticlesTable() {
    return knex.schema.dropTable("article__comments");
  }
};
