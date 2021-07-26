import React from "react";
import { useGoCardlessDropin } from "./hooks";
import "./GoCardlessDropinButton.css";
import { useGoCardlessDropinOptions } from "./types";

// Opens a Billing Request Flow in a modal. Relies on GoCardlessDropin being
// loaded into window, which will only happen if the initialise script has been
// loaded via a script tag.
export const GoCardlessDropinButton = (options: useGoCardlessDropinOptions) => {
  const { open } = useGoCardlessDropin({ ...options });

  return (
    <button type="button" onClick={() => open()}>
      Start Dropin for <code>{options.billingRequestFlowID}</code> in{" "}
      <code>{options.environment}</code>
    </button>
  );
};
