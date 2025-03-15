"use server"

import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import { auth, signIn } from "@/lib/auth";
import { revalidatePath } from "next/cache";

export async function addNote(title, content) {
  const session = await auth();
  if (!session && !session?.user) return await signIn();

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: session?.user.email,
      },
    })

    if(!user) throw new Error(`User not with email: ${session.user.email} not found`)
 
    const dbNoteCreate = await prisma.note.create({
      data: {
        title: title,
        content: content,
        color: "",
        position: "",
        author: {
          connect: {
            id: user?.id
          }
        } 
      }
    })

    revalidatePath('/sticky');
    return dbNoteCreate
  } catch (error) {
    console.log(error)
  }
}
