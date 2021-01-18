import * as React from "react";
import * as HomeActions from "../../../store/home/actions";
import useScreenWidth from "../../../hooks/useScreenWidth";
import WithConnect from "../../../hoc/WithConnect";

import HomeHeroUI from "./HomeHeroUI";

import {
  Props,
  MotionState,
  Style,
  OwnProps,
  StateProps,
  DispatchProps,
} from "./types";

const HomeHero: React.FC<Props> = ({
  heroCompress,
  heroIsComplete,
  heroPosition,
  heroScale,
  setHeroCompress,
  setHeroIsComplete,
  setHeroPosition,
  setHeroScale,
}: Props) => {
  const [motionState, setMotionState] = React.useState<MotionState>({
    root: {
      top: undefined,
    },
    images: { height: undefined, opacity: undefined },
  });

  React.useEffect(() => {
    const sceneComplete = heroCompress < -200;
    const sceneHide = heroCompress !== null && heroCompress < 1;

    sceneComplete ? setHeroIsComplete(true) : setHeroIsComplete(false);
    sceneHide
      ? setMotionState({
          ...motionState,
          images: { ...motionState.images, opacity: 0 },
        })
      : setMotionState({
          ...motionState,
          images: { ...motionState.images, opacity: 1 },
        });

    setMotionState({
      ...motionState,
      images: { ...motionState.images, height: heroCompress },
    });
  }, [heroCompress]);

  React.useEffect(
    () =>
      heroPosition <= -100
        ? setMotionState({
            ...motionState,
            root: { ...motionState.root, top: -100 },
          })
        : setMotionState({
            ...motionState,
            root: { ...motionState.root, top: heroPosition },
          }),
    [heroPosition]
  );

  const [style, setStyle] = React.useState<Style>({
    root: {
      display: "block",
      scale: 1,
    },
  });

  React.useEffect(
    () =>
      heroIsComplete
        ? setStyle({
            ...style,
            root: { ...style.root, display: "none" },
          })
        : setStyle({
            ...style,
            root: { ...style.root, display: "block" },
          }),
    [heroIsComplete]
  );

  React.useEffect(
    () =>
      heroScale <= 0.25
        ? setStyle({ ...style, root: { ...style.root, scale: 0.25 } })
        : setStyle({ ...style, root: { ...style.root, scale: heroScale } }),
    [heroScale]
  );

  const isMobileScreen = !useScreenWidth(1024);

  React.useEffect(() => {
    function handler() {
      const scrollY = window.pageYOffset;

      const COMPRESS_INIT = 550;
      const POSITION_INIT = 100;
      const SCALE_INIT = 1;

      if (!isMobileScreen) {
        setHeroCompress(COMPRESS_INIT + scrollY / -0.9);
        setHeroPosition(POSITION_INIT + scrollY / -2.67);
        setHeroScale(SCALE_INIT - scrollY / 850);
      }
    }
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  });

  return <HomeHeroUI motionState={motionState} style={style} />;
};

export default WithConnect<OwnProps, StateProps, DispatchProps>(
  HomeHero,
  [
    { selector: "heroCompress", section: "home" },
    { selector: "heroIsComplete", section: "home" },
    { selector: "heroPosition", section: "home" },
    { selector: "heroScale", section: "home" },
  ],
  {
    ...HomeActions,
  }
);
