import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { PaintBucket } from "lucide-react";
import changeNoteColor from "@/actions/note/noteColor";
import Loader from "./Loader";

const Color = ({ id }) => {
  const [mouseOver, setMouseOver] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = async (noteColor, id) => {
    setIsLoading(true);
    await changeNoteColor(noteColor, id);
    setIsLoading(false);
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

      {isLoading && (
        <div className="absolute left-[-28px] top-[-16px] w-5 h-5 border-2 border-blue-400 border-t-transparent rounded-full animate-spinning"
        ></div>
      )}

      {mouseOver && (
        <div
          onMouseOver={() => setMouseOver(true)}
          onMouseOut={() => setMouseOver(false)}
          className="absolute flex gap-1 top-[-25px] left-0 bg-slate-600 rounded-full shadow-lg w-full p-2"
        >
          {Object.values(notesColor).map((key, index) => (
            <div
              onClick={() => handleClick(key, id)}
              className={`${key} rounded-full border-white/40 border-2 h-5 w-16 shadow-md shadow-black/50 cursor-pointer`}
              key={key}
            ></div>
          ))}
        </div>
      )}
    </>
  );
};

export default React.memo(Color);
