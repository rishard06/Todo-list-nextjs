import React from "react";
import prisma from "@/lib/db";
import { auth } from "@/lib/auth";
import { Suspense } from "react";
import ListOfTask from "./ListOfTask";

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
    <div className="dark:bg-black/50  border-[1px] p-4 rounded-md bg-white">
      {/* <Suspence fallback={<p>Loading...</p>}>   */}
        <ListOfTask className="my-2" list={list} path={"/"}/>
      {/* </Suspence> */}
    </div>
  );
}

export default TaskList;
