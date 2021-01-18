interface Props {
  previewOpacity: number;
  setPreviewIsComplete: (state: boolean) => void;
  setPreviewOpacity: (value: number) => void;
}

interface PropsUI {
  motionState: MotionState;
  style: Style;
}

interface Style {
  root: {
    display: string;
    position: "fixed" | "relative";
    top: number;
  };
}

interface MotionState {
  root: {
    opacity: number;
  };
}

type OwnProps = {};

type StateProps = Pick<Props, "previewOpacity">;

type DispatchProps = Pick<Props, "setPreviewIsComplete" | "setPreviewOpacity">;

export {
  Props,
  PropsUI,
  Style,
  MotionState,
  OwnProps,
  StateProps,
  DispatchProps,
};
