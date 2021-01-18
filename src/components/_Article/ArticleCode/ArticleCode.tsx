import * as React from "react";

import ArticleCodeUI from "./ArticleCodeUI";

import {
  Props,
  MotionState,
  Style,
  OwnProps,
  StateProps,
  DispatchProps,
} from "./types";

function ArticleCode({ children }: Props) {
  const [style, setStyle] = React.useState<Style>({});
  const [motionState, setMotionState] = React.useState<MotionState>({});

  return <ArticleCodeUI children={children} />;
}
export default ArticleCode;
