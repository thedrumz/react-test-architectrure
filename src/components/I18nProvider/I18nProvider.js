import React from "react";
import PropTypes from "prop-types";
import { IntlProvider } from "react-intl";

import locales from "../../locales";

const I18nProvider = ({ children, defaultLocale }) => {
  const language = navigator.language.split(/[-_]/)[0];
  let selectedLocale = locales[language] || locales[defaultLocale];

  return (
    <IntlProvider locale={language} messages={selectedLocale}>
      {children}
    </IntlProvider>
  );
};

I18nProvider.propTypes = {
  defaultLocale: PropTypes.string.isRequired,
};

export default I18nProvider;
