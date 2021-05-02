import React from "react";
import PropTypes from "prop-types";

const TagList = ({ tags }) => {
  if (!tags?.length) return false;
  return (
    <ul className="tag-list">
      {tags.map((tag, i) => (
        <li key={i}>{tag.name}</li>
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
