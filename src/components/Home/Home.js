import { useEffect, useState } from "react";
import { getAllArtists } from "../../services/artistsRepository";
import Artist from "../Artist/Artist";

import "./Home.sass";

const Home = () => {
  const [artists, setArtists] = useState();
  useEffect(() => {
    getAllArtists().then((artists) => setArtists(artists));
  }, []);

  return (
    <div className="home">
      <h1>My favourite bands</h1>
      {artists?.length &&
        artists.map((artist) => (
          <Artist key={artist.id} name={artist.name} gender={artist.gender} />
        ))}
    </div>
  );
};

export default Home;
