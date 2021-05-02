import { useSelector } from "react-redux";
import useFindArtists from "../../hooks/useSearchArtists";
import ArtistList from "../../components/ArtistList/ArtistList";
import Search from "../../components/Search/Search";

import "./Home.sass";

const Home = () => {
  const findedArtists = useSelector((s) => s.findedArtists);
  const searchArtists = useFindArtists();

  return (
    <div className="home">
      <Search onsubmit={searchArtists} />
      <ArtistList artists={findedArtists} />
    </div>
  );
};

export default Home;
