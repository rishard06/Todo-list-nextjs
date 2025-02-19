import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Flag } from "lucide-react";

function Priority({handlePriority }) {
  return (
    <Select onValueChange={handlePriority}>
      <SelectTrigger className="w-[140px]">
        <SelectValue placeholder="Priority" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="priority 1">
          <span className="flex gap-2">
            <Flag color="red" width={20} />
            <span>Priority 1</span>
          </span>
        </SelectItem>
        <SelectItem value="priority 2">
          <span className="flex gap-2">
            <Flag color="blue" width={20} />
            <span>Priority 2</span>
          </span>
        </SelectItem>
        <SelectItem value="priority 3">
          <span className="flex gap-2">
            <Flag color="orange" width={20} />
            <span>Priority 3</span>
          </span>
        </SelectItem>
        <SelectItem value="priority 4">
          <span className="flex gap-2">
            <Flag width={20} />
            <span>Priority 4</span>
          </span>
        </SelectItem>
      </SelectContent>
    </Select>
  );
}

export default Priority;
