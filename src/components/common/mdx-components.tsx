"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

export const components = {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={cn("text-4xl font-bold mt-2 scroll-m-20", className)}
      {...props}
    />
  ),
  h2: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className={cn("text-2xl font-semibold mt-12 border-b pb-2", className)}
      {...props}
    />
  ),
  p: ({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className={cn("leading-7 mt-6", className)} {...props} />
  ),
  a: ({ className, ...props }: React.HTMLAttributes<HTMLAnchorElement>) => (
    <a
      className={cn("font-medium underline underline-offset-4", className)}
      {...props}
    />
  ),
  ul: ({ className, ...props }: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className={cn("list-disc ml-6 my-6", className)} {...props} />
  ),
  ol: ({ className, ...props }: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className={cn("list-decimal ml-6 my-6", className)} {...props} />
  ),
  li: ({ className, ...props }: React.HTMLAttributes<HTMLLIElement>) => (
    <li className={cn("mt-2", className)} {...props} />
  ),
  Tabs: Tabs,
  TabsList: TabsList,
  TabsTrigger: TabsTrigger,
  TabsContent: TabsContent,
  Image: Image,
  Link: Link,
};
