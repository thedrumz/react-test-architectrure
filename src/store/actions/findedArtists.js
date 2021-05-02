export const SET_FINDED_ARTISTS = "SET_FINDED_ARTISTS";

export const setFindedArtists = (result) => {
  return {
    type: SET_FINDED_ARTISTS,
    payload: result,
  };
};
