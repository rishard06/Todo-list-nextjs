"use server";

import { auth, signIn } from "@/lib/auth";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function addTask(formData) {
  const session = await auth();
  if (!session && !session?.user) return await signIn();

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: session?.user.email,
      },
    });
    if (!user)
      throw new Error(`User with email ${session.user.email} not found`);
    
    const dbTaskCreate = await prisma.todo.create({
      data: {
        title: formData.get("title"),
        description: formData.get("description"),
        priority: formData.get("priority"),
        when: formData.get("date"),
        author: {
          connect: {
            id: user.id,
          },
        },
      },
    });
    revalidatePath("/");
    return dbTaskCreate
  } catch (error) {
    // console.log("error",error);
  }
}
