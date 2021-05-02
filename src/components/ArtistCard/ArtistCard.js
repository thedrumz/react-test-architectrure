import React from "react";
import PropTypes from "prop-types";
import TagList from "./TagList";

const ArtistCard = ({ name, country, disambiguation, tags }) => {
  return (
    <article className="artist-card">
      <h2 className="artist-name">{name}</h2>
      <span className="artist-country">{country}</span>
      <p>{disambiguation}</p>
      <TagList tags={tags} />
    </article>
  );
};

ArtistCard.propTypes = {
  name: PropTypes.string.isRequired,
  country: PropTypes.string,
  disambiguation: PropTypes.string,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      count: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default ArtistCard;
