import React from "react";
import prisma from "@/lib/db";

async function TaskList() {
  const list = await prisma.todo.findMany();
  console.log(list);
  return (
    <div>
      <h1>helo</h1>
      <ul>
        {list.map((todo) => (
          <li key={todo.id}>
            <h2>{todo.title}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
