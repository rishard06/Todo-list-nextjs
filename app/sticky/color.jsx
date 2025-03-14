"use client"

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { PaintBucket } from "lucide-react";
import changeNoteColor from "@/actions/note/noteColor";
import { motion } from "motion/react"
import { useNotesLoading } from "./contextFile";

const Color = ({ id }) => {
  const [mouseOver, setMouseOver] = useState(false);
  const { isLoading, setIsLoading } = useNotesLoading();

  const handleClick = async (noteColor, id) => {
    setIsLoading(id, true);
    await changeNoteColor(noteColor, id);
    setIsLoading(id, false);
  };

  const notesColor = {
    yellow: "bg-yellow-100",
    green: "bg-green-200",
    red: "bg-red-200",
    blue: "bg-blue-200",
    purple: "bg-purple-200",
  };

  return (
    <>
      <Button
        onMouseOver={() => setMouseOver(true)}
        onMouseOut={() => setMouseOver(false)}
        variant="ghost"
        className="justify-between"
      >
        Color
        <PaintBucket />
      </Button>

      {mouseOver && (
        <motion.div
          onMouseOver={() => setMouseOver(true)}
          onMouseOut={() => setMouseOver(false)}
          whileInView={{ scale: 1.09 }}
          className="absolute flex gap-1 top-[-25px] left-0 bg-slate-600 rounded-full shadow-lg w-full p-2"
        >
          {Object.values(notesColor).map((key, index) => (
            <motion.div
            onClick={() => handleClick(key, id)}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.09 }}
            className={`${key} rounded-full border-white/40 border-2 h-5 w-16 shadow-md shadow-black/50 cursor-pointer`}
            key={key}
            ></motion.div>
          ))}
        </motion.div>
      )}
    </>
  );
};

export default React.memo(Color);
