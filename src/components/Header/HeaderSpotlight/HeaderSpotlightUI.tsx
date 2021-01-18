import * as React from "react";

import SpotlightItem from "../../SpotlightItem/SpotlightItem";
import HeaderSmallLogo from "../HeaderSmallLogo/HeaderSmallLogo";

import { motion } from "framer-motion";
import { PropsUI } from "./types";

import "./header-spotlight.scss";

function HeaderSpotlightUI({
  cnState,
  forAside,
  forHeader,
  motionState,
  spotlightItems,
}: PropsUI) {
  const { initial, transition, ...animate } = motionState.logoContainer;
  return (
    <div className={`header-spotlight ${cnState.headerSpotlight}`}>
      <motion.div
        animate={motionState.itemsContainer}
        className="header-spotlight__items-container"
      >
        {spotlightItems.slice(0, 2).map(({ id, isArticle, title }, index) => (
          <SpotlightItem
            id={id}
            forAside={forAside ? true : false}
            forHeader={forHeader ? true : false}
            isArticle={isArticle}
            key={`spotlight-${index}`}
            title={title}
          />
        ))}
      </motion.div>
      {forHeader && (
        <motion.div
          animate={animate}
          className="header-spotlight__logo-container"
          initial={initial}
          transition={transition}
        >
          <HeaderSmallLogo />
        </motion.div>
      )}
      <motion.div
        animate={motionState.itemsContainer}
        className="header-spotlight__items-container"
      >
        {spotlightItems
          .slice(2, spotlightItems.length)
          .map(({ id, isArticle, title }, index) => (
            <SpotlightItem
              id={id}
              forAside={forAside ? true : false}
              forHeader={forHeader ? true : false}
              isArticle={isArticle}
              key={`spotlight-${index}`}
              title={title}
            />
          ))}
      </motion.div>
    </div>
  );
}

export default React.memo(HeaderSpotlightUI);
