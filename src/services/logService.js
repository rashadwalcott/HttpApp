import * as Sentry from "@sentry/browser";

function init() {
  Sentry.init({
    dsn:
      "https://4f34da401d184c80b23e0c2fa49438d1@o409484.ingest.sentry.io/5282148",
  });
}

function log(error) {
  Sentry.captureException(error);
}

export default {
  init,
  log,
};
