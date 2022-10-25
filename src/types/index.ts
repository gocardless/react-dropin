import { BillingRequest, BillingRequestFlow } from "gocardless-nodejs";

// Re-export, for integrator convenience when loading these bindings.
export type { BillingRequest, BillingRequestFlow };

/**
 * GoCardlessDropin is the global interface around creating instances of the
 * Dropin.
 */
export interface GoCardlessDropin {
  create: (options: GoCardlessDropinOptions) => GoCardlessDropinHandler;
}

// Returned by the create method, and represents an instance of a Dropin.
export interface GoCardlessDropinHandler {
  // open adds the iframe that has been created by create() into the DOM. Until
  // this is called, the Dropin modal will not be visible.
  open: () => void;

  // exit requests that the Dropin exit. There is no confirmation step yet- this
  // will immediately close the Dropin.
  exit: () => void;
}

/**
 * Options for creating a Dropin instance.
 *
 * Create the Dropin from either:
 *
 *  - Billing Request Flow ID, created in your backend for working in the Dropin
 *  - Billing Request Template ID, which creates a fresh Billing Request
 */
export type GoCardlessDropinOptions = CommonOptions &
  (
    | { billingRequestFlowID: string; billingRequestTemplateID?: never }
    | { billingRequestFlowID?: never; billingRequestTemplateID: string }
  );

type CommonOptions = ClientCallbacks & {
  /**
   * Environment name, one of live or sandbox.
   */
  environment: "live" | "sandbox";
  /**
   * Domain override if using a custom environment (for internal use only).
   */
  domain?: string;
};

export type GoCardlessDropinOnSuccess = (
  billingRequest: BillingRequest,
  billingRequestFlow: BillingRequestFlow
) => void;

export type GoCardlessDropinOnExit = (
  // eslint-disable-next-line @typescript-eslint/ban-types
  error: object | null,
  // eslint-disable-next-line @typescript-eslint/ban-types
  metadata: object
) => void;

export interface ClientCallbacks {
  /**
   * onSuccess receives the Billing Request that has been worked.
   *
   * This is called when the flow exits successfully. Depending on how the flow
   * was configured, it may have completed successfully but not fulfilled the
   * Billing Request- it is incumbent on the integrator to check the status of
   * the request before assuming it has been fulfilled.
   */
  onSuccess: GoCardlessDropinOnSuccess;

  /**
   * onExit should take two arguments: an error object and a metadata object.
   *
   * The onExit callback is called when the customer left the flow before
   * completion. This can happen because either they have voluntarily abandoned
   * the flow, or because an unrecoverable error occurred.
   *
   * The error object is null if no error was encountered. At the time of
   * writing no additional object property is documented.
   *
   * The metadata object is always not null. At the time of writing no
   * additional object properties are documented.
   */
  onExit: GoCardlessDropinOnExit;
}

// Extend window with the GoCardlessDropin type, so TypeScript consumers can use
// the client.
declare global {
  interface Window {
    GoCardlessDropin: GoCardlessDropin;
  }
}
