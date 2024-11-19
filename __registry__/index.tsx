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
};
