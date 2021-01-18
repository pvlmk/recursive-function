import * as React from "react";

import { motion } from "framer-motion";

import "./footer.scss";

interface Props {
  color: string;
  isContentsPage: boolean;
  isHover: boolean;
}

interface PropsItem {
  children: React.ReactNode;
  isHover: boolean;
}

function FooterItem({ children, isHover }: PropsItem) {
  return (
    <motion.span
      className="footer__text"
      whileHover={{ color: isHover ? "#ffffff" : undefined }}
      whileTap={{ color: isHover ? "#ffffff" : undefined }}
    >
      {children}
    </motion.span>
  );
}

function FooterUI({ color, isContentsPage, isHover }: Props) {
  return (
    <motion.div
      animate={{ color, position: isContentsPage ? "fixed" : "relative" }}
      className="footer"
      transition={{ duration: 0.25 }}
    >
      <div className="footer__content">
        <FooterItem isHover={isHover}>
          {new Date().getFullYear()} - St. Petersburg, Russia
        </FooterItem>
        <FooterItem isHover={isHover}>
          All right reserved {new Date().getFullYear()}
        </FooterItem>
      </div>
    </motion.div>
  );
}

export default React.memo(FooterUI);
