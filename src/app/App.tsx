import React from "react";
import ReactDOM, { Container } from "react-dom/client";
import RouteHandler from "./routes/RouteHandler";
import { Provider } from "../components/ui/provider";

ReactDOM.createRoot(document.getElementById("root") as Container).render(
  <React.StrictMode>
    <Provider>
      <RouteHandler />
    </Provider>
  </React.StrictMode>
);
