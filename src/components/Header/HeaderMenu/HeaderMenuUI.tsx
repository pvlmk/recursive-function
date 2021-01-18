import * as React from "react";

import { motion } from "framer-motion";
import { PropsUI } from "./types";

import "./header-menu.scss";

const transition = { duration: 0.44, ease: [0.85, 0, 0.15, 1] };
const variants = {
  buttonUp: {
    y: -20,
    color: "white",
    transition,
  },
  buttonDown: {
    y: 0,
    color: "#000000",
    transition,
  },
};

function HeaderMenuUI({ isAsideOpen, toggleAside }: PropsUI) {
  return (
    <motion.div
      animate={isAsideOpen ? "buttonUp" : "buttonDown"}
      className="header-menu"
      variants={variants}
    >
      <span className="header-menu__text" onClick={toggleAside}>
        Menu
      </span>
    </motion.div>
  );
}

export default React.memo(HeaderMenuUI);
