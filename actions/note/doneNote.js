"use server"

import prisma from "@/lib/db"
import { revalidatePath } from "next/cache"

export async function doneNote(id) {
  try {
    await prisma.note.update({
      where: {
        id: id,
      },
      data: {
        done: true
      }
    }) 

  revalidatePath("/sticky")
  }catch (error) {
    console.error("Faild to update note", error)
  }
}
