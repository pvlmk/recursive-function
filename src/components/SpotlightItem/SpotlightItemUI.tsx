import * as React from "react";

import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";

interface Props {
  bgColor: string;
  borderColor: string;
  borderRadius: number;
  cursor: string;
  id: string;
  hoverOff: () => void;
  hoverOn: () => void;
  fontSize: number;
  link: string;
  numberColor: string;
  onClick: () => void;
  title: string;
  titleColor: string;
}

function SpotlightItemUI({
  bgColor,
  borderColor,
  borderRadius,
  cursor,
  id,
  hoverOff,
  hoverOn,
  fontSize,
  link,
  numberColor,
  onClick,
  title,
  titleColor,
}: Props) {
  return (
    <Link style={{ cursor }} to={link}>
      <div
        className="spotlight-item"
        onClick={onClick}
        onMouseEnter={hoverOn}
        onMouseLeave={hoverOff}
        style={{ fontSize }}
      >
        <motion.span
          style={{
            border: `1px solid ${borderColor}`,
            borderRadius: `${borderRadius}px`,
            color: numberColor,
            backgroundColor: bgColor,
          }}
          className="spotlight-item__number"
        >
          {id}
        </motion.span>
        <motion.span
          style={{ color: titleColor }}
          className="spotlight-item__title"
        >
          {title}
        </motion.span>
      </div>
    </Link>
  );
}

export default React.memo(SpotlightItemUI);
