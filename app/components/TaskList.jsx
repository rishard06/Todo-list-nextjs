import React from "react";
import prisma from "@/lib/db";
import { auth } from "@/lib/auth";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import { completeTask } from "@/actions/todo/completeTask";

async function TaskList() {
  const session = await auth();

  if (!session && !session?.user) {
    return (
      <div>
        <p className="text-gray-500 ">sign In first</p>
      </div>
    );
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
        {list &&
          list?.todos.map((todo) => (
            <li key={todo.id}>
              <div className="flex border-b-[1px] h-10 gap-2 p-2 items-center hover:bg-black/5 cursor-pointer">
                <Checkbox todo={todo} />

                <Link
                  href={{
                    pathname: "/",
                    query: {
                      id: todo.id,
                      authorId: todo.authorId,
                    }
                  }}
                  className={`font-semibold text-black/50 ${
                    todo.completed ? "line-through" : null
                  }`}
                >
                  {todo.title}
                </Link>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default TaskList;
