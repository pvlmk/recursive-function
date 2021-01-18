import * as React from "react";

import AppUI from "./AppUI";

function App() {
  React.useEffect(() => window.scrollTo(0, 0), []);

  return <AppUI />;
}

export default App;
