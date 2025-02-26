import React from "react";
import prisma from "@/lib/db";
import { auth } from "@/lib/auth";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { completeTask } from "@/actions/todo/completeTask";
import CheckTodo from "./CheckTodo";
import { format } from "date-fns";

async function TaskList() {
  const session = await auth();

  if (!session && !session?.user) {
    return (
      <div>
        <p className="text-gray-500 ">sign In first</p>
      </div>
    );
  }

  const user = await prisma.user.findUnique({
    where: {
      email: session?.user.email,
    },
  });

  const list = await prisma.todo.findMany({
    where: {
      authorId: user.id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div>
      <ul>
        {list &&
          list?.map((todo) => (
            <li key={todo.id}>
              <div className="flex w-full hover:bg-black/5 cursor-pointer">
                <CheckTodo todo={todo} />
                <Link
                  href={{
                    pathname: "/",
                    query: {
                      id: todo.id,
                      authorId: todo.authorId,
                    },
                  }}
                  className={`flex border-b-[1px] w-full h-10 gap-2 p-2 justify-between items-center font-semibold text-black/50 ${
                    todo.completed ? "line-through" : null
                  } active:scale-95 transition-transform ease-out duration-100`}
                >
                  <p>{todo.title}</p>
                  <span className="flex gap-2 items-center">
                    <p className="text-xs text-black/40">
                      created at: {format(todo.createdAt, "PP")}
                    </p>
                    <ChevronRight className="text-black/50" />
                  </span>
                </Link>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default TaskList;
