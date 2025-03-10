import NextAuth from "next-auth"; // or your auth library
import { authConfig } from "@/auth.config"
import { NextResponse } from "next/server";

export async function withAuth(handler) {
  return async (req, res) => {
    const session = await NextAuth.auth({
      ...authConfig,
      req,
    });
    // console.log(typeof handler)
    // console.log("session :",session)
    if (!session || !session.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    req.user = session.user; // Attach user to request
    return handler(req, res);
  };
}
