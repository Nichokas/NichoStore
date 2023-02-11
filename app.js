// Agrega tu código JavaScript aquí
import * as Sentry from "@sentry/browser";
import { BrowserTracing } from "@sentry/tracing";

Sentry.init({
  dsn: "https://c6f8e361b6ec45d98fabc9ee0e3f6623@o4504651365875712.ingest.sentry.io/4504651928764416",
  integrations: [new BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0
