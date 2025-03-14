import prisma from "../db";
import { auth } from "../auth";



export async function getNotes(params) {
  try {
    const session = await auth();
    
    if(!session || !session.user) {
      return "Unauthorized"
    }
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
    console.error("Error: faild to fetch", error)
  }
}