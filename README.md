# GoCardless React Dropin

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

## Storybook

Checkout the Storybook flow to see the `<GoCardlessDropinButton />` in action.
You can use the Storybook knobs to configure the Billing Request Flow ID, from
which you can create your Dropin instance.

```console
npm start storybook
```

## Publishing

CircleCI is configured to publish changes us, via a build pipeline.

To trigger a new package version:

[release]: https://github.com/gocardless/react-dropin/releases/new

1. Update `package.json` with the new version number (ie, v1.0.0)
2. Push this commit to `master`, then [cut a new release][release] in GitHub
   with a tag name that matches the release (ie, v1.0.0)

This should trigger the CI pipeline, and the new package version will appear on
npm shortly.
