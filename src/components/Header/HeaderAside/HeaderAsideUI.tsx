import * as React from "react";
import HeaderSpotlight from "../HeaderSpotlight/HeaderSpotlight";

import { motion } from "framer-motion";
import { PropsUI } from "./types";

import "./header-aside.scss";

const transition = { duration: 0.5, ease: [0.65, 0, 0.35, 1] };
const variants = {
  openAside: { left: 0, display: "block", transition },
  closeAside: {
    left: "100%",
    display: "none",
    transition: { ...transition, display: { delay: 0.5 } },
  },
};

function HeaderAsideUI({ isAsideOpen }: PropsUI) {
  return (
    <motion.div
      animate={isAsideOpen ? "openAside" : "closeAside"}
      className="header-aside"
      initial="closeAside"
      variants={variants}
    >
      <div className="header-aside__spotlight-container">
        <HeaderSpotlight forAside={true} />
      </div>
    </motion.div>
  );
}

export default React.memo(HeaderAsideUI);
