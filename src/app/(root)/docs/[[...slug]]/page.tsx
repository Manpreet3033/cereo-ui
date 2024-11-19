import { source } from "@/lib/source";
import { DocsDescription, DocsTitle } from "fumadocs-ui/page";
import { notFound } from "next/navigation";
import React from "react";
import { getMDXComponents } from "@/components/mdx-components";
import { MDXComponents } from "mdx/types";

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();
  const MDX = page.data.body;
  const components: MDXComponents = getMDXComponents();
  return (
    <div className="flex flex-col" suppressHydrationWarning>
      {" "}
      <DocsTitle className="font-bold text-3xl">{page.data.title}</DocsTitle>
      <DocsDescription className="py-4 font-normal dark:text-gray-400 text-gray-600">
        {page.data.description}
      </DocsDescription>
      <div className="flex flex-col mt-2">
        <MDX suppressHydrationWarning components={components} />
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
