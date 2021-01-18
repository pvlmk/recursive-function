import * as React from "react";
import data from "../../data/data";

import ListItem from "../../components/_Contents/ListItem/ListItem";
import ScrollDownLine from "../../components/_Contents/ScrollDownLine/ScrollDownLine";

import "./contents.scss";

import { motion } from "framer-motion";

interface Props {
  background: string;
  isMobileScreen: boolean;
}

function ContentsUI({ background, isMobileScreen }: Props) {
  return (
    <div className="contents">
      <div className="contents__overlay">
        {background && (
          <img
            src={background}
            alt="Contents Background"
            className="contents__overlay-image"
          />
        )}
      </div>
      <div className="contents__scroll">
        {!isMobileScreen && (
          <>
            <div className="contents__scroll-text">scroll</div>
            <ScrollDownLine />{" "}
          </>
        )}
      </div>
      <motion.ul
        animate={{
          justifyContent:
            data.map(({ isArticle }) => isArticle).length < 5
              ? "center"
              : undefined,
        }}
        className="contents__list"
        id="contents-list"
      >
        {data.map(
          ({ id, isArticle, title }, index) =>
            isArticle && (
              <ListItem
                id={id}
                index={index}
                key={`item-${index}`}
                text={title}
              />
            )
        )}
      </motion.ul>
    </div>
  );
}

export default React.memo(ContentsUI);
