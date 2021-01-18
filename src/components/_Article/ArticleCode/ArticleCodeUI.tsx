import React from "react";

import { PropsUI } from "./types";

import "./article-code.scss";

function ArticleCodeUI({ children }: PropsUI) {
  return (
    <pre className="article-code__pre">
      <code className="article-code__code">{children}</code>
    </pre>
  );
}

export default React.memo(ArticleCodeUI);
