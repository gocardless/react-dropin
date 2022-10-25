# GoCardless React Dropin

[![npm version](https://badge.fury.io/js/%40gocardless%2Freact-dropin.svg)](https://badge.fury.io/js/%40gocardless%2Freact-dropin)

React bindings for the GoCardless Dropin checkout flow.

## Installation

With npm:

```console
npm install --save @gocardless/react-dropin
```

With yarn:

```console
yarn add @gocardless/react-dropin
```

## Examples

This library exports React hook functions that you can use to trigger a
GoCardless Dropin instance.

Here is a simple example of an `App` that wants to create a Billing Request Flow
ID via its backend API, then provide a `DropinButton` that the payer can click
to trigger the Dropin.

> See this in action at the [GoCardlessDropinButton
> story](https://gocardless.github.io/react-dropin/?path=/story/dropin-gocardlessdropinbutton--base)

```typescript
import React, { FunctionComponent, useCallback, useState, useEffect } from "react";
import {
  useGoCardlessDropin,
  GoCardlessDropinOptions,
  GoCardlessDropinOnSuccess,
}

// Display a button that opens the Dropin on click, starting a checkout
// flow for the specified Billing Request Flow.
const DropinButton = (options: GoCardlessDropinOptions) => {
  const { open } = useGoCardlessDropin({ ...options });

  return (
    <button type="button" onClick={() => open()}>
      Start Dropin for <code>{options.billingRequestFlowID}</code> in{" "}
      <code>{options.environment}</code>
    </button>
  );
};

// Example checkout flow, where we create a Billing Request Flow ID by talking
// with our backend API.
const App: FunctionComponent = () => {
  const [flowID, setFlowID] = useState("");

  // Build your backend with an API endpoint that:
  //
  //   1. Creates a Billing Request for the resources you wish to create
  //   2. Create a Billing Request Flow against (1)
  //   3. Return the ID from (2)
  //
  // See an example of this at Taking an Instant Bank Payment:
  // https://developer.gocardless.com/getting-started/billing-requests/taking-an-instant-bank-payment/
  useEffect(() => {
    async function createFlow() {
      // Expecting a JSON body like:
      // {
      //   "flow_id": "BRF123456"
      // }
      let response = await fetch("/api/flows", {
        method: "POST",
      });
      const { flow_id } = await response.json();
      setFlowID(flow_id);
    }
    createFlow();
  }, []);

  // Only show the button once we have a Billing Request Flow ID
  return flowID ? (
    <div className="loader"></div>
  ) : (
    <DropinButton billingRequestFlowID={flowID} environment={"live"} />
  );
};
```

## Storybook

Checkout the Storybook flow to see the `<GoCardlessDropinButton />` in action.
You can use the Storybook knobs to configure the Billing Request Flow ID, from
which you can create your Dropin instance.

Stories are deployed to the `gh-pages` branch of this repo, and hosted at
[https://gocardless.github.io/react-dropin/](https://gocardless.github.io/react-dropin/).

## Publishing

CircleCI is configured to publish changes us, via a build pipeline.

To trigger a new package version:

[release]: https://github.com/gocardless/react-dropin/releases/new

1. Update `package.json` with the new version number (ie, v1.0.0)
2. Push this commit to `master`, then [cut a new release][release] in GitHub
   with a tag name that matches the release (ie, v1.0.0)

This should trigger the CI pipeline, and the new package version will appear on
npm shortly.
