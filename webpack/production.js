const { dependencies } = require("../package.json");

module.exports = {
  devtool: false,
  entry: {
    bundle: "./src/index.tsx",
    vendorReactBase: ["react", "react-dom"],
    vendorReactRouter: ["react-router-dom"],
    vendorOthers: Object.keys(dependencies).filter((el) => {
      if (el === "react-icons") return el;
      return !el.includes("react");
    }),
  },
  mode: "production",
};
