"use client";

import React, { useState } from "react";
import AddTaskCard from "./AddTaskCard";
import { PlusCircle } from "lucide-react";
import { AnimatePresence } from "framer-motion";

function MainPage({ pageProps, children }) {
  const [addTask, setAddTask] = useState(false);
  const handleClick = (e) => {
    setAddTask((prev) => e);
  };

  return (
    <>
      <div className=" my-7 col-span-2 relative ">
        <h1 className="text-2xl font-bold">All Task</h1>

        <div className="w-full flex flex-col ">
          <button
            className="flex gap-2 w-full border-[1px] rounded-md text-left my-2 p-2 text-gray-400 hover:bg-gray-100"
            onClick={() => handleClick(true)}
          >
            <PlusCircle color="lightgray" />
            <span>Add New Task</span>
          </button>
        </div>

        <AnimatePresence>
          {addTask && <AddTaskCard handleClick={handleClick} />}
        </AnimatePresence>

        {children}
      </div>
    </>
  );
}

export default MainPage;
