import React from "react";

import ArticleCoverUI from "./ArticleCoverUI";

import {
  Props,
  MotionState,
  Style,
  OwnProps,
  StateProps,
  DispatchProps,
} from "./types";

function ArticleCover({ image }: Props) {
  const [style, setStyle] = React.useState<Style>({});
  const [motionState, setMotionState] = React.useState<MotionState>({});

  return <ArticleCoverUI image={image} />;
}
export default ArticleCover;
