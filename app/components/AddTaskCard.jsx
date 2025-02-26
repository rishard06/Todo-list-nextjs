"use client"

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
import { Textarea } from "@/components/ui/textarea"
import { DatePickerWithPresets } from "./calendar";
import Priority from "./Priority";
import { addTask } from "@/actions/todo/createTask";
import { format } from "date-fns";

function AddTaskCard({ handleClick }) {
  const [selectedDate, setSelectedDate] = useState("");
  const [priority, setPriority] = useState("");

  const handleDate = (date) => {
    setSelectedDate(format(date, "PP"));
  }

  const handlePriority = (prior) => {
    setPriority(prior)
  }

  return (
    <form action={addTask} onSubmit={() => handleClick(false)}>
      <Card className="shadow-md absolute w-full">
        <CardHeader>
          <Input type="text" placeholder="Title" name="title" required/>
          <Textarea placeholder="Description" name="description"/>
        </CardHeader>

        <CardContent className="flex gap-3">
          <DatePickerWithPresets date={selectedDate} setDate={handleDate} />
          <input type="hidden" name="date" value={selectedDate}/>

          <Priority handlePriority={handlePriority}  />
          <input type="hidden" name="priority" value={priority}/>
        </CardContent>

        <CardFooter className="flex gap-2 justify-end">
            <Button variant="outline" onClick={() => handleClick(false)} >Cancel</Button>
            <Button type="submit">Add task</Button>
        </CardFooter>
      </Card>
    </form>
  );
}

export default AddTaskCard;
