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

function DeleteCard({ handleIsDelete, handleDelete, todoData, path }) {
  const router = useRouter();

  const priority = {
    "priority 1": "bg-red-600",
    "priority 2": "bg-blue-600",
    "priority 3": "bg-yellow-500",
    "priority 4": "bg-black/50",
  };

  return (
    <div className="fixed inset-0 z-20 flex justify-center items-center bg-black/35">
      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle>Are you sure you want to Delete this Task?</CardTitle>
          
          <div className="flex justify-center items-center gap-2">
            <div className={`w-2 h-2 rounded-full shadow-2xl ${priority[todoData?.priority]}`}></div>
            <p className="font-bold text-black/60 dark:text-white/60">{todoData?.title}</p>
          </div>
        </CardHeader>

        <CardFooter className="flex justify-between">
          <Button variant="ghost" onClick={(e) => {e.preventDefault(), handleIsDelete()}}>Cancel</Button>
          <Button variant="destructive" onClick={(e) => {e.preventDefault(), handleDelete(todoData.id, todoData.authorId), router.push(path)}}>Delete</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default DeleteCard;
