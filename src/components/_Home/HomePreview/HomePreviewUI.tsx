import * as React from "react";

import { PropsUI } from "./types";
import { motion } from "framer-motion";

import "./home-preview.scss";

function PreviewUI({ motionState, style }: PropsUI) {
  return (
    <motion.div
      animate={motionState.root}
      className="home-preview"
      style={style.root}
    >
      <h1 className="home-preview__text">
        Recursive Function is almanac of Javascript FP Paradigm
      </h1>
    </motion.div>
  );
}

export default React.memo(PreviewUI);
