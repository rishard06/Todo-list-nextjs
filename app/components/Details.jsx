"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { DatePickerWithPresets } from "./calendar";
import Priority from "./Priority";

function Details() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [todoData, setTodoData] = useState(null);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(`api/getTask/${id}`);
        if (!response.ok) {
          throw new Error("faild to fetch");
        }
        const data = await response.json();
        console.log(data);
        setTodoData(data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    }

    if (id) {
      getData();
    }
  }, [id]);

  const handleDate = (date) => {
    setTodoData({ ...todoData, when: date });
    console.log(todoData)
  };

  return (
    <div className="my-7 mx-7">
      <h2 className="text-lg font-bold text-black/80 mb-5">Details: </h2>

      {id && (
        <form action="" className="flex flex-col gap-5">
          <label htmlFor="title" className="text-sm font-bold text-black/70">
            Title
            <Input type="text" id="title" value={todoData?.title} />
          </label>

          <label htmlFor="description" className="text-sm font-bold text-black/70">
            Description
            <Textarea type="text" id="description" value={todoData?.description} />
          </label>

          <div className="flex justify-between items-center">
            <p className="text-sm font-bold text-black/50">Priority</p>
            <span className="flex gap-2 items-center">
              <p className="text-xs text-black/70 font-bold bg-blue-600 py-[1px] px-3 rounded-2xl">{todoData?.priority}</p>
              <Priority priority={todoData?.priority} />
            </span>
          </div>

          <div className="flex justify-between">
            <p className="text-sm font-bold text-black/50">Due date</p>
            <DatePickerWithPresets date={todoData?.when} setDate={handleDate} />
          </div>

          <div className="flex justify-between mt-20">
            <Button variant="destructive">Delete Task</Button>
            <Button>Save Changes</Button>
          </div>
        </form>
      )}
    </div>
  );
}

export default Details;
