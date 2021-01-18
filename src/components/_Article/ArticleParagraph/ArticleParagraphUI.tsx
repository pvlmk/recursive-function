import React from "react";

import { PropsUI } from "./types";

import "./article-paragraph.scss";

function ArticleParagraphUI({ children }: PropsUI) {
  return <p className="article-paragraph">{children}</p>;
}

export default React.memo(ArticleParagraphUI);
