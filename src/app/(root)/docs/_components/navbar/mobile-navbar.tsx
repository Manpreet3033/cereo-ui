import React from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Menu } from "lucide-react";
import Link from "next/link";
import { getSidebarProps } from "@/lib/utils";

const MobileNav = async ({
  params,
}: {
  params?: Promise<{ slug: string[] }>;
}) => {
  const sections = getSidebarProps();
  let slug: string | undefined;

  if (params) {
    try {
      const resolvedParams = await params;
      slug = resolvedParams?.slug?.[0];
    } catch (error) {
      console.error("Error resolving params:", error);
    }
  }
  return (
    <Drawer>
      <DrawerTrigger className="flex items-center mr-2">
        <Menu />
      </DrawerTrigger>
      <DrawerContent className="flex justify-start items-start min-h-[50%] dark:bg-black">
        <DrawerHeader>
          <DrawerTitle>Components</DrawerTitle>
        </DrawerHeader>
        <ul className="space-y-1 pl-4">
          {sections.map((item) => {
            const name = item.title;
            const url = item.url;
            const isActive = slug === item.slug[0];
            return (
              <li key={name} className="flex items-center">
                <Link
                  href={url}
                  passHref
                  className={`block text-sm py-1 flex-1 cursor-pointer ${
                    isActive
                      ? "font-semibold underline dark:text-white text-black"
                      : "dark:text-gray-400 dark:hover:text-white text-black"
                  }`}
                >
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileNav;
