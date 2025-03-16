import { NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function GET(request, { params }) {
  const { id } = await params;
  try {
    const getTask = await prisma.todo.findUnique({
      where: {
        id: id,
      }
    });
    
    if (!getTask)
      return NextResponse.json({ error: "Task not found" }, { status: 404 });

    return NextResponse.json(getTask);
  } catch (error) {
    // console.error("Erron fetching task", err)
    return NextResponse.json({ error: "Faild to fetch data" }, { status: 500 }, error);
  }
}
