import * as React from "react";
import WithConnect from "../../../hoc/WithConnect";
import usePathname from "../../../hooks/usePathname";

import HeaderSpotlightUI from "./HeaderSpotlightUI";

import {
  ClassnameState,
  DispatchProps,
  MotionState,
  OwnProps,
  Props,
  StateProps,
} from "./types";

const HeaderSpotlight: React.FC<Props> = ({
  forAside,
  forHeader,
  heroIsComplete,
  previewIsComplete,
  spotlightItems,
}: Props) => {
  const [cnState, setCnState] = React.useState<ClassnameState>({
    headerSpotlight: "",
  });

  React.useEffect(() => {
    if (forAside)
      setCnState({ ...cnState, headerSpotlight: "header-spotlight--aside" });
    if (forHeader)
      setCnState({ ...cnState, headerSpotlight: "header-spotlight--header" });
  }, [forAside, forHeader]);

  const [motionState, setMotionState] = React.useState<MotionState>({
    itemsContainer: { opacity: 1, visibility: "visible" },
    logoContainer: {
      display: undefined,
      opacity: undefined,
      width: undefined,
      transition: { display: { delay: undefined }, duration: 0.5 },
      initial: {
        display: "none",
        opacity: 0,
        width: "0%",
      },
    },
  });

  React.useEffect(
    () =>
      previewIsComplete
        ? setMotionState({
            ...motionState,
            itemsContainer: {
              ...motionState.itemsContainer,
              opacity: 0,
              visibility: "hidden",
            },
          })
        : setMotionState({
            ...motionState,
            itemsContainer: {
              ...motionState.itemsContainer,
              opacity: 1,
              visibility: "visible",
            },
          }),
    [previewIsComplete]
  );

  const { isContentsPage, isHomePage } = usePathname();

  React.useEffect(() => {
    if (isHomePage) {
      if (heroIsComplete)
        setMotionState({
          ...motionState,
          logoContainer: {
            ...motionState.logoContainer,
            display: "block",
            opacity: 1,
            width: "max-content",
            transition: {
              ...motionState.logoContainer.transition,
              display: {
                ...motionState.logoContainer.transition.display,
                delay: 0,
              },
            },
          },
        });
      else if (!heroIsComplete)
        setMotionState({
          ...motionState,
          logoContainer: {
            ...motionState.logoContainer,
            display: "none",
            opacity: 0,
            width: "0%",
            transition: {
              ...motionState.logoContainer.transition,
              display: {
                ...motionState.logoContainer.transition.display,
                delay: 0.5,
              },
            },
          },
        });
    } else if (!isHomePage && !isContentsPage)
      setMotionState({
        ...motionState,
        logoContainer: {
          ...motionState.logoContainer,
          display: "block",
          opacity: 1,
          width: "max-content",
        },
      });
  }, [heroIsComplete, isContentsPage, isHomePage]);

  return (
    <HeaderSpotlightUI
      cnState={cnState}
      forAside={forAside}
      forHeader={forHeader}
      motionState={motionState}
      spotlightItems={spotlightItems}
    />
  );
};

export default WithConnect<OwnProps, StateProps, DispatchProps>(
  HeaderSpotlight,
  [
    { selector: "heroIsComplete", section: "home" },
    { selector: "previewIsComplete", section: "home" },
    { selector: "spotlightItems", section: "header" },
  ],
  null
);
