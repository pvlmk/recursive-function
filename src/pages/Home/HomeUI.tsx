import * as React from "react";

import HomeDescription from "../../components/_Home/HomeDescription/HomeDescription";
import HomePreview from "../../components/_Home/HomePreview/HomePreview";
import HomeBody from "../../components/_Home/HomeBody/HomeBody";
import HomeHero from "../../components/_Home/HomeHero/HomeHero";

import "./home.scss";

interface Props {
  isMobileScreen: boolean;
}

function HomeUI({ isMobileScreen }: Props) {
  return (
    <div className="home">
      <HomeHero />
      <HomePreview />
      <HomeBody>
        <HomeDescription />
      </HomeBody>
    </div>
  );
}

export default React.memo(HomeUI);
