import { auth } from "@/lib/auth";
import prisma from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req) {
  const user = await auth();

  if(!user) {
    return NextResponse.json({error: "Unauthorized"}, { status: 401})
  }

  try {
    const getNote = await prisma.note.findMany({
      where: {
        authorId: user.id,
      },
    });

    if (!getNote || getNote.length === 0)
      return NextResponse.json({ error: "Notes not found" }, { status: 404 });

    return NextResponse.json(getNote);
  } catch (error) {
    return NextResponse.json({ error: "Faild to fetch data" }, { status: 500 });
  }
}

// export const GET = withAuth(handler);