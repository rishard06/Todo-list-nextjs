"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

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
    <div>
      Hello
      <p>{todoData.title}</p>
    </div>
  );
}

export default Details;
