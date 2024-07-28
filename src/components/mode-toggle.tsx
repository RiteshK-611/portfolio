"use client";

import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
        aria-label="Toggle theme"
        size="sm"
        variant="ghost"
        className="px-0 w-9"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        {theme == "light" ? (
          <MoonIcon className="h-5 w-5" />
        ) : (
          <SunIcon className="h-5 w-5" />
        )}
      </Button>
  );
}
