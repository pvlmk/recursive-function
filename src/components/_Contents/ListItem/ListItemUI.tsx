import * as React from "react";

import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";

import "./list-item.scss";

interface Props {
  id: string;
  hoverTrigger: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  text: string;
}

function ListItemUI({
  id,
  hoverTrigger,
  onMouseEnter,
  onMouseLeave,
  text,
}: Props) {
  return (
    <Link to={`/articles/${id}`}>
      <li
        className="list-item"
        id="contents-list-item"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <motion.span
          animate={{ color: hoverTrigger ? "#ffffff" : undefined }}
          className="list-item__text"
        >
          {text}
        </motion.span>
      </li>
    </Link>
  );
}

export default React.memo(ListItemUI);
