import * as React from "react";

import usePathname from "../../hooks/usePathname";
import useScreenWidth from "../../hooks/useScreenWidth";
import useScroll from "../../hooks/useScroll";

import HeaderUI from "./HeaderUI";

function Header() {
  const { isContentsPage } = usePathname();
  const isMobileScreen = !useScreenWidth(1024);
  const scrollPosition = useScroll();

  return (
    <HeaderUI
      isContentsPage={isContentsPage}
      isMobileScreen={isMobileScreen}
      scrollPosition={scrollPosition}
    />
  );
}

export default Header;
