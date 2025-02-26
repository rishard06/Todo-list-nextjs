"use client";

import React from "react";
import { Checkbox } from "@radix-ui/react-checkbox";
import { completeTask } from "@/actions/todo/completeTask";

function CheckBox(props) {
  return (
    <form action={completeTask} className="mt-2">
      <input type="hidden" name="authorId" value={props.todo.authorId} />
      <input type="hidden" name="id" value={props.todo.id} />
      <button type="submit" className="">this</button>
    </form>
  );
}

export default CheckBox;
