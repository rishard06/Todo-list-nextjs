"use server"

import prisma from '@/lib/db'
import { revalidatePath } from 'next/cache'

export async function removeNote(id) {
  try {
    await prisma.note.delete({
      where: {
        id: id
      }
    })
    revalidatePath("/sticky");
  } catch (error) {
    console.error("Faild to remove Note", error);
  }
}
