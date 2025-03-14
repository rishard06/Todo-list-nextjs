"use client"

import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Ellipsis } from "lucide-react";
import { Button } from "@/components/ui/button";
import Color from "./color";
import { X } from "lucide-react";
import { Check } from "lucide-react";
import { removeNote } from "@/actions/note/removeNote";
import { doneNote } from "@/actions/note/doneNote";
import { useNotesLoading } from "./contextFile";

function PopOver({ id }) {
  const { isLoading, setIsLoading } = useNotesLoading();

  const handleDone = async () => {
    setIsLoading(id, true);
    try {
      await doneNote(id);
    } finally {
      setIsLoading(id, false);
    }
  };

  const handleRemove = async () => {
    setIsLoading(id, true);
    try {
      await removeNote(id);
    } finally {
      setIsLoading(id, false);
    }
  };

  return (
    <Popover>
      <PopoverTrigger className="absolute right-1 top-3">
        <Ellipsis className="cursor-pointer active:scale-105 text-black/60 rotate-90 hover:bg-black/10 rounded-full " />
      </PopoverTrigger>

      <PopoverContent className="relative flex flex-col gap-1 p-2 w-auto rounded-xl ">
        <Color id={id} />
        <Button 
          onClick={handleDone} 
          variant="ghost" 
          className="justify-between"
        >
          Done <Check />
        </Button>
        <Button 
          onClick={handleRemove}
          variant="ghost"
          className="justify-between"  
        >
          remove <X />
        </Button>
      </PopoverContent>
    </Popover>
  );
}

export default React.memo(PopOver);
