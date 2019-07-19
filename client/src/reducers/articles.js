import { GET_ALL_ARTICLES } from "../types";

const initialState = {
  allArticles: [],
  loading: false
};

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case GET_ALL_ARTICLES:
      return {
        allArticles: action.allArticles
      };

    default:
      return state;
  }
}
