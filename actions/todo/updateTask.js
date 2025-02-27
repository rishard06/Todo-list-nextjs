"use server"

import prisma from "@/lib/db"
import { revalidatePath } from "next/cache";
import { format } from "date-fns";

export async function updateTask(todo) {
  try {
    await prisma.todo.update({
      where: {
        id: todo.id,
      },
      data: {
        title: todo.title,
        description: todo.description,
        priority: todo.priority,
        when: todo.when ? format(todo.when, "PP") : undefined,
      }
    })
    revalidatePath("/");
  } catch (error) {
    console.error("complete error", error.message);
  }
}