import { clsx, type ClassValue } from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";

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
