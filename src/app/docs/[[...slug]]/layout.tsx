import React from "react";
import LeftSidebar from "../_components/side-bar/left-sidebar";
import RightSidebar from "../_components/side-bar/right-sidebar";
import Header from "../_components/navbar/header";

/* eslint-disable @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-unnecessary-type-assertion */
type Props = {
  children: React.ReactNode;
  params: Promise<{ slug: string[] }>;
};

const Layout = ({ children, params }: Props) => {
  return (
    <div className="min-h-screen" suppressHydrationWarning>
      <Header params={params} />
      <div className=" flex flex-1 pt-16 flex-col lg:flex-row">
        <div className="w-60 lg:block hidden">
          <LeftSidebar params={params} />
        </div>

        <main className="flex-1 px-4 lg:px-8 dark:bg-black bg-white py-8 min-h-screen">
          <div className="mx-auto max-w-full md:max-w-3xl">{children}</div>
        </main>
        <div className="w-60 xl:block hidden">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
};

export default Layout;
