"use server"

import { auth } from "@/lib/auth";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function completeTask(formData) {
  const isCompleted = formData.get('completed') === "on";
  const authorId = formData.get('authorId');
  const id = formData.get('id');
  
  try {
    await prisma.todo.update({
      where: {
        id: id,
        authorId: authorId,
      },
      data: {
        completed: isCompleted,
      }
    })
    console.log("this is checke box", isCompleted)
    revalidatePath('/')
  } catch (error) {
    console.error("complete error", error.message);
  }
}