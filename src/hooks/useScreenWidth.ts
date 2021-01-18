import * as React from "react";

function useScreenWidth(position?: number): boolean | number {
  const [screenWidthTrigger, setScreenWidthTrigger] = React.useState(false);
  const [screenWidthPosition, setScreenWidthPosition] = React.useState(0);

  const screenWidthTriggerHandler = () => {
    window.innerWidth >= position!
      ? setScreenWidthTrigger(true)
      : setScreenWidthTrigger(false);
  };

  const screenWidthPositionHandler = () => {
    setScreenWidthPosition(window.innerWidth);
  };

  React.useEffect(() => {
    window.addEventListener("resize", screenWidthTriggerHandler);
    screenWidthTriggerHandler();
    return () =>
      window.removeEventListener("resize", screenWidthTriggerHandler);
  });

  React.useEffect(() => {
    window.addEventListener("resize", screenWidthPositionHandler);
    screenWidthPositionHandler();
    return () =>
      window.removeEventListener("resize", screenWidthPositionHandler);
  });

  return position ? screenWidthTrigger : screenWidthPosition;
}

export default useScreenWidth;
