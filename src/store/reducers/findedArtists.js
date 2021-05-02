import { SET_FINDED_ARTISTS } from "../actions/findedArtists";

const findedArtistsReducer = (state = [], action) => {
  switch (action.type) {
    case SET_FINDED_ARTISTS:
      return [...action.payload];
    default:
      return state;
  }
};

export default findedArtistsReducer;
