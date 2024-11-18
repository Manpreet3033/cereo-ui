import Link from "next/link";
import ThemeSwitcher from "../buttons/theme-switcher";
import MobileNav from "./mobile-navbar";
import SearchInput from "@/components/common/search-input";

export default function Header({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  return (
    <header className="fixed top-0 gap-2 z-40 w-full border-b dark:border-gray-800 border-gray-300 dark:bg-black/50 backdrop-blur-lg">
      <div className="mx-auto max-w-screen-2xl flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <div className="lg:hidden">
            <MobileNav params={params} />
          </div>
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold mr-2 lg:mr-6">
              CereoUI
            </Link>
            <nav className="hidden lg:flex items-center lg:gap-6 gap-4 md:mr-4">
              {["Components"].map((item) => (
                <Link
                  key={item}
                  href="/docs/accordion"
                  className="dark:text-gray-400 dark:hover:text-white text-black text-sm"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="flex items-center gap-4 sm:gap-1">
          <div className="relative">
            <SearchInput />
          </div>
          <div className="flex ml-2 items-center">
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
}
