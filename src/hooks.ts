import { useEffect, useState } from "react";
import useScript from "react-script-hook";

import { GoCardlessDropinHandler, GoCardlessDropinOptions } from "./types";

// This is where GoCardless hosts the Dropin initialise script. Compatibility is
// guaranteed across the same major version- no one should be trying to use a different
// version of this script with the React bindings!
const GOCARDLESS_DROPIN_INITIALISE_URL =
  "https://pay.gocardless.com/billing/static/dropin/v2/initialise.js";

type useGoCardlessDropinResult = {
  error?: ErrorEvent;
  ready: boolean;
  exit: () => void;
  open: () => void;
};

// eslint-disable-next-line
const noop = () => {};

export const useGoCardlessDropin = (
  options: GoCardlessDropinOptions & { initialiseURL?: string }
): useGoCardlessDropinResult => {
  // Asynchronously load the initialise script. This should make GoCardlessDropin
  // available on window.
  const initialiseURL =
    options.initialiseURL || GOCARDLESS_DROPIN_INITIALISE_URL;
  const [loading, scriptLoadError] = useScript({
    src: window.GoCardlessDropin ? null : initialiseURL,
    checkForExisting: true,
  });

  const [error, setError] = useState<ErrorEvent | null>(scriptLoadError);
  const [handler, setHandler] = useState<GoCardlessDropinHandler | undefined>(
    undefined
  );

  useEffect(() => {
    // If the link.js script is still loading, return early
    if (loading) {
      return;
    }

    // We have an error loading the script, but we've already given this to our caller via
    // the error result. We should not try to recover, as we can't recover from this.
    if (scriptLoadError) {
      setError(scriptLoadError);
      return;
    }

    // We have finished loading and there was no error, so something really terrible has
    // happened if we don't have the GoCardlessDropin available on window.
    //
    // This probably means we've loaded a corrupt or broken initialise script? We should
    // provide an error that suggests there is a problem with the script.
    if (!window.GoCardlessDropin) {
      setError(
        new ErrorEvent(
          `error loading GoCardless Dropin initialise script from ` +
            `${initialiseURL}: failed to find window.GoCardlessDropin after load!`
        )
      );
      return;
    }

    // If we already have a handler, then the Dropin is open. But we've changed our state,
    // which means we need to start over!
    //
    // Call exit() to close the old handler before we attempt to create a new one.
    if (handler) {
      handler.exit();
    }

    // Create a new handler, and set it in our state. The responsibility is on the caller
    // to call the open function- until then, the Dropin will be invisible.
    setHandler(window.GoCardlessDropin.create(options));
  }, [loading, scriptLoadError, options.billingRequestFlowID, setError]);

  return {
    error: error === null ? undefined : error,
    ready: !!handler,
    exit: handler?.exit || noop,
    open: handler?.open || noop,
  };
};
