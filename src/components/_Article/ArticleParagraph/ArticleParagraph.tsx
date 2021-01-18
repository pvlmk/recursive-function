import React from "react";

import ArticleParagraphUI from "./ArticleParagraphUI";

import {
  Props,
  MotionState,
  Style,
  OwnProps,
  StateProps,
  DispatchProps,
} from "./types";

function ArticleParagraph({ children }: Props) {
  const [style, setStyle] = React.useState<Style>({});
  const [motionState, setMotionState] = React.useState<MotionState>({});

  return <ArticleParagraphUI children={children} />;
}
export default ArticleParagraph;
