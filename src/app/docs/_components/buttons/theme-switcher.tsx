"use client";
import { Menubar, MenubarMenu, MenubarTrigger } from "@radix-ui/react-menubar";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import React, { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
    setMounted(true);
  }, [setTheme]);

  if (!mounted) {
    return null;
  }

  return (
    <Menubar className="relative border-none bg-transparent shadow-none">
      <MenubarMenu>
        <MenubarTrigger
          className="focus:bg-light-900 data-[state=open]:bg-light-900 dark:focus:bg-dark-200 dark:data-[state=open]:bg-dark-200"
          onClick={() => {
            setTheme(theme === "light" ? "dark" : "light");
          }}
        >
          {theme === "light" ? <Sun /> : <Moon />}
        </MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  );
};

export default ThemeSwitcher;
