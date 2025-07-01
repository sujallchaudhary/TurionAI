"use client";

import * as React from "react";
import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeSelector() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex gap-1">
        <Button variant="ghost" size="sm" className="w-9 px-0">
          <Sun className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </div>
    );
  }

  return (
    <div className="flex gap-1 p-1 bg-neutral-100 dark:bg-neutral-800 rounded-lg">
      <Button
        variant={theme === "light" ? "default" : "ghost"}
        size="sm"
        className="w-9 px-0"
        onClick={() => setTheme("light")}
      >
        <Sun className="h-[1.1rem] w-[1.1rem]" />
        <span className="sr-only">Light mode</span>
      </Button>
      <Button
        variant={theme === "dark" ? "default" : "ghost"}
        size="sm"
        className="w-9 px-0"
        onClick={() => setTheme("dark")}
      >
        <Moon className="h-[1.1rem] w-[1.1rem]" />
        <span className="sr-only">Dark mode</span>
      </Button>
      <Button
        variant={theme === "system" ? "default" : "ghost"}
        size="sm"
        className="w-9 px-0"
        onClick={() => setTheme("system")}
      >
        <Monitor className="h-[1.1rem] w-[1.1rem]" />
        <span className="sr-only">System theme</span>
      </Button>
    </div>
  );
}
