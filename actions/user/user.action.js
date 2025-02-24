import prisma from "@/lib/db";
import { auth } from "@/lib/auth";

export async function syncUser() {
  try {
    const session = await auth();

    if(!session || !session.user) return;

    const existingUser = await prisma.user.findUnique({
      where: {
        email: session?.user.email,
      }
    })

    if (existingUser) return existingUser;

    await prisma.user.create({
      data: {
        name: session?.user.name,
        email: session?.user.email,
      }
    })

  } catch (error) {
    console.log("syncUser error")
  }
}