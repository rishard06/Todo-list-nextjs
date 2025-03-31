"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { DatePickerWithPresets } from "./calendar";
import Priority from "./Priority";
import { addTask } from "@/actions/todo/createTask";
import { format } from "date-fns";
import { AnimatePresence, motion } from "framer-motion";

function AddTaskCard({ handleClick }) {
  const [selectedDate, setSelectedDate] = useState("");
  const [priority, setPriority] = useState("");

  const handleDate = (date) => {
    setSelectedDate(format(date, "PP"));
  };

  const handlePriority = (prior) => {
    setPriority(prior);
  };

  return (
    <motion.form
      whileInView={{ 
        opacity: 1, 
        scale: 1, 
        ease: "easeOut" 
      }}
      exit={{
        opacity: 0,
        scale: [1, 1.1],
        y: 10,
        ease: "easeIn",
      }}
      transition={{
        duration: { opacity: 0.5 },
        type: "spring",
        bounce: 0.5,
      }}
      action={addTask}
      onSubmit={() => handleClick(false)}
    >
      <Card className="shadow-xl absolute w-full">
        <CardHeader>
          <Input type="text" placeholder="Title" name="title" required />
          <Textarea placeholder="Description" name="description" />
        </CardHeader>

        <CardContent className="flex gap-3">
          <DatePickerWithPresets date={selectedDate} setDate={handleDate} />
          <input type="hidden" name="date" value={selectedDate} />

          <Priority handlePriority={handlePriority} />
          <input type="hidden" name="priority" value={priority} />
        </CardContent>

        <CardFooter className="flex gap-2 justify-end">
          <Button variant="outline" onClick={() => handleClick(false)}>
            Cancel
          </Button>
          <Button type="submit">Add task</Button>
        </CardFooter>
      </Card>
    </motion.form>
  );
}

export default AddTaskCard;
