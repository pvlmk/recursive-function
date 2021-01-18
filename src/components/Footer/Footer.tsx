import * as React from "react";
import usePathname from "../../hooks/usePathname";

import FooterUI from "./FooterUI";

function Footer() {
  const [colorState, setColorState] = React.useState({
    current: "",
    black: "#000000",
    transparency: "rgba(255, 255, 255, 0.23)",
    isHover: false,
  });

  const { isContentsPage } = usePathname();

  React.useEffect(
    () =>
      isContentsPage
        ? setColorState({
            ...colorState,
            current: colorState.transparency,
            isHover: true,
          })
        : setColorState({
            ...colorState,
            current: colorState.black,
            isHover: false,
          }),
    [isContentsPage]
  );

  return (
    <FooterUI
      color={colorState.current}
      isContentsPage={isContentsPage}
      isHover={colorState.isHover}
    />
  );
}

export default Footer;
