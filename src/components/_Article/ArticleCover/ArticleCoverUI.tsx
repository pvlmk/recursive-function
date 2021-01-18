import React from "react";

import { PropsUI } from "./types";

import "./article-cover.scss";

function ArticleCoverUI({ image }: PropsUI) {
  return (
    <div className="article-cover">
      <img src={image} alt="Article Cover" className="article-cover__image" />
    </div>
  );
}

export default React.memo(ArticleCoverUI);
