"use client";

import React from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { DatePickerWithPresets } from "./calendar";
import Priority from "./Priority";
import DeleteCard from "./deleteCard";
import { updateTask } from "@/actions/todo/updateTask";
import { deleteTask } from "@/actions/todo/deleteTask";
import { XCircle } from "lucide-react";

function Details() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [todoData, setTodoData] = useState(null);
  const [isDelete, setIsDelete] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(`api/getTask/${id}`);
        if (!response.ok) {
          throw new Error("faild to fetch");
        }
        const data = await response.json();
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
  };

  const handlePriority = (prior) => {
    setTodoData({ ...todoData, priority: prior });
  };

  const handleTitle = (title) => {
    setTodoData({ ...todoData, title: title });
  };

  const handleTextArea = (text) => {
    setTodoData({ ...todoData, description: text });
  };

  const handleDelete = (id, authorId) => {
    setIsDelete(!isDelete);
    deleteTask(id, authorId);
  };

  const handleIsDelete = () => {
    setIsDelete(!isDelete);
  };

  const priority = {
    "priority 1": "bg-red-600",
    "priority 2": "bg-blue-600",
    "priority 3": "bg-yellow-500",
    "priority 4": "bg-black/50",
  };

  const router = useRouter();

  return (
    <div className="my-7 mx-7">
      {id && (
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-lg font-bold text-black/80">Details: </h2>

          <button
            type="button"
            onClick={() => {
              router.push("/"), console.log(id);
            }}
          >
            <XCircle className="text-black/70" />
          </button>
        </div>
      )}

      {id && (
        <form action="" className="flex flex-col gap-5">
          <label htmlFor="title" className="text-sm font-bold text-black/70">
            Title
            <Input
              type="text"
              id="title"
              value={todoData?.title}
              onChange={(e) => handleTitle(e.target.value)}
            />
          </label>

          <label
            htmlFor="description"
            className="text-sm font-bold text-black/70"
          >
            Description
            <Textarea
              type="text"
              id="description"
              value={todoData?.description}
              onChange={(e) => handleTextArea(e.target.value)}
            />
          </label>

          <div className="flex flex-col justify-between items-center lg:flex-row">
            <p className="text-sm font-bold text-black/50">Priority</p>
            <span className="flex flex-col gap-2 items-center lg:flex-row">
              <p
                className={`text-xs text-black/70 font-bold py-[1px] px-3 rounded-2xl ${
                  priority[todoData?.priority]
                }`}
              >
                {todoData?.priority}
              </p>
              <Priority handlePriority={handlePriority} />
            </span>
          </div>

          <div className="flex flex-col justify-between items-center lg:flex-row">
            <p className="text-sm font-bold text-black/50">Due date</p>
            <DatePickerWithPresets date={todoData?.when} setDate={handleDate} />
          </div>

          <div className="flex flex-col justify-between mt-20 gap-2 lg:flex-row">
            <Button
              variant="destructive"
              onClick={(e) => {
                e.preventDefault(), handleIsDelete();
              }}
            >
              Delete Task
            </Button>

            <Button
              onClick={(e) => {
                e.preventDefault(), updateTask(todoData);
              }}
            >
              Save Changes
            </Button>

            {isDelete && (
              <DeleteCard
                handleIsDelete={handleIsDelete}
                handleDelete={handleDelete}
                todoData={todoData}
              />
            )}
          </div>
        </form>
      )}
    </div>
  );
}

export default Details;
