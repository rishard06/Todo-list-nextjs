"use client";

import React, { useContext } from "react";
import { useLoading } from "./contextFile";
import { addNote } from "@/actions/note/addNote";
import { Button } from "@/components/ui/button";

function  addNotes() {
  const { setIsLoading } = useLoading();
  
  const handleClick = async () => {
    setIsLoading(true)
    try{
      await addNote("Title", "Contents...")
    } finally {
      setTimeout(() => {
        setIsLoading(false)
      }, 500);
    };
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
