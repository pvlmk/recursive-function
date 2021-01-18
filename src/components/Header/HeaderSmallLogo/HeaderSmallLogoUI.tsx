import * as React from "react";

import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

import "./header-small-logo.scss";

interface Props {
  color: string;
  isHover: boolean;
  scrollToPageUp: () => void;
}

function HeaderSmallLogoUI({ color, isHover, scrollToPageUp }: Props) {
  return (
    <NavLink onClick={scrollToPageUp} to="/">
      <motion.div
        className="header-small-logo"
        style={{ color }}
        transition={{ duration: 0.25 }}
        whileHover={{ color: isHover ? "#ffffff" : undefined }}
        whileTap={{ color: isHover ? "#ffffff" : undefined }}
      >
        <span className="header-small-logo__title">Recursive</span>
        <span className="header-small-logo__title">Function</span>
      </motion.div>
    </NavLink>
  );
}

export default HeaderSmallLogoUI;
