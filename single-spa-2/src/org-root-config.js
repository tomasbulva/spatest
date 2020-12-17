import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@org/react-demo-app",
  app: () =>
    System.import("@org/react-demo-app"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
