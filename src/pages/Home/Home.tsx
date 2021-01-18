import * as React from "react";
import useScreenWidth from "../../hooks/useScreenWidth";

import HomeUI from "./HomeUI";

function Home() {
  const isMobileScreen = !useScreenWidth(1024);

  return <HomeUI isMobileScreen={isMobileScreen} />;
}

export default Home;
