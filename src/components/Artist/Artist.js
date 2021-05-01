import React from "react";
import PropTypes from "prop-types";

const Artist = ({ name, gender }) => {
  return (
    <article className="artist">
      <h2 className="artist-name">{name}</h2>
      <span className="artist-gender">{gender}</span>
    </article>
  );
};

Artist.propTypes = {
  name: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
};

export default Artist;
