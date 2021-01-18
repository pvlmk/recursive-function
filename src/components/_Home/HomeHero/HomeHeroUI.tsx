import * as React from "react";

import { PropsUI } from "./types";
import { motion } from "framer-motion";
import { headerCoverLeft, headerCoverRight } from "../../../data/images";

import "./home-hero.scss";

function HomeHeroUI({ motionState, style }: PropsUI) {
  return (
    <motion.div
      animate={motionState.root}
      className="home-hero"
      style={style.root}
    >
      <span className="home-hero__text">Recursive</span>
      <motion.div animate={motionState.images} className="home-hero__images">
        <div className="home-hero__image-container">
          <img className="home-hero__image" src={headerCoverLeft} />
        </div>
        <div className="home-hero__image-container">
          <img className="home-hero__image" src={headerCoverRight} />
        </div>
      </motion.div>
      <span className="home-hero__text">Function</span>
    </motion.div>
  );
}

export default React.memo(HomeHeroUI);
