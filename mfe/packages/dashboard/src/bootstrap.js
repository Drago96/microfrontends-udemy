import { createApp } from "vue";

import Dashboard from "./components/Dashboard.vue";

export const mount = (element) => {
  const app = createApp(Dashboard);

  app.mount(element);
};

var mountElement = document.querySelector("#_dashboard-dev-root");

if (process.env.NODE_ENV === "development" && mountElement) {
  mount(mountElement);
}
