"use server"

import { auth } from "@/lib/auth";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function completeTask (id, completed) {
  try {
    await prisma.todo.update({
      where: {
        id: id,
      },
      data: {
        completed: !completed,
      }
    })

    revalidatePath('/')
  } catch (error) {
    console.error("complete error", error.message);
  }
}