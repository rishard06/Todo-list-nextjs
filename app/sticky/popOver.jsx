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
import { CheckCheck } from "lucide-react";
import { RefreshCcw } from "lucide-react"; 

function PopOver({ id }) {
  return (
      <Popover>
        <PopoverTrigger className="absolute right-1 top-3">
          <Ellipsis className="cursor-pointer text-black/60 rotate-90 hover:bg-black/10 rounded-full " />
        </PopoverTrigger>

        <PopoverContent className="relative flex flex-col gap-1 p-2 w-auto rounded-xl">
          <Color id={id} />
          <Button variant="ghost" className="justify-between">Update <RefreshCcw /></Button>
          <Button variant="ghost" className="justify-between">Done <CheckCheck /></Button>
          <Button variant="ghost" className="justify-between">remove <X/></Button>
        </PopoverContent>
      </Popover>
  );
}

export default React.memo(PopOver);
