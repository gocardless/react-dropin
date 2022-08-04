import React, { FC } from "react";
import { ComponentMeta } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { GoCardlessDropinButton } from ".";

const Instructions: FC = () => (
  <>
    <p>
      If you do not yet have an integration with our{" "}
      <a href="https://developer.gocardless.com/billing-requests/overview">
        Billing Requests
      </a>
      , you can follow these steps to generate a BRF ID using our Sandbox demo
      payment page:-
    </p>
    <ol>
      <li>
        Open the{" "}
        <a
          href="https://pay-sandbox.gocardless.com/billing_request_flows/demo"
          target={"_blank"}
          rel="noreferrer"
        >
          sandbox demo payment URL
        </a>
      </li>
      <li>Wait for it to redirect you to a payment flow</li>
      <li>
        Copy the Billing Request Flow ID from the URL (it starts with{" "}
        <code>BRF</code>)
      </li>
      <li>Come back to the Storybook</li>
      <li>Click into the Controls tab</li>
      <li>Paste the Billing Request Flow ID into the relevant control field</li>
      <li>
        Try the button in the canvas and see the modal showing a payment flow
      </li>
    </ol>
  </>
);

// Render the GoCardlessDropinButton, which allows triggering of a new Dropin
// modal.
//
// In future, we may want to provide an additional button that can populate the
// BRF ID on behalf of the user, using our demo link in sandbox.
//
export const Base: FC<{
  billingRequestFlowID: string;
  environment: string;
}> = ({ billingRequestFlowID, environment }) => {
  return (
    <>
      <GoCardlessDropinButton
        billingRequestFlowID={billingRequestFlowID}
        environment={environment}
        onSuccess={action("onSuccess")}
        onExit={action("onExit")}
      />
      <Instructions />
    </>
  );
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
  args: {
    billingRequestFlowID: "BRF123",
    environment: "sandbox",
  },
} as ComponentMeta<typeof Base>;
