"use client"

import React, { useState } from "react";
import AddTaskCard from "./AddTaskCard";
import { PlusCircle } from "lucide-react";

function MainPage({ pageProps, children }) {
  const [addTask, setAddTask] = useState(false);
  const handleClick = (e) => {
    setAddTask((prev) => e);
    console.log(pageProps)
  };

  return (
    <>
      <div className="mx-16 my-7 col-span-2">
        <h1 className="text-2xl font-bold">Today</h1>

        <div className="w-full flex flex-col ">
          <button className="flex gap-2 w-full border-[1px] rounded-md text-left my-2 p-2 text-gray-400 hover:bg-gray-100"
          onClick={() => handleClick(true)}>
            <PlusCircle color="lightgray"/>
            <span>Add New Task</span>
          </button>
        </div>

        {addTask && <AddTaskCard handleClick={handleClick} />}

        {children}
      </div>
    </>
  );
}

export default MainPage;
