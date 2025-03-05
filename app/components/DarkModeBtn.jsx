"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { SunDim, MoonIcon } from "lucide-react";
import { useTheme } from "next-themes";

function DarkModeBtn() {
  const [isMounted, setIsMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);
  // const handleBtn = () => {
  //   setDarkMode(!darkMode);
  //   if (darkMode) {
  //     document.querySelector("#toggle-dark").classList.remove("dark");
  //   } else {
  //     document.querySelector("#toggle-dark").classList.add("dark");
  //   }
  // };
  if (!isMounted) return null;
  return (
      <Button
        className="fixed z-10 top-6 left-1/2 w-8 h-8 text-center hover:cursor-pointer"
        size="icon"
        variant="ghost"
        onClick={() => {resolvedTheme === "dark" ? setTheme("light") : setTheme("dark")}}
      >
        {resolvedTheme === "dark" ? <SunDim className="animate-rotate"/> : <MoonIcon className="animate-rotate"/>}
      </Button>
  );
}

export default DarkModeBtn;
