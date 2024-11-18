"use client";
import { useEffect, useState } from "react";

export default function RightSidebar() {
  const [headings, setHeadings] = useState<{ id: string; text: string }[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const headingElements = Array.from(document.querySelectorAll("h2, h3"));
    const headingsList = headingElements.map((heading) => ({
      id: heading.id,
      text: heading.textContent || "",
    }));
    setHeadings(headingsList);
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      const visibleEntry = entries.find((entry) => entry.isIntersecting);
      if (visibleEntry) {
        setActiveId(visibleEntry.target.id);
      }
    };
    const observer = new IntersectionObserver(observerCallback, {
      root: null,
      rootMargin: "0px 0px -60% 0px",
      threshold: 0.1,
    });

    headingElements.forEach((heading) => observer.observe(heading));
    return () => observer.disconnect();
  }, []);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <aside className="w-11/12 border-l dark:border-gray-800 border-gray-200 dark:bg-black bg-white sticky top-16 h-screen p-4">
      <h5 className="text-sm font-semibold mb-4">On this page</h5>
      <ul className="space-y-2 text-sm">
        {headings.map((heading) => (
          <li key={heading.id}>
            <button
              onClick={() => handleScrollTo(heading.id)}
              className={`block text-left w-full py-1 ${
                activeId === heading.id
                  ? "font-bold text-black dark:text-white"
                  : "text-gray-500"
              }`}
            >
              {heading.text}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
