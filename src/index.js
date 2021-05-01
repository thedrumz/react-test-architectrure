import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import { store } from "./store/store";
import I18nProvider from "./components/I18nProvider/I18nProvider";
import Home from "./components/Home/Home";

import "./styles/index.sass";

ReactDOM.render(
  <React.StrictMode>
    <I18nProvider defaultLocale="en">
      <Provider store={store}>
        <Home />
      </Provider>
    </I18nProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
