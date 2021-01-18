interface Props {
  heroCompress: number;
  heroPosition: number;
  heroScale: number;
  heroIsComplete: boolean;
  setHeroCompress: (heroCompress: number) => void;
  setHeroPosition: (heroPosition: number) => void;
  setHeroScale: (heroScale: number) => void;
  setHeroIsComplete: (state: boolean) => void;
}

interface PropsUI {
  motionState: MotionState;
  style: Style;
}

interface Style {
  root: {
    display: string;
    scale: number;
  };
}

interface MotionState {
  root: {
    top: number;
  };
  images: {
    height: number;
    opacity: number;
  };
}

type OwnProps = {};

type StateProps = Pick<
  Props,
  "heroCompress" | "heroIsComplete" | "heroPosition" | "heroScale"
>;

type DispatchProps = Pick<
  Props,
  "setHeroCompress" | "setHeroIsComplete" | "setHeroPosition" | "setHeroScale"
>;

export {
  Props,
  PropsUI,
  Style,
  MotionState,
  OwnProps,
  StateProps,
  DispatchProps,
};
