import React from "react";
import PropTypes from "prop-types";
import ArtistCard from "../ArtistCard/ArtistCard";
import { FormattedMessage } from "react-intl";

import "./ArtistList.sass";

const ArtistList = ({ artists }) => {
  return (
    <div className="artist-list">
      {!artists?.length && (
        <p role="status">
          <FormattedMessage id="search.no-results" />
        </p>
      )}
      {artists.map((artist) => (
        <ArtistCard
          key={artist.id}
          name={artist.name}
          country={artist.country}
          disambiguation={artist.disambiguation}
          tags={artist.tags}
        />
      ))}
    </div>
  );
};

ArtistList.propTypes = {
  artists: PropTypes.array.isRequired,
};

export default ArtistList;
