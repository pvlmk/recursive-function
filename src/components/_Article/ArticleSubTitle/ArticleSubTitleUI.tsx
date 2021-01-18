import React from "react";

import { PropsUI } from "./types";

import "./article-sub-title.scss";

function ArticleSubTitleUI({ children }: PropsUI) {
  return <h3 className="article-sub-title">{children}</h3>;
}

export default React.memo(ArticleSubTitleUI);
