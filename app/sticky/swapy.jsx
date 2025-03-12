"use client";

import { createSwapy } from "swapy";
import { useEffect, useRef, useState, useContext } from "react";
import Loader from "./Loader";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import PopOver from "./popOver";
import { useLoading } from "./contextFile";

export default function App({ data }) {
  const { isLoading } = useLoading()
  const swapy = useRef(null);
  const container = useRef(null);

  useEffect(() => {
    // If container element is loaded
    if (container.current) {
      swapy.current = createSwapy(container.current, {
        animation: "spring"
      });

      // Your event listeners
      swapy.current.onSwap((event) => {
        console.log("swap", event);
      });
    }
    // document.body.scrollWidth = false

    return () => {
      // Destroy the swapy instance on component destroy
      swapy.current?.destroy();
    };
  }, [JSON.stringify(data)]);

  return (
    <div
    className="relative grid auto-rows-max grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 justify-items-center items-center gap-5 min-h- bg-slate-400/10 p-3 rounded-3xl"
    ref={container}
    >
      {isLoading && <Loader />}
      {data.map((note) => {
        const { id, title, content, color } = note;
        return (
          <div key={id} data-swapy-slot={id} className="rounded-xl">
            <div
              data-swapy-item={id}
              className={`relative ${color} bg-yellow-100 rounded-xl h-auto max-w-[230px]  px-2 pb-2`}
            >
              <PopOver id={id} />

              <Input
                type="text"
                defaultValue={title}
                className="bg-none border-none text-black/60 font-bold p-1"
              />
              <Textarea
                className="h-[200px] border-none shadow-none text-black/70 py-0 px-1"
                defaultValue={content}
              ></Textarea>
            </div>
          </div>
        );
      })}
      
    </div>
  );
}
