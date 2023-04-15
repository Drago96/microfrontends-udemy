import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

export const mount = (element) => {
  ReactDOM.render(<App />, element);
};

var mountElement = document.querySelector("#_marketing-dev-root");

if (process.env.NODE_ENV === "development" && mountElement) {
  mount(mountElement);
}

console.log("temp")