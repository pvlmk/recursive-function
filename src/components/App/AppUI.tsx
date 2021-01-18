import * as React from "react";

import Routes from "../../pages/routes";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function AppUI() {
  return (
    <>
      <Header />
      <Routes />
      <Footer />
    </>
  );
}

export default AppUI;
