"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Switch } from "@/components/ui/switch";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex items-center space-x-2">
      <Switch
        checked={theme === "dark"}
        onCheckedChange={(checked: boolean) => setTheme(checked ? "dark" : "light")}
        className="data-[state=checked]:bg-primary data-[state=unchecked]:bg-input"
      />
      <div className="flex items-center justify-center">
        {theme === 'dark' ? (
          <Sun className="h-[1rem] w-[1rem] text-yellow-400 transition-all duration-300" />
        ) : (
          <Moon className="h-[1rem] w-[1rem] text-slate-700 transition-all duration-300" />
        )}
      </div>
    </div>
  );
}
