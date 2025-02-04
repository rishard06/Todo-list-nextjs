"use client"

import React, { useState } from "react";
import AddTaskCard from "./AddTaskCard";
import { Checkbox } from "@/components/ui/checkbox";

function MainPage() {
  const [addTask, setAddTask] = useState(false);
  const handleClick = () => {
    setAddTask((prev) => !prev);
  };

  return (
    <>
      <div className="mx-16 my-7 col-span-2">
        <h1 className="text-2xl font-bold">Today</h1>

        <div className="w-full flex flex-col ">
          <button className="w-full border-[1px] rounded-md text-left my-2 p-2 text-gray-400 "
            onClick={handleClick}
          >
            + Add New Task
          </button>
        </div>

        {addTask && <AddTaskCard />}
      </div>
    </>
  );
}

export default MainPage;
