import React from "react";
import { useGoCardlessDropin } from "./hooks";
import { GoCardlessDropinOptions } from "./types";

// Opens a Billing Request Flow in a modal. Relies on GoCardlessDropin being
// loaded into window, which will only happen if the initialise script has been
// loaded via a script tag.
export const GoCardlessDropinButton = (options: GoCardlessDropinOptions) => {
  const { open } = useGoCardlessDropin({ ...options });

  return (
    <button
      type="button"
      style={{
        padding: "12px 16px",
        outline: "none",
        background: "#FFFFFF",
        border: "2px solid #F1F1F1",
        borderRadius: "4px",
      }}
      onClick={() => open()}
    >
      Start Dropin for <code>{options.billingRequestFlowID}</code> in{" "}
      <code>{options.environment}</code>
    </button>
  );
};
