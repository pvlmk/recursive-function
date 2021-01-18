type SpotlightItem = { id: string; isArticle: boolean; title: string };

interface Props {
  forAside?: boolean;
  forHeader?: boolean;
  heroIsComplete: boolean;
  previewIsComplete: boolean;
  spotlightItems: SpotlightItem[];
}

interface PropsUI {
  cnState: ClassnameState;
  forAside?: boolean;
  forHeader?: boolean;
  motionState: MotionState;
  spotlightItems: SpotlightItem[];
}

interface MotionState {
  itemsContainer: {
    opacity: number;
    visibility: "hidden" | "visible";
  };
  logoContainer: {
    display: string | undefined;
    opacity: number | undefined;
    width: string | undefined;
    transition: {
      duration: number;
      display: {
        delay: number | undefined;
      };
    };
    initial: {
      display: string;
      opacity: number;
      width: string;
    };
  };
}

type OwnProps = Pick<Props, "forAside" | "forHeader">;

type StateProps = Pick<
  Props,
  "heroIsComplete" | "previewIsComplete" | "spotlightItems"
>;

type DispatchProps = {};

interface ClassnameState {
  headerSpotlight: string;
}

export {
  Props,
  PropsUI,
  MotionState,
  OwnProps,
  StateProps,
  DispatchProps,
  ClassnameState,
};
