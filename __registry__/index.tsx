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
  "accordion-demo": {
    name: "accordion-demo",
    description: "Demo for Accordion Component",
    component: React.lazy(() => import("@/components/demo/accordion-demo")),
  },
};
