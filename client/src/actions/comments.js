import api from "../api";
import { GET_ALL_COMMENTS, GET_ONE_ARTICLE } from "../types";

export const allComments = allComments => ({
  type: GET_ALL_COMMENTS,
  allComments
});

export const oneArticle = oneArticle => ({
  type: GET_ONE_ARTICLE,
  oneArticle
});

export const getAllComments = () => dispatch =>
  api.articles
    .getAllComments()
    .then(comments => {
      dispatch(allComments(comments));
    })
    .catch(err => {
      console.log("getAllComments", err);
    });

export const postComment = comment => dispatch =>
  api.articles
    .postComment(comment)
    .then(response => {
      if (response.data) {
        api.articles.getAllComments().then(comments => {
          dispatch(allComments(comments));
        });
      } else {
        api.articles.getAllComments().then(comments => {
          dispatch(allComments(comments));
        });
      }
    })
    .catch(err => {
      console.log("Error updateProfile", err);
    });
