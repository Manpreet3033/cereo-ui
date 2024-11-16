"use client";
import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
// import { allComponentDocs } from "contentlayer/generated/";

export default function LeftSidebar() {
  const sections = [
    // {
    //   title: 'Guide',
    //   items: [
    //     { name: 'Introduction', url: '/guide/introduction' },
    //     { name: 'Installation', url: '/guide/installation' },
    //     { name: 'CLI', badge: 'New', url: '/guide/cli' },
    //     { name: 'Design Principles', url: '/guide/design-principles' },
    //     { name: 'Routing', url: '/guide/routing' },
    //     { name: 'Upgrade to v2', url: '/guide/upgrade-to-v2' },
    //   ],
    // },
    // {
    //   title: 'Frameworks',
    //   items: [
    //     { name: 'Next.js', url: '/frameworks/nextjs' },
    //     { name: 'Vite', url: '/frameworks/vite' },
    //     { name: 'Remix', url: '/frameworks/remix' },
    //     { name: 'Astro', url: '/frameworks/astro' },
    //   ],
    // },
    // {
    //   title: 'Customization',
    //   items: [
    //     { name: 'Theme', url: '/customization/theme' },
    //     { name: 'Layout', badge: 'Updated', url: '/customization/layout' },
    //     { name: 'Colors', url: '/customization/colors' },
    //     { name: 'Customize theme', url: '/customization/customize-theme' },
    //     { name: 'Create theme', url: '/customization/create-theme' },
    //     { name: 'Dark mode', url: '/customization/dark-mode' },
    //     { name: 'Override styles', url: '/customization/override-styles' },
    //     { name: 'Custom variants', url: '/customization/custom-variants' },
    //   ],
    // },
    {
      title: "Components",
      items: [
        { name: "Accordion", url: "/components" },
        { name: "Autocomplete", url: "/components" },
        { name: "Buttons", url: "/components" },
        { name: "Cards", url: "/components" },
        { name: "Chat Bubble", url: "/docs/components" },
        {
          name: "Fade Overlay",
          url: "/docs/components/fade-overlay",
        },
        // { name: 'Modals', url: '/components/modals' },
        // { name: 'Tables', url: '/components/tables' },
        // { name: 'Tabs', url: '/components/tabs' },
      ],
    },
  ];

  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    Guide: true,
    Frameworks: true,
    Customization: true,
    Components: true,
  });

  const toggleSection = (title: string) => {
    setOpenSections((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <aside className="w-full border-r dark:border-gray-800 border-gray-200 dark:bg-black bg-white sticky top-16 h-screen">
      <nav className="w-11/12 overflow-y-auto p-4">
        <div className="space-y-4">
          {sections.map((section) => (
            <div key={section.title}>
              <button
                onClick={() => toggleSection(section.title)}
                className="flex items-center justify-between w-full text-left dark:text-gray-400 dark:hover:text-white text-black text-sm font-semibold mb-2"
              >
                {section.title}
                {openSections[section.title] ? (
                  <ChevronDown className="h-4 w-4 transition-transform duration-300 transform rotate-180" />
                ) : (
                  <ChevronRight className="h-4 w-4 transition-transform duration-300" />
                )}
              </button>
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openSections[section.title]
                    ? "max-h-screen opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <ul className="space-y-1 pl-4">
                  {section.items.map((item) => {
                    const name = typeof item === "string" ? item : item.name;
                    const url =
                      typeof item === "object" && item.url
                        ? item.url
                        : `#${name.toLowerCase().replace(/\s+/g, "-")}`;
                    return (
                      <li key={name} className="flex items-center">
                        <a
                          href={url}
                          className="block dark:text-gray-400 dark:hover:text-white text-black text-sm py-1 flex-1"
                        >
                          {name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </nav>
    </aside>
  );
}
