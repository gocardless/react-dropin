import React from "react";
import { action } from "@storybook/addon-actions";

import { GoCardlessDropinButton } from ".";

// Render the GoCardlessDropinButton, which allows triggering of a new Dropin
// modal.
//
// In future, we may want to provide an additional button that can populate the
// BRF ID on behalf of the user, using our demo link in sandbox.
//
export const Base = ({
  billingRequestFlowID,
  environment,
}: {
  billingRequestFlowID: string;
  environment: string;
}) => {
  return (
    <GoCardlessDropinButton
      billingRequestFlowID={billingRequestFlowID}
      environment={environment}
      onSuccess={action("onSuccess")}
      onExit={action("onExit")}
    />
  );
};

Base.args = {
  billingRequestFlowID: "BRF123",
  environment: "sandbox",
};

export default {
  title: "Dropin/GoCardlessDropinButton",
  component: Base,
  argTypes: {
    billingRequestFlowID: { control: "text" },
    environment: {
      control: { type: "select" },
      options: ["sandbox", "live"],
    },
  },
};
