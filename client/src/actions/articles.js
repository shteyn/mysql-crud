import api from "../api";
import { GET_ALL_ARTICLES, GET_ONE_ARTICLE } from "../types";

export const allArticles = allArticles => ({
  type: GET_ALL_ARTICLES,
  allArticles
});

export const oneArticle = oneArticle => ({
  type: GET_ONE_ARTICLE,
  oneArticle
});

export const getAllArticles = () => dispatch =>
  api.articles
    .getAllArticles()
    .then(articles => {
      dispatch(allArticles(articles));
    })
    .catch(err => {
      console.log("getAllArticles", err);
    });

export const getOneArticle = id => dispatch =>
  api.articles
    .getOneArticle(id)
    .then(article => {
      dispatch(oneArticle(article));
    })
    .catch(err => {
      console.log("getOneArticle", err);
    });

export const postArticle = article => dispatch =>
  api.articles
    .postArticle(article)
    .then(response => {
      if (response.data) {
        api.articles.getAllArticles().then(articles => {
          dispatch(allArticles(articles));
        });
      } else {
        api.articles.getAllArticles().then(articles => {
          dispatch(allArticles(articles));
        });
      }
    })
    .catch(err => {
      console.log("Error updateProfile", err);
    });

export const updateArticle = articleData => dispatch =>
  api.articles
    .updateArticle(articleData)
    .then(response => {
      if (response.data) {
        api.articles.getOneArticle(response).then(article => {
          dispatch(oneArticle(article));
        });
      } else {
        api.articles.getOneArticle(response).then(article => {
          dispatch(oneArticle(article));
        });
      }
    })
    .catch(err => {
      console.log("Error updateProfile", err);
    });

export const deleteArticle = id => dispatch =>
  api.articles
    .deleteArticle(id)
    .then(response => {
      if (response.data) {
        api.articles.getAllArticles().then(articles => {
          dispatch(allArticles(articles));
        });
      } else {
        api.articles.getAllArticles().then(articles => {
          dispatch(allArticles(articles));
        });
      }
    })
    .catch(err => {
      console.log("Error updateProfile", err);
    });
