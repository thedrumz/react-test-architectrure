import React, { useState } from "react";
import { FormattedMessage } from "react-intl";

const Search = ({ onsubmit }) => {
  const [value, setValue] = useState("");

  return (
    <div className="search">
      <FormattedMessage id="search.placeholder">
        {(placeholder) => (
          <input
            type="text"
            value={value}
            placeholder={placeholder}
            onChange={(e) => setValue(e.target.value)}
          />
        )}
      </FormattedMessage>
      <button onClick={() => onsubmit(value)}>
        <FormattedMessage id="search.button" />
      </button>
    </div>
  );
};

export default Search;
