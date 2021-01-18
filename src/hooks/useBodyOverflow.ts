import * as React from "react";

function useBodyOverflow(state?: string | null, dynamicState?: boolean) {
  React.useEffect(() => {
    if (state) document.body.style.overflow = state;
    if (dynamicState === true) document.body.style.overflow = "hidden";
    if (dynamicState === false) document.body.style.overflow = null;
    if (state === null && dynamicState === null)
      document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = null;
    };
  }, []);
}

export default useBodyOverflow;
