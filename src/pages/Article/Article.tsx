import * as React from "react";
import data from "../../data/data";

import ArticleUI from "./ArticleUI";

import { Redirect, useParams } from "react-router-dom";
import { DataElement } from "../../types/useful";

function Article() {
  const { id } = useParams<{ id: string }>();

  const [selectedArticle, setSelectedArticle] = React.useState<DataElement>(
    data.filter((el) => el.id === id)[0]
  );

  React.useEffect(
    () => setSelectedArticle(data.filter((el) => el.id === id)[0]),
    [id]
  );

  return selectedArticle ? (
    <ArticleUI
      content={selectedArticle.content}
      id={id}
      image={selectedArticle.image}
      title={selectedArticle.title}
    />
  ) : (
    <Redirect to="/*" />
  );
}

export default Article;
