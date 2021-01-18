import * as React from "react";

function useScroll() {
  const [scrollPos, setScrollPos] = React.useState(0);

  React.useEffect(() => {
    function scrollHandler() {
      setScrollPos(window.pageYOffset);
    }
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  });

  return scrollPos;
}

export default useScroll;
