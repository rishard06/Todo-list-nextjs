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

  return (
    <div>
      <Checkbox
        checked={isChecked}
        onCheckedChange={handleChange}
        className={`mt-3 ${
          todo.priority === "priority 1"
            ? "border-red-600"
            : todo.priority === "priority 2"
            ? "border-blue-600"
            : todo.priority === "priority 3"
            ? "border-yellow-500"
            : "border-black"
        }`}
      />
    </div>
  );
}

export default CheckTodo;
