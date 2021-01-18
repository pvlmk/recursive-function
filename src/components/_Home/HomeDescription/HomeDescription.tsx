import * as React from "react";
import WithConnect from "../../../hoc/WithConnect";

import HomeDescriptionUI from "./HomeDescriptionUI";

import {
  Props,
  MotionState,
  Style,
  OwnProps,
  StateProps,
  DispatchProps,
} from "./types";

const HomeDescription: React.FC<Props> = ({ spotlightItems }: Props) => {
  const [style, setStyle] = React.useState<Style>({});
  const [motionState, setMotionState] = React.useState<MotionState>({});

  return <HomeDescriptionUI spotlightItems={spotlightItems} />;
};
export default WithConnect<OwnProps, StateProps, DispatchProps>(
  HomeDescription,
  [{ selector: "spotlightItems", section: "header" }],
  null
);
