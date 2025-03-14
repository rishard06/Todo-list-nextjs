"use client";

import React, { useState } from "react";
import { RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import { updateNote } from "@/actions/note/updateNote";
import { useNotesLoading } from "./contextFile";

const AnimateButton = motion.create(Button);

export default function Update({ input, textarea, id }) {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoading, setIsLoading } = useNotesLoading();

  const handleClick = async () => {
    setIsLoading(id, true);
    try {
      await updateNote(id, input, textarea)
    } finally {
      setIsLoading(id, false);
    }
  };

  return (
    <>
      <AnimateButton
        onClick={handleClick}
        whileHover={{ scale: 1.09 }}
        onMouseOver={() => setIsOpen(true)}
        onMouseOut={() => setIsOpen(false)}
        variant="ghost"
        size="icon"
        className="absolute z-10 bg-slate-400 rounded-full bottom-0 right-0 w-7 h-7 m-1"
      >
        <RefreshCcw />

        {isOpen && (
          <motion.p 
            animate={{
              x: 70,
              opacity: [0, 0, 1]
            }}
            transition={{ duration: 0.3,}}
            className="absolute right-0 bottom-[1px] bg-inherit px-2 py-1 rounded-full shadow-md shadow-black/40">
            Update
          </motion.p>
        )}
      </AnimateButton>
    </>
  );
}
