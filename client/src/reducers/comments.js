import { GET_ALL_COMMENTS } from "../types";

const initialState = {
  allComments: [],
  loading: false
};

export default function(state = initialState, action = {}) {
  switch (action.type) {
    case GET_ALL_COMMENTS:
      return {
        allComments: action.allComments
      };

    default:
      return state;
  }
}
