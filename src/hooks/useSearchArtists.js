import { useDispatch } from "react-redux";
import { searchArtistsByName } from "../services/artistsRepository";
import { setFindedArtists } from "../store/actions/findedArtists";

const useFindArtists = () => {
  const dispatch = useDispatch();
  return async (artistName) => {
    const result = await searchArtistsByName(artistName);
    dispatch(setFindedArtists(result));
  };
};

export default useFindArtists;
