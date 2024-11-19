"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Accordion = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Root> & {
    variant?:
      | "shadow"
      | "bordered"
      | "minimal"
      | "compact"
      | "spacious"
      | "flat"
      | "outline"
      | "gradient"
      | "clickableHeader"
      | "interactive";
    Icon?: React.ReactSVGElement;
    iconAlignment?: "left" | "right";
  }
>(({ className, variant, Icon, iconAlignment, ...props }, ref) => {
  const variantClasses = {
    shadow:
      "shadow-lg rounded-lg border bg-gray-200 dark:bg-gray-800 px-4 py-2",
    bordered:
      "border rounded-md px-4 py-2 dark:border-gray-800 border-gray-200",
    minimal: "border-none",
    compact: "px-2 text-sm border border-gray-300 rounded-md",
    spacious: "px-6 py-4 border border-gray-300 rounded-lg",
    flat: "bg-transparent border-none text-gray-600 dark:text-gray-400",
    outline: "border-2 border-primary rounded-md px-4 py-2",
    gradient:
      "bg-gradient-to-r from-[#ad5389] to-[#3c1053] text-white  rounded-lg px-4 py-2",
    clickableHeader: "flex items-center gap-2 justify-between cursor-pointer",
    interactive:
      "hover:bg-gray-100 transition ease-in duration-250 dark:hover:bg-gray-800 focus:ring focus:ring-primary px-4 py-2",
  };

  return (
    <div className="w-full">
      {iconAlignment === "left" && Icon}
      <AccordionPrimitive.Root
        ref={ref}
        className={cn(variantClasses[variant || "bordered"], className)}
        {...props}
      />
      {iconAlignment === "right" && Icon}
    </div>
  );
});
Accordion.displayName = "Accordion";

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item> & {
    variant?: "striped";
  }
>(({ className, variant, ...props }, ref) => {
  const variantClasses = {
    striped:
      "even:bg-gray-100 odd:bg-white dark:even:bg-gray-800 dark:odd:bg-gray-900 px-2 rounded",
  };
  return (
    <AccordionPrimitive.Item
      ref={ref}
      className={cn(
        variant === "striped" && variantClasses[variant],
        "border-b dark:border-gray-800 border-gray-200 last:border-none",
        className
      )}
      {...props}
    />
  );
});
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all text-left [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      className
    )}
    {...props}
  >
    <div className={cn("pb-4 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
