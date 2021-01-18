import * as React from "react";

import HeaderSpotlight from "./HeaderSpotlight/HeaderSpotlight";
import HeaderSmallLogo from "./HeaderSmallLogo/HeaderSmallLogo";
import HeaderAside from "./HeaderAside/HeaderAside";
import HeaderMenu from "./HeaderMenu/HeaderMenu";

import { motion } from "framer-motion";

import "./header.scss";

interface Props {
  isContentsPage: boolean;
  isMobileScreen: boolean;
  scrollPosition: number;
}

function HeaderUI({ isContentsPage, isMobileScreen, scrollPosition }: Props) {
  return (
    <div className="header">
      <HeaderAside />
      {!isMobileScreen && !isContentsPage && (
        <HeaderSpotlight forHeader={true} />
      )}
      {isContentsPage && <HeaderSmallLogo />}
      {isMobileScreen && !isContentsPage && <HeaderMenu />}
      {isMobileScreen && (
        <motion.div
          animate={{ opacity: scrollPosition > 500 ? 1 : 0 }}
          initial={{ opacity: 0 }}
          style={{ position: "fixed", top: 90 }}
        >
          <HeaderSmallLogo />
        </motion.div>
      )}
    </div>
  );
}

export default React.memo(HeaderUI);
