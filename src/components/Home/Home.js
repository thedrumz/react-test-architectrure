import { useSelector } from "react-redux";
import useFindArtists from "../../hooks/useSearchArtists";
import ArtistList from "../ArtistList/ArtistList";
import Search from "../Search/Search";

import "./Home.sass";

const Home = () => {
  const findedArtists = useSelector((s) => s.findedArtists);
  const searchArtists = useFindArtists();

  return (
    <div className="home">
      <h1>My favourite bands</h1>
      <Search onsubmit={searchArtists} />
      <ArtistList artists={findedArtists} />
    </div>
  );
};

export default Home;
