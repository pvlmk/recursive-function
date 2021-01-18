import * as React from "react";
import usePathname from "../../../hooks/usePathname";

import HeaderSmallLogoUI from "./HeaderSmallLogoUI";

function HeaderSmallLogo() {
  const [colorState, setColorState] = React.useState({
    current: "",
    black: "#000000",
    transparency: "rgba(255, 255, 255, 0.23)",
    isHover: false,
  });

  const { isContentsPage, isHomePage } = usePathname();

  React.useEffect(() => {
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
        });
  }, [isContentsPage]);

  function scrollToPageUp() {
    if (isHomePage) window.scrollTo(0, 0);
  }

  return (
    <HeaderSmallLogoUI
      color={colorState.current}
      isHover={colorState.isHover}
      scrollToPageUp={scrollToPageUp}
    />
  );
}

export default HeaderSmallLogo;
