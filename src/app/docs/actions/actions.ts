"use server";

import { source } from "@/lib/source";

export async function getSidebarProps() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const allSections: any[] = source.getPages();
  const filteredSections = allSections.map((section) => ({
    title: section.data.title as string,
    url: section.url as string,
    slug: section.slugs as string[],
  }));
  return filteredSections;
}
