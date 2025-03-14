"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function updateNote(id, title, content) {
  console.log("updated note");
  try {
    await prisma.note.update({
      where: {
        id: id,
      },
      data: {
        title: title,
        content: content,
      },
    });
    revalidatePath("/sticky");
  } catch (error) {
    console.error("Update Notes failed", error);
  }
}
