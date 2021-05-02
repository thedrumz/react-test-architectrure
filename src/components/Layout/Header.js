import React from "react";
import { FormattedMessage } from "react-intl";

const Header = () => {
  return (
    <header className="main-header">
      <div className="o-container">
        <h1 className="main-header__title">
          <FormattedMessage id="header.title" />
        </h1>
      </div>
    </header>
  );
};

export default Header;
