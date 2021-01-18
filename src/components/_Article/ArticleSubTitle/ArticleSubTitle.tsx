import React from "react";

import ArticleSubTitleUI from "./ArticleSubTitleUI";

import {
  Props,
  MotionState,
  Style,
  OwnProps,
  StateProps,
  DispatchProps,
} from "./types";

function ArticleSubTitle({ children }: Props) {
  const [style, setStyle] = React.useState<Style>({});
  const [motionState, setMotionState] = React.useState<MotionState>({});

  return <ArticleSubTitleUI children={children} />;
}
export default ArticleSubTitle;
