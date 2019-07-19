import axios from "axios";

export default {
  articles: {
    getAllArticles: () =>
      axios
        .get(`${process.env.REACT_APP_API_HOST}/api/articles`)
        .then(res => res.data),
    getOneArticle: id =>
      axios
        .get(`${process.env.REACT_APP_API_HOST}/api/articles/${id}`)
        .then(res => res.data),
    postArticle: article =>
      axios
        .post(`${process.env.REACT_APP_API_HOST}/api/articles`, {
          article
        })
        .then(res => res.data),
    updateArticle: article =>
      axios
        .put(`${process.env.REACT_APP_API_HOST}/api/articles/${article.id}`, {
          article
        })
        .then(res => res.data),
    deleteArticle: id =>
      axios
        .delete(`${process.env.REACT_APP_API_HOST}/api/articles/${id}`)
        .then(res => res.data),
    postComment: comment =>
      axios
        .post(`${process.env.REACT_APP_API_HOST}/api/comments`, {
          comment
        })
        .then(res => res.data),
    getAllComments: () =>
      axios
        .get(`${process.env.REACT_APP_API_HOST}/api/comments`)
        .then(res => res.data)
  }
};
