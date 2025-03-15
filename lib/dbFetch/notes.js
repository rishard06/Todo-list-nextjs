"use server"

import prisma from "../db";
import { auth } from "../auth";
import { headers } from "next/headers";

export async function getNotes() {
  headers()
  const session = await auth();
  
  if(!session || !session.user) {
    return "Not Authorized"
  }

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: session.user?.email,
      }
    }) 

    const getNote = await prisma.note.findMany({
      where: {
        authorId: user?.id,
      },
      orderBy: {
        created: "desc",
      },
      take: 15,
    });

    if (!getNote || getNote.length === 0)
      return "No notes in database"
    
    return getNote;
  } catch (error) {
    console.error("Error: Faild to fetch", error)
  }
}