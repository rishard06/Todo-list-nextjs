"use server"

import prisma from "@/lib/db"
import { revalidatePath } from "next/cache";

export async function deleteTask(id, authorId) {
  if(id === null || authorId === null) {
    console.error("Error deleting task: id or authorId is null");
    return;
  }
  try {
    await prisma.todo.delete({
      where: {
        id: id,
        authorId: authorId
      }
    });
  } catch (error) {
    console.error("Error deleting task", error);
  }
};