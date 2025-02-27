"use client";

import React from "react";
import { useState, useCallback } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { completeTask } from "@/actions/todo/completeTask";

function CheckTodo({ todo }) {
  const [isChecked, setIsChecked] = useState(todo.completed);

  const handleChange = useCallback(async () => {
    setIsChecked(!isChecked);
    await completeTask(todo.id, todo.completed);
  }, [isChecked, todo.id, todo.completed]);

  const priority = {
    "priority 1": "border-red-600",
    "priority 2": "border-blue-600",
    "priority 3": "border-yellow-500",
    "priority 4": "border-black",
  };

  return (
    <div>
      <Checkbox
        checked={isChecked}
        onCheckedChange={handleChange}
        className={`mt-3 ${priority[todo?.priority]} ${!todo.priority ? "border-gray-100" : null}`}
      />
    </div>
  );
}

export default CheckTodo;
