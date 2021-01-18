import * as React from "react";
import { useLocation } from "react-router-dom";

function usePathname() {
  const { pathname } = useLocation();

  const [isHomePage, setIsHomePage] = React.useState(false);
  const [isContentsPage, setIsContentsPage] = React.useState(false);
  const [isArticlePage, setIsArticlePage] = React.useState(false);

  React.useEffect(() => {
    pathname.includes("contents")
      ? setIsContentsPage(true)
      : setIsContentsPage(false);
    pathname.includes("articles")
      ? setIsArticlePage(true)
      : setIsArticlePage(false);
    pathname.length === 1 ? setIsHomePage(true) : setIsHomePage(false);
  }, [pathname]);

  return { isHomePage, isContentsPage, isArticlePage };
}

export default usePathname;
