import { Menu } from "lucide-react";
import ThemeSwitcher from "./buttons/theme-switcher";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 gap-2 z-40 w-full border-b dark:border-gray-800 border-gray-300 dark:bg-black/50 backdrop-blur-lg">
      <div className="mx-auto max-w-screen-2xl flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <div className="lg:hidden">
            <button className="p-2 hover:bg-gray-800 rounded-lg">
              <Menu className="h-5 w-5" />
            </button>
          </div>
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold mr-2 lg:mr-6">
              CereoUI
            </Link>
            <nav className="hidden lg:flex items-center lg:gap-6 gap-4 md:mr-4">
              {[
                "Docs",
                "Components",
                "Templates",
                "Blocks",
                "Examples",
                "Themes",
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="dark:text-gray-400 dark:hover:text-white text-black text-sm"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="flex items-center gap-4 sm:gap-1">
          <div className="relative">
            <input
              type="search"
              placeholder="Search..."
              className="w-full rounded-lg dark:bg-gray-900 bg-gray-100 border px-2 py-2 text-sm focus:outline-none"
            />
          </div>
          <div className="flex ml-2 items-center">
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
}
