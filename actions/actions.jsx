"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function addTask(formData) {
  // const title = formData.get('title')
  // const description = formData.get('description')
  // const date = formData.get('date')
  // const priority = formData.get('priority')

  // console.log(title, description, date , priority)

  await prisma.todo.create({
    data: {
      title: formData.get("title"),
      description: formData.get("description"),
      priority: formData.get("priority"),
      when: formData.get("date"),
      author: {
        connect: {
          email: "jonsnow@gmail.com",
        }
      }
    },
  });

  revalidatePath("/")
}
