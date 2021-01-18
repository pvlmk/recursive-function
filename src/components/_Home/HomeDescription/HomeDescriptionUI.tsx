import * as React from "react";
import SpotlightItem from "../../SpotlightItem/SpotlightItem";

import { PropsUI, PropsItem } from "./types";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import "./home-description.scss";

function Arrow({ id, isArticle }: { id: string; isArticle: boolean }) {
  return (
    <Link to={isArticle ? `/articles/${id}` : `/contents`}>
      <div className="home-description__arrow-container">
        <motion.div
          animate={{ x: [-5, 5, -5] }}
          className="home-description__arrow"
          transition={{ duration: 3, repeat: Infinity }}
        >
          <HiArrowNarrowRight />
        </motion.div>
        <span>Open</span>
      </div>
    </Link>
  );
}

function Item({ id, isArticle, preview, title }: PropsItem) {
  return (
    <div className="home-description__item">
      <SpotlightItem
        id={id}
        isArticle={isArticle}
        title={title}
        forDescription={true}
      />
      <p className="home-description__preview">{preview}</p>
      <Arrow id={id} isArticle={isArticle} />
    </div>
  );
}

function HomeDescriptionUI({ spotlightItems }: PropsUI) {
  return (
    <div className="home-description">
      <ul>
        {spotlightItems.map(({ id, isArticle, preview, title }) => (
          <Item
            id={id}
            isArticle={isArticle}
            key={id}
            preview={preview}
            title={title}
          />
        ))}
      </ul>
    </div>
  );
}

export default React.memo(HomeDescriptionUI);
