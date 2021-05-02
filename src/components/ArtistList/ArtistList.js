import React from "react";
import PropTypes from "prop-types";
import ArtistCard from "../ArtistCard/ArtistCard";
import { FormattedMessage } from "react-intl";

import "./ArtistList.sass";

const ArtistList = ({ artists }) => {
  return !artists?.length ? (
    <NoResults />
  ) : (
    <div className="artist-list">
      <List artists={artists} />
    </div>
  );
};

const NoResults = () => {
  return (
    <p className="artist-list__no-results" role="status">
      <FormattedMessage id="search.no-results" />
    </p>
  );
};

const List = ({ artists }) => {
  return artists.map((artist) => (
    <ArtistCard
      key={artist.id}
      name={artist.name}
      country={artist.country}
      disambiguation={artist.disambiguation}
      tags={artist.tags}
    />
  ));
};

ArtistList.propTypes = {
  artists: PropTypes.array.isRequired,
};

List.propTypes = {
  artists: PropTypes.array.isRequired,
};

export default ArtistList;
