import { clsx, type ClassValue } from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";
import { source } from "@/lib/source";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const extractText = (children: React.ReactNode): string => {
  return React.Children.toArray(children)
    .map((child: React.ReactNode) => {
      if (typeof child === "string") {
        return child;
      }
      if (React.isValidElement(child) && child.props?.children) {
        return extractText(child.props.children);
      }

      return "";
    })
    .join("");
};

export function getSidebarProps() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const allSections: any[] = source.getPages();
  const filteredSections = allSections.map((section) => ({
    title: section.data.title as string,
    url: section.url as string,
    slug: section.slugs as string[],
  }));
  return filteredSections;
}
