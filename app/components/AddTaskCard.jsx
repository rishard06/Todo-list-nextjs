import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DatePickerWithPresets } from "./calendar";
import Priority from "./Priority";

function AddTaskCard({ handleClick }) {
  const [when, setWhen] = useState(null);

  return (
    <Card className="shadow-md">
      <CardHeader>
        <Input type="text" placeholder="Title" />
        <Input type="text" placeholder="Description" />
      </CardHeader>

      <CardContent className="flex gap-3">
        <DatePickerWithPresets />
        <Priority />
      </CardContent>

      <CardFooter className="flex gap-2 justify-end">
          <Button variant="outline" onClick={() => handleClick(false)} >Cancel</Button>
          <Button onClick={() => handleClick(false)}>Add task</Button>
      </CardFooter>
    </Card>
  );
}

export default AddTaskCard;
