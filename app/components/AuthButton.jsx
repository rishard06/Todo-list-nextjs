import React from "react";
import { signIn, signOut, auth } from "@/lib/auth";
import { LogIn } from "lucide-react";
import { syncUser } from "@/actions/user/user.action";

async function authButton() {
  const session = await auth();
  
  if(session) await syncUser();
  
  return (
    <>
      
      {!session && !session?.user ? (
        <form
          action={async () => {
            "use server";
            await signIn("github");
          }}
        >
          <div className="flex m-2 hover:cursor-pointer">
            <LogIn />
            <button type="submit">Sign in</button>
          </div>
        </form>
      ) : (
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <div className="flex mx-2 items-center gap-2">
            <img src={session?.user.image} className="rounded-full" width="25" alt="user" />
            <p className="text-sm">{session?.user.name}</p>
          </div>
          
          <div className="flex m-2 mt-4 hover:cursor-pointer gap-2">
            <LogIn className="w-5" />
            <button type="submit" className="text-sm">Log Out</button>
          </div>
        </form>
      )}
    </>
  );
}

export default authButton;
