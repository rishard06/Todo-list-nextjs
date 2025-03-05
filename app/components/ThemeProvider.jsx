import React from "react";
import { ThemeProvider } from "next-themes";

function ThemesProvider({ children }) {

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      themes={["light", "dark"]}
    >
      {children}
    </ThemeProvider>
  );
}

export default ThemesProvider;
