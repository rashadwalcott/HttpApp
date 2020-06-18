import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import * as Sentry from "@sentry/browser";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

Sentry.init({
  dsn:
    "https://4f34da401d184c80b23e0c2fa49438d1@o409484.ingest.sentry.io/5282148",
});

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
