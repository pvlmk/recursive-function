import * as React from "react";
import * as HomeActions from "../../../store/home/actions";
import WithConnect from "../../../hoc/WithConnect";
import useScreenWidth from "../../../hooks/useScreenWidth";

import PreviewUI from "./HomePreviewUI";

import {
  DispatchProps,
  MotionState,
  OwnProps,
  Props,
  StateProps,
  Style,
} from "./types";

const Preview: React.FC<Props> = ({
  previewOpacity,
  setPreviewIsComplete,
  setPreviewOpacity,
}: Props) => {
  const [motionState, setMotionState] = React.useState<MotionState>({
    root: {
      opacity: 0,
    },
  });
  const [style, setStyle] = React.useState<Style>({
    root: {
      display: "none",
      position: "fixed",
      top: null,
    },
  });

  const isMobileScreen = !useScreenWidth(1024);

  React.useEffect(() => {
    let timer;

    if (previewOpacity <= 0) {
      timer = setTimeout(() => {
        setStyle({ ...style, root: { ...style.root, display: "none" } });
      }, 500);
    }
    if (previewOpacity > 0 && previewOpacity < 1) {
      clearTimeout(timer);
      setStyle({
        ...style,
        root: {
          ...style.root,
          display: "block",
          position: "fixed",
          top: isMobileScreen ? 300 : 200,
        },
      });
      setMotionState({
        ...motionState,
        root: { ...motionState.root, opacity: previewOpacity },
      });
      setPreviewIsComplete(false);
    }
    if (previewOpacity >= 1) {
      setMotionState({
        ...motionState,
        root: { ...motionState.root, opacity: 1 },
      });
      setStyle({
        ...style,
        root: {
          ...style.root,
          position: "relative",
          top: isMobileScreen ? 850 : 1600,
        },
      });
      setPreviewIsComplete(true);
    }

    return () => clearTimeout(timer);
  }, [previewOpacity]);

  React.useEffect(() => {
    function handler() {
      const scrollY = window.pageYOffset;

      if (scrollY < 600) setPreviewOpacity(0);
      if (scrollY > 600) setPreviewOpacity(0 + scrollY / 1500);
    }
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  });
  return <PreviewUI motionState={motionState} style={style} />;
};

export default WithConnect<OwnProps, StateProps, DispatchProps>(
  Preview,
  [{ selector: "previewOpacity", section: "home" }],
  { ...HomeActions }
);
