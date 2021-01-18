import * as React from "react";
import * as HeaderActions from "../../store/header/actions";
import WithConnect from "../../hoc/WithConnect";

import SpotlightItemUI from "./SpotlightItemUI";

import "./spotlight-item.scss";

interface Props {
  forAside?: boolean;
  forDescription?: boolean;
  forHeader?: boolean;
  id: string;
  isArticle: boolean;
  setIsAsideOpen: (state: boolean) => void;
  title: string;
}

type OwnProps = Omit<Props, "setIsAsideOpen">;
type DispatchProps = Pick<Props, "setIsAsideOpen">;

const SpotlightItem: React.FC<Props> = ({
  forAside,
  forDescription,
  forHeader,
  id,
  isArticle,
  setIsAsideOpen,
  title,
}: Props) => {
  const link = isArticle ? `/articles/${id}` : `/contents`;

  function closeAsideOnClick() {
    setIsAsideOpen(false);
  }

  const [cursor, setCursor] = React.useState("default");
  const [numberColor, setNumberColor] = React.useState("black");
  const [titleColor, setTitleColor] = React.useState("black");
  const [bgColor, setBgColor] = React.useState("white");
  const [borderColor, setBorderColor] = React.useState("#000000");
  const [borderRadius, setBorderRadius] = React.useState(14);
  const [fontSize, setFontSize] = React.useState(22);

  React.useEffect(() => {
    if (!forDescription) {
      setFontSize(22);
      setCursor("pointer");
    } else {
      setFontSize(32);
      setCursor("default");
    }
  }, [forDescription]);

  React.useEffect(() => {
    if (forAside) {
      setNumberColor("white");
      setTitleColor("white");
      setBgColor("black");
      setBorderColor("#ffffff");
    }
  }, [forAside]);
  React.useEffect(() => {
    if (forDescription) {
      setNumberColor("black");
      setTitleColor("black");
      setBgColor("transparent");
      setBorderColor("#000000");
      setBorderRadius(10);
    }
  }, [forDescription]);
  React.useEffect(() => {
    if (forHeader) {
      setNumberColor("black");
      setTitleColor("black");
      setBgColor("transparent");
      setBorderColor("#000000");
    }
  }, [forHeader]);

  function hoverOn() {
    if (!forAside && !forDescription) {
      setNumberColor("white");
      setBgColor("black");
    }
  }
  function hoverOff() {
    if (!forAside && !forDescription) {
      setNumberColor("black");
      setBgColor("transparent");
    }
  }

  return (
    <SpotlightItemUI
      bgColor={bgColor}
      borderColor={borderColor}
      borderRadius={borderRadius}
      cursor={cursor}
      hoverOff={hoverOff}
      hoverOn={hoverOn}
      fontSize={fontSize}
      id={id}
      link={link}
      numberColor={numberColor}
      onClick={closeAsideOnClick}
      title={title}
      titleColor={titleColor}
    />
  );
};

export default WithConnect<OwnProps, {}, DispatchProps>(SpotlightItem, null, {
  ...HeaderActions,
});
