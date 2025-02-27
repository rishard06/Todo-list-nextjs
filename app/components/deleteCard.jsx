"use client"

import React from "react";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

function DeleteCard({ handleIsDelete, handleDelete, todoData }) {
  const router = useRouter();

  return (
    <div className="fixed inset-0 z-20 flex justify-center items-center bg-black/35">
      <Card className="">
        <CardHeader>
          <CardTitle>Are you sure you want to Delete this Task?</CardTitle>
        </CardHeader>

        <CardFooter className="flex justify-between">
          <Button variant="ghost" onClick={(e) => {e.preventDefault(), handleIsDelete()}}>Cancel</Button>
          <Button variant="destructive" onClick={(e) => {e.preventDefault(), handleDelete(todoData.id, todoData.authorId), router.push("/")}}>Delete</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default DeleteCard;
