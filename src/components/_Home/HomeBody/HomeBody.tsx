import * as React from "react";
import WithConnect from "../../../hoc/WithConnect";
import useScreenWidth from "../../../hooks/useScreenWidth";

import HomeBodyUI from "./HomeBodyUI";

import { Props, Style, OwnProps, StateProps, DispatchProps } from "./types";

const HomeBody: React.FC<Props> = ({ children, previewIsComplete }: Props) => {
  const isMobileScreen = !useScreenWidth(1024);

  const [style, setStyle] = React.useState<Style>({
    root: {
      display: "none",
      top: 0,
    },
  });

  React.useEffect(
    () =>
      previewIsComplete
        ? setStyle({ ...style, root: { ...style.root, display: "block" } })
        : setStyle({ ...style, root: { ...style.root, display: "none" } }),
    [previewIsComplete]
  );

  React.useEffect(
    () =>
      isMobileScreen
        ? setStyle({ ...style, root: { ...style.root, top: 1100 } })
        : setStyle({ ...style, root: { ...style.root, top: 1800 } }),
    [isMobileScreen]
  );

  return <HomeBodyUI children={children} style={style} />;
};

export default WithConnect<OwnProps, StateProps, DispatchProps>(
  HomeBody,
  [{ selector: "previewIsComplete", section: "home" }],
  null
);
