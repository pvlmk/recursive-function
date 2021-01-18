import React from "react";

import { PropsUI } from "./types";

import "./article-picture.scss";

function ArticlePictureUI({ image }: PropsUI) {
  return (
    <div className="article-picture">
      <img
        src={image}
        alt="Article Picture"
        className="article-picture__image"
      />
    </div>
  );
}

export default React.memo(ArticlePictureUI);
