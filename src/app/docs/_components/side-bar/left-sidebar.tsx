import Link from "next/link";
import { getSidebarProps } from "../../actions/actions";

export default async function LeftSidebar({
  params,
}: {
  params?: { slug: [string] };
}) {
  const sections = await getSidebarProps();
  const slug = params && (await params).slug[0];

  return (
    <aside className="w-full border-r dark:border-gray-800 border-gray-200 dark:bg-black bg-white sticky top-16 h-screen">
      <nav className="w-11/12 overflow-y-auto p-4">
        <div className="space-y-4">
          <div className="transition-all duration-300">
            <p className="space-y-1 my-2 pl-4 font-bold">Components</p>
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
          </div>
        </div>
      </nav>
    </aside>
  );
}
