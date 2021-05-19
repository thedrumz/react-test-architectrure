import React from "react";
import PropTypes from "prop-types";
import TagList from "../TagList/TagList";

import "./ArtistCard.sass";

const ArtistCard = ({ name, country, disambiguation, tags }) => {
  return (
    <article className="o-card artist-card">
      <header className="artist-card__header">
        <h2 className="artist-card__title">{name}</h2>
        {country && <span className="artist-card__subtitle">({country})</span>}
        <i className="artist-card__favourite icon-heart"></i>
      </header>
      <section className="artist-card__content">
        <p>{disambiguation}</p>
      </section>
      <footer className="artist-card__footer">
        <TagList tags={tags} />
      </footer>
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
