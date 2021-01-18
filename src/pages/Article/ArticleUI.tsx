import * as React from "react";
import ArticleCode from "../../components/_Article/ArticleCode/ArticleCode";
import ArticleCover from "../../components/_Article/ArticleCover/ArticleCover";
import ArticleParagraph from "../../components/_Article/ArticleParagraph/ArticleParagraph";
import ArticleSubTitle from "../../components/_Article/ArticleSubTitle/ArticleSubTitle";

import "./article.scss";

interface Props {
  content: { selector: string; text: string | string[] }[];
  id: string;
  image: string;
  title: string;
}

function keyCreator(index: number, selector: string) {
  return `${selector}-${index}`;
}

function contentSwitcher(
  index: number,
  selector: string,
  text: string | string[]
) {
  switch (selector) {
    case "h3":
      return (
        <ArticleSubTitle key={keyCreator(index, selector)}>
          {text}
        </ArticleSubTitle>
      );
    case "p":
      return (
        <ArticleParagraph key={keyCreator(index, selector)}>
          {text}
        </ArticleParagraph>
      );
    case "code":
      return (
        <ArticleCode key={keyCreator(index, selector)}>{text}</ArticleCode>
      );
    default:
      break;
  }
}

function ArticleUI({ content, id, image, title }: Props) {
  return (
    <div className="article">
      <div className="article__hero">
        <h2 className="article__hero-text">{title}</h2>
        <ArticleCover image={image} />
      </div>
      <div className="aricle__body">
        {content.map(({ selector, text }, index) =>
          contentSwitcher(index, selector, text)
        )}
      </div>
    </div>
  );
}

export default React.memo(ArticleUI);
