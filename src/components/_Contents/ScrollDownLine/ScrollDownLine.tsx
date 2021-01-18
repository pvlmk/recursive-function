import * as React from "react";

import { motion } from "framer-motion";

import "./scroll-down-line.scss";

function ScrollDownLine() {
  return (
    <div className="scroll-down-line">
      <motion.div
        animate={{
          backgroundPosition: ["0 -75px", "0 75px"],
        }}
        className="scroll-down-line__line"
        transition={{
          duration: 2.2,
          ease: [0.76, 0, 0.3, 1],
          repeat: Infinity,
        }}
      />
    </div>
  );
}

export default React.memo(ScrollDownLine);
