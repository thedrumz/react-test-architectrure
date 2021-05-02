export const getAllArtists = () => {
  const artist1 = fetchArtist("5b11f4ce-a62d-471e-81fc-a69a8278c7da");
  const artist2 = fetchArtist("fc43556b-9657-4680-8809-e50295380f98");

  return Promise.all([artist1, artist2]).then(artistMapper);
};

export const searchArtistsByName = (artistName) => {
  const encodedArtistName = encodeURI(artistName);
  return fetch(
    `http://musicbrainz.org/ws/2/artist?query=${encodedArtistName}&fmt=json`,
    {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  )
    .then((res) => res.json())
    .then((artists) => artists.artists || []);
};

const fetchArtist = (artistId) => {
  return fetch(
    `http://musicbrainz.org/ws/2/artist/${artistId}?fmt=json&inc=recordings`,
    {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  ).then((res) => res.json());
};

const artistMapper = (artist) => {
  return artist;
};
