import React, { useState } from "react";
import { FormattedMessage } from "react-intl";

import "./Search.sass";

const Search = ({ onsubmit }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onsubmit(value);
  };

  return (
    <div className="search">
      <form className="search__form" onSubmit={handleSubmit}>
        <FormattedMessage id="search.placeholder">
          {(placeholder) => (
            <input
              type="text"
              className="o-input search__input"
              value={value}
              placeholder={placeholder}
              onChange={(e) => setValue(e.target.value)}
            />
          )}
        </FormattedMessage>
        <button
          className="o-btn search__button"
          // onClick={() => onsubmit(value)}
        >
          <FormattedMessage id="search.button" />
        </button>
      </form>
    </div>
  );
};

export default Search;
