import React from "react";
import Header from "./Header";

import "./Layout.sass";

const Layout = ({ children }) => {
  return (
    <div id="layout">
      <Header />
      <main className="o-container">{children}</main>
    </div>
  );
};

export default Layout;
