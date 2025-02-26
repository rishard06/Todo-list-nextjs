"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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

  return (
    <div className="my-7 mx-7">
      <h2>Details: </h2>

      <form action="">
        <Input type="text" value={todoData?.title} />

        <Textarea type="text" value={todoData?.description} />

        <Input type="text" />
      </form>
    </div>
  );
}

export default Details;
