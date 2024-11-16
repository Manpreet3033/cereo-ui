"use server";

import { source } from "@/lib/source";

export async function getSidebarProps() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const allSections: any[] = source.getPages();
  const filteredSections = allSections.map((section) => ({
    title: section.data.title,
    url: section.url,
    slug: section.slugs,
  }));
  return filteredSections;
}
