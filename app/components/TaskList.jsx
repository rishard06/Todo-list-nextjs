import React from "react";
import prisma from "@/lib/db";
import { auth } from "@/lib/auth";

async function TaskList() {
  const session = await auth();

  if(!session && !session?.user) {
    return(
      <div>
        <p className="text-gray-500">
          sign In first
        </p>
      </div>
    )
  }
  
  const list = await prisma.user.findUnique({
    where: {
      email: session?.user.email,
    },
    include: {
      todos: true,
    },
  });

  return (
    <div>
      <ul>
        {list &&  list?.todos.map((todo) => (
          <li key={todo.id}>
            <h2>{todo.title}</h2>
            
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
