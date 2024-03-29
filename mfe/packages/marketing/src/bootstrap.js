import React from "react";
import ReactDOM from "react-dom";
import { createMemoryHistory, createBrowserHistory } from "history";

import App from "./App";

export const mount = (element, { onNavigate, defaultHistory, initialPath }) => {
  const history =
    defaultHistory ||
    createMemoryHistory({
      initialEntries: [initialPath],
    });

  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(<App history={history} />, element);

  return {
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location;

      if (pathname === nextPathname) {
        return;
      }

      history.push(nextPathname);
    },
  };
};

var mountElement = document.querySelector("#_marketing-dev-root");

if (process.env.NODE_ENV === "development" && mountElement) {
  mount(mountElement, { defaultHistory: createBrowserHistory() });
}
