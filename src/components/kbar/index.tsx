"use client";

import React from "react";
import {
  KBarAnimator,
  KBarPortal,
  KBarPositioner,
  KBarProvider,
  KBarSearch,
  Action,
  Priority,
} from "kbar";
import RenderResult from "./render-result";
import { getSidebarProps } from "@/app/docs/actions/actions";

interface SideBarProps {
  title: string;
  url: string;
  slug: string[];
}
import { useRouter } from "next/navigation";

export default function KBar({ children }: { children: React.ReactNode }) {
  const [sections, setSections] = React.useState<SideBarProps[]>();
  const navigate = useRouter();
  React.useEffect(() => {
    const fetchSections = async () => {
      const sections = await getSidebarProps();
      setSections(sections);
    };
    fetchSections();
  }, []);

  const actions: Action[] =
    sections?.map((section) => ({
      id: section.slug[0],
      name: section.title,
      keywords: section.slug[0],
      section: "Navigation",
      perform: () => {
        navigate.push(section.url);
      },
    })) ?? [];

  if (!sections) {
    return null;
  }

  return (
    <KBarProvider actions={actions}>
      <ActualComponent>{children}</ActualComponent>
    </KBarProvider>
  );
}

const ActualComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <KBarPortal>
        <KBarPositioner className="scrollbar-hide fixed inset-0 z-[999] bg-black/40 !p-0 backdrop-blur-sm dark:bg-black/60">
          <KBarAnimator className="relative !mt-64 w-full max-w-[600px] !-translate-y-12 overflow-hidden rounded-lg border bg-white text-foreground shadow-lg dark:border-gray-600 dark:bg-black dark:text-gray-200">
            <div className="bg-white dark:bg-black">
              <div className="border-x-0 border-b-2 dark:border-gray-700">
                <KBarSearch className="w-full border-none bg-white px-6 py-4 text-lg outline-none focus:outline-none focus:ring-0 focus:ring-offset-0 dark:bg-black" />
              </div>
              <RenderResult />
            </div>
          </KBarAnimator>
        </KBarPositioner>
      </KBarPortal>
      {children}
    </>
  );
};
