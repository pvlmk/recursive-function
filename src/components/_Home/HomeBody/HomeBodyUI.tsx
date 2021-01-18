import * as React from "react";

import { PropsUI } from "./types";

import "./home-body.scss";

function HomeBodyUI({ children, style }: PropsUI) {
  return (
    <main className="home-body" style={style.root}>
      {children}
    </main>
  );
}

export default React.memo(HomeBodyUI);
