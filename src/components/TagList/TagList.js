import React from "react";
import PropTypes from "prop-types";

import "./TagList.sass";

const TagList = ({ tags }) => {
  const maxTags = 3;
  if (!tags?.length) return false;
  return (
    <ul className="o-ui-list o-ui-list--horizontal tag-list">
      {tags.slice(0, maxTags).map((tag, i) => (
        <li className="tag-list__item" key={i}>
          {tag.name}
        </li>
      ))}
    </ul>
  );
};

TagList.propTypes = {
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      count: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default TagList;
