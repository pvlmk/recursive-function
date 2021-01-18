import React from "react";

import ArticlePictureUI from "./ArticlePictureUI";

import {
  Props,
  MotionState,
  Style,
  OwnProps,
  StateProps,
  DispatchProps,
} from "./types";

function ArticlePicture({ image }: Props) {
  const [style, setStyle] = React.useState<Style>({});
  const [motionState, setMotionState] = React.useState<MotionState>({});

  return <ArticlePictureUI image={image} />;
}
export default ArticlePicture;
