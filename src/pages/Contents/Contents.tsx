import * as React from "react";
import * as ContentsActions from "../../store/contents/actions";
import WithConnect from "../../hoc/WithConnect";
import useScreenWidth from "../../hooks/useScreenWidth";
import useBodyOverflow from "../../hooks/useBodyOverflow";

import ContentsUI from "./ContentsUI";

import { keyboardHandler, touchHandler, wheelHandler } from "./helpers";
import { useHistory } from "react-router-dom";

interface Props {
  images: string[];
  currentBackground: null | string;
  currentPos: null | number;
  startPos: number;
  endPos: number;
  allowTransition: boolean;
  selectedId: null | string;
  setBackground: (background: string) => void;
  setPosition: (position: number) => void;
}

type StateProps = Omit<Props, "setBackground" | "setPosition">;
type DispatchProps = Pick<Props, "setBackground" | "setPosition">;

const Contents: React.FC<Props> = ({
  images,
  allowTransition,
  currentBackground,
  currentPos,
  endPos,
  selectedId,
  startPos,
  setBackground,
  setPosition,
}: Props) => {
  const history = useHistory();
  const isMobileScreen = !useScreenWidth(1024);

  React.useEffect(() => {
    useBodyOverflow("hidden");
    return () => useBodyOverflow(null, false);
  }, []);

  function visitOnEnter() {
    history.push(`/articles/${selectedId}`);
  }
  function swipeUp() {
    if (currentPos === null || currentPos === startPos) setPosition(endPos);
    else setPosition(currentPos - 1);
  }
  function swipeDown() {
    if (currentPos === null || currentPos === endPos) setPosition(startPos);
    else setPosition(currentPos + 1);
  }

  React.useEffect(() => setBackground(images[currentPos]), [currentPos]);

  React.useEffect(() => {
    const handler = keyboardHandler(swipeUp, swipeDown, visitOnEnter);
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  });

  React.useEffect(() => {
    const { touchEnd, touchMove, touchStart } = touchHandler(
      swipeUp,
      swipeDown
    );
    window.addEventListener("touchstart", touchStart, false);
    window.addEventListener("touchmove", touchMove, false);
    window.addEventListener("touchend", touchEnd, false);
    return () => {
      window.removeEventListener("touchstart", touchStart);
      window.removeEventListener("touchmove", touchMove);
      window.removeEventListener("touchend", touchEnd);
    };
  });

  React.useEffect(() => {
    const handler = wheelHandler(swipeUp, swipeDown);
    window.addEventListener("wheel", handler);
    return () => window.removeEventListener("wheel", handler);
  });

  React.useEffect(() => {
    const list = document.getElementById("contents-list");
    const { offsetHeight } = document.getElementById("contents-list-item");

    function setScrollTop(position: number) {
      list.scrollTop = position;
    }

    if (!allowTransition) {
      if (currentPos >= endPos) setScrollTop(0);
      else if (currentPos <= 2) setScrollTop((currentPos - 1) * offsetHeight);
      else if (currentPos > 2 && currentPos < endPos)
        setScrollTop(1 * (currentPos - 2) * offsetHeight);
    }
  });

  return (
    <ContentsUI
      background={currentBackground}
      isMobileScreen={isMobileScreen}
    />
  );
};

export default WithConnect<{}, StateProps, DispatchProps>(
  Contents,
  [
    { selector: "images", section: "contents" },
    { selector: "allowTransition", section: "contents" },
    { selector: "currentBackground", section: "contents" },
    { selector: "currentPos", section: "contents" },
    { selector: "endPos", section: "contents" },
    { selector: "selectedId", section: "contents" },
    { selector: "startPos", section: "contents" },
  ],
  {
    ...ContentsActions,
  }
);
