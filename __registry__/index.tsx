import * as React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Index: Record<string, any> = {
  button: {
    name: "button",
    description: "",
    component: React.lazy(() =>
      import("@/components/ui/button").then((module) => ({
        default: module.Button,
      }))
    ),
  },
  "accordion-faq-demo": {
    name: "accordion-faq-demo",
    description: "Demo for Accordion Component",
    component: React.lazy(
      () => import("@/components/demo/accordion/accordion-demo")
    ),
  },
  "accordion-bordered-demo": {
    name: "accordion-bordered-demo",
    description: "Demo for Bordered Accordion Component",
    component: React.lazy(
      () => import("@/components/demo/accordion/accordion-bordered-demo")
    ),
  },
  "accordion-shadowed-demo": {
    name: "accordion-shadowed-demo",
    description: "",
    component: React.lazy(
      () => import("@/components/demo/accordion/accordion-shadowed")
    ),
  },
  "multi-expand-accordion-demo": {
    name: "multi-expand-accordion-demo",
    description: "",
    component: React.lazy(
      () => import("@/components/demo/accordion/multi-expand-accordion")
    ),
  },
  "compact-accordion-demo": {
    name: "compact-accordion-demo",
    description: "",
    component: React.lazy(
      () => import("@/components/demo/accordion/accordion-compact")
    ),
  },
  "spacious-accordion-demo": {
    name: "spacious-accordion-demo",
    description: "",
    component: React.lazy(
      () => import("@/components/demo/accordion/accordion-spacious")
    ),
  },
  "flat-accordion-demo": {
    name: "flat-accordion-demo",
    description: "",
    component: React.lazy(
      () => import("@/components/demo/accordion/accordion-flat")
    ),
  },
  "outlined-accordion-demo": {
    name: "outlined-accordion-demo",
    description: "",
    component: React.lazy(
      () => import("@/components/demo/accordion/accordion-outline")
    ),
  },
  "gradient-accordion-demo": {
    name: "gradient-accordion-demo",
    description: "",
    component: React.lazy(
      () => import("@/components/demo/accordion/accordion-gradient")
    ),
  },
  "accordion-clickable-header": {
    name: "accordion-clickable-header",
    description: "",
    component: React.lazy(
      () => import("@/components/demo/accordion/accordion-clickable-header")
    ),
  },
  "interactive-accordion-demo": {
    name: "interactive-accordion-demo",
    description: "",
    component: React.lazy(
      () => import("@/components/demo/accordion/accordion-interactive-demo")
    ),
  },
  "accordion-striped-demo": {
    name: "accordion-striped-demo",
    description: "",
    component: React.lazy(
      () => import("@/components/demo/accordion/accordion-striped")
    ),
  },
  "alert-demo": {
    name: "alert-demo",
    description: "",
    component: React.lazy(() => import("@/components/demo/alert/alert-demo")),
  },
  "alert-accent": {
    name: "alert-accent",
    description: "",
    component: React.lazy(() => import("@/components/demo/alert/alert-accent")),
  },
  "alert-dark": {
    name: "alert-dark",
    description: "",
    component: React.lazy(() => import("@/components/demo/alert/alert-dark")),
  },
  "alert-default": {
    name: "alert-default",
    description: "",
    component: React.lazy(
      () => import("@/components/demo/alert/alert-default")
    ),
  },
  "alert-error": {
    name: "alert-error",
    description: "",
    component: React.lazy(() => import("@/components/demo/alert/alert-error")),
  },
  "alert-gradient": {
    name: "alert-gradient",
    description: "",
    component: React.lazy(
      () => import("@/components/demo/alert/alert-gradient")
    ),
  },
  "alert-secondary": {
    name: "alert-secondary",
    description: "",
    component: React.lazy(
      () => import("@/components/demo/alert/alert-secondary")
    ),
  },
  "alert-primary": {
    name: "alert-primary",
    description: "",
    component: React.lazy(
      () => import("@/components/demo/alert/alert-primary")
    ),
  },
  "alert-success": {
    name: "alert-success",
    description: "",
    component: React.lazy(
      () => import("@/components/demo/alert/alert-success")
    ),
  },
  "alert-timed": {
    name: "alert-timed",
    description: "",
    component: React.lazy(() => import("@/components/demo/alert/alert-timed")),
  },
  "alert-neutral": {
    name: "alert-neutral",
    description: "",
    component: React.lazy(
      () => import("@/components/demo/alert/alert-neutral")
    ),
  },
  "alert-info": {
    name: "alert-info",
    description: "",
    component: React.lazy(() => import("@/components/demo/alert/alert-info")),
  },
  "alert-light": {
    name: "alert-light",
    description: "",
    component: React.lazy(() => import("@/components/demo/alert/alert-light")),
  },
  "alert-warning": {
    name: "alert-warning",
    description: "",
    component: React.lazy(
      () => import("@/components/demo/alert/alert-warning")
    ),
  },
  "alert-loading": {
    name: "alert-loading",
    description: "",
    component: React.lazy(
      () => import("@/components/demo/alert/alert-loading")
    ),
  },
  "alert-custom": {
    name: "alert-custom",
    description: "",
    component: React.lazy(() => import("@/components/demo/alert/alert-custom")),
  },
  "alert-dialog-demo": {
    name: "alert-dialog-demo",
    description: "alert-dialog-demo",
    component: React.lazy(
      () => import("@/components/demo/alert-dialog/alert-dialog-demo")
    ),
  },
  "alert-confirmation-demo": {
    name: "alert-confirmation-demo",
    description: "alert-confirmation-demo",
    component: React.lazy(
      () => import("@/components/demo/alert-dialog/alert-confirmation-dialog")
    ),
  },
  "alert-error-demo": {
    name: "alert-error-demo",
    description: "alert-error-demo",
    component: React.lazy(
      () => import("@/components/demo/alert-dialog/alert-error-dialog")
    ),
  },
  "alert-form-demo": {
    name: "alert-form-demo",
    description: "alert-form-demo",
    component: React.lazy(
      () => import("@/components/demo/alert-dialog/alert-form-dialog")
    ),
  },
  "alert-help-demo": {
    name: "alert-help-demo",
    description: "alert-help-demo",
    component: React.lazy(
      () => import("@/components/demo/alert-dialog/alert-help-dialog")
    ),
  },
  "alert-information-demo": {
    name: "alert-information-demo",
    description: "alert-information-demo",
    component: React.lazy(
      () => import("@/components/demo/alert-dialog/alert-information-dialog")
    ),
  },
  "alert-input-demo": {
    name: "alert-input-demo",
    description: "alert-input-demo",
    component: React.lazy(
      () => import("@/components/demo/alert-dialog/alert-input-dialog")
    ),
  },
  "alert-progress-demo": {
    name: "alert-progress-demo",
    description: "alert-progress-demo",
    component: React.lazy(
      () => import("@/components/demo/alert-dialog/alert-progress-dialog")
    ),
  },
  "alert-selection-demo": {
    name: "alert-selection-demo",
    description: "alert-selection-demo",
    component: React.lazy(
      () => import("@/components/demo/alert-dialog/alert-selection-dialog")
    ),
  },
  "alert-success-demo": {
    name: "alert-success-demo",
    description: "alert-success-demo",
    component: React.lazy(
      () => import("@/components/demo/alert-dialog/alert-success-dialog")
    ),
  },
  "alert-warning-demo": {
    name: "alert-warning-demo",
    description: "alert-warning-demo",
    component: React.lazy(
      () => import("@/components/demo/alert-dialog/alert-warning-dialog")
    ),
  },
  "alert-notification-demo": {
    name: "alert-notification-demo",
    description: "alert-notification-demo",
    component: React.lazy(
      () => import("@/components/demo/alert-dialog/alert-notification-dialog")
    ),
  },
  "alert-terms-demo": {
    name: "alert-terms-demo",
    description: "alert-terms-demo",
    component: React.lazy(
      () => import("@/components/demo/alert-dialog/alert-terms-dialog")
    ),
  },
  "alert-feedback-demo": {
    name: "alert-feedback-demo",
    description: "alert-feedback-demo",
    component: React.lazy(
      () => import("@/components/demo/alert-dialog/alert-feedback-dialog")
    ),
  },
  "alert-settings-demo": {
    name: "alert-settings-demo",
    description: "alert-settings-demo",
    component: React.lazy(
      () => import("@/components/demo/alert-dialog/alert-settings-dialog")
    ),
  },
  "alert-delete-demo": {
    name: "alert-delete-demo",
    description: "alert-delete-demo",
    component: React.lazy(
      () => import("@/components/demo/alert-dialog/alert-delete-dialog")
    ),
  },
  "alert-share-demo": {
    name: "alert-share-demo",
    description: "alert-share-demo",
    component: React.lazy(
      () => import("@/components/demo/alert-dialog/alert-share-dialog")
    ),
  },
  "alert-download-demo": {
    name: "alert-download-demo",
    description: "alert-download-demo",
    component: React.lazy(
      () => import("@/components/demo/alert-dialog/alert-download-dialog")
    ),
  },
  "alert-testimonial-demo": {
    name: "alert-testimonial-demo",
    description: "alert-testimonial-demo",
    component: React.lazy(
      () => import("@/components/demo/alert-dialog/alert-testimonial-dialog")
    ),
  },
  "alert-imageupload-demo": {
    name: "alert-imageupload-demo",
    description: "alert-imageupload-demo",
    component: React.lazy(
      () => import("@/components/demo/alert-dialog/alert-imageupload-dialog")
    ),
  },
  "alert-date-demo": {
    name: "alert-date-demo",
    description: "alert-date-demo",
    component: React.lazy(
      () => import("@/components/demo/alert-dialog/alert-date-dialog")
    ),
  },
  "alert-dropdown-demo": {
    name: "alert-dropdown-demo",
    description: "alert-dropdown-demo",
    component: React.lazy(
      () => import("@/components/demo/alert-dialog/alert-dropdown-dialog")
    ),
  },
  "alert-subscription-demo": {
    name: "alert-subscription-demo",
    description: "alert-subscription-demo",
    component: React.lazy(
      () => import("@/components/demo/alert-dialog/alert-subscripton-dialog")
    ),
  },
  "alert-stepper-demo": {
    name: "alert-stepper-demo",
    description: "alert-stepper-demo",
    component: React.lazy(
      () => import("@/components/demo/alert-dialog/alert-stepper-dialog")
    ),
  },
  "alert-theme-demo": {
    name: "alert-theme-demo",
    description: "alert-theme-demo",
    component: React.lazy(
      () => import("@/components/demo/alert-dialog/alert-theme-dialog")
    ),
  },
  "alert-privacy-demo": {
    name: "alert-privacy-demo",
    description: "alert-privacy-demo",
    component: React.lazy(
      () => import("@/components/demo/alert-dialog/alert-privacy-dialog")
    ),
  },
  "alert-otp-demo": {
    name: "alert-otp-demo",
    description: "alert-otp-demo",
    component: React.lazy(
      () => import("@/components/demo/alert-dialog/alert-otp-dialog")
    ),
  },
  "alert-coupon-demo": {
    name: "alert-coupon-demo",
    description: "alert-coupon-demo",
    component: React.lazy(
      () => import("@/components/demo/alert-dialog/alert-coupon-dialog")
    ),
  },
};
