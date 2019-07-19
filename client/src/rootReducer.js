import { combineReducers } from "redux";

import articles from "./reducers/articles";
import comments from "./reducers/comments";
import oneArticle from "./reducers/oneArticle";

export default combineReducers({
  articles,
  comments,
  oneArticle
});
