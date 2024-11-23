import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Icons } from "@/components/common/icons";
import { cn } from "@/lib/utils";
import Header from "./docs/_components/navbar/header";

export default function Page() {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100">
      <Header />
      <header className="mt-10 py-16 px-6 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          Welcome to <span className="text-indigo-500">CereoUI</span>
        </h1>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
          A simple, accessible, and customizable UI library built on top of{" "}
          <a
            href="https://ui.shadcn.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-indigo-500 hover:text-indigo-400"
          >
            shadcn/ui
          </a>
          . Perfect for modern web applications.
        </p>
        <p className="mt-4 text-md font-medium text-black dark:text-indigo-500 animate-pulse">
          ✨ New Components Will Be Coming Every Week! ✨
        </p>
        <div className="mt-6 flex justify-center space-x-4">
          <Link
            href="/docs/accordion"
            className={cn(
              "inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium transition-colors rounded-md",
              "bg-primary text-white dark:text-black hover:bg-primary/90",
              "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            )}
          >
            Get Started
          </Link>

          <Link
            href="/docs/accordion"
            className={cn(
              "inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium transition-colors rounded-md",
              "bg-primary text-white dark:text-black hover:bg-primary/90",
              "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            )}
          >
            Github{" "}
            <span className="ml-2">
              <Icons.gitHub className="w-5 h-5" />
            </span>
          </Link>
        </div>
      </header>

      <section className="py-12 px-6">
        <h2 className="text-3xl font-semibold text-center">
          Why Use <span className="text-indigo-500">CereoUI?</span>
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
          {[
            {
              title: "Simple & Accessible",
              description:
                "Focus on building great experiences with pre-styled components.",
            },
            {
              title: "Dark & Light Themes",
              description:
                "Seamlessly adapts to both light and dark modes out of the box.",
            },
            {
              title: "Customizable Design",
              description:
                "Easily extend components to match your brand and requirements.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold">{feature.title}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-12 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <h2 className="text-2xl font-semibold">
            Ready to build with{" "}
            <span className="text-indigo-500">CereoUI?</span>
          </h2>
          {/* <p className="mt-4 text-gray-700 dark:text-gray-300">
            Join thousands of developers using CereoUI for their next project.
          </p> */}
          <div className="mt-6">
            <Link
              href="/docs/accordion"
              className={cn(
                "inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium transition-colors rounded-md",
                "bg-primary text-white dark:text-black hover:bg-primary/90",
                "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              )}
            >
              Get Started Now
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="py-6 px-6 text-center border-t border-gray-200 dark:border-gray-700">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          &copy; {new Date().getFullYear()} CereoUI. Built with{" "}
          <a
            href="https://ui.shadcn.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-indigo-500 hover:text-indigo-400"
          >
            shadcn/ui
          </a>
          .
        </p>
      </footer>
    </div>
  );
}
