type SpotlightItem = {
  id: string;
  isArticle: boolean;
  preview: string;
  title: string;
};

interface Props {
  spotlightItems: SpotlightItem[];
}

interface PropsUI {
  spotlightItems: SpotlightItem[];
}

type PropsItem = SpotlightItem & {};

interface Style {}

interface MotionState {}

type OwnProps = {};

type StateProps = Pick<Props, "spotlightItems">;

type DispatchProps = {};

export {
  Props,
  PropsUI,
  Style,
  MotionState,
  PropsItem,
  OwnProps,
  StateProps,
  DispatchProps,
};
