"use client";

import React, { useContext } from "react";
import { useLoading } from "./contextFile";
import { addNote } from "@/actions/note/addNote";
import { Button } from "@/components/ui/button";

function  addNotes() {
  const { setIsLoading } = useLoading();
  
  const handleClick = async () => {
    setIsLoading(true)
    await addNote("Title", "Contents...")
    setIsLoading(false)
  }

  return (
    <Button
      className=""
      variant="outline"
      onClick={handleClick}
    >
      Add a Note
    </Button>
  );
}

export default addNotes;
