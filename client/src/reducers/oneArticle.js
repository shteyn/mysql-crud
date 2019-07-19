import { GET_ONE_ARTICLE } from "../types";

const initialState = {
  oneArticle: {},
  loading: false
};

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case GET_ONE_ARTICLE:
      return {
        ...state,
        oneArticle: action.oneArticle
      };

    default:
      return state;
  }
}
