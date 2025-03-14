"use client";

import { createSwapy } from "swapy";
import { useEffect, useRef, useState, useContext } from "react";
import Loader from "./Loader";
import Inputs from "./inputs";
import PopOver from "./popOver";
import { useLoading } from "./contextFile";
import { NotesLoadingProvider } from "./contextFile";
import { motion, AnimatePresence } from "motion/react";

export default function App({ data }) {
  const { isLoading } = useLoading();
  const swapy = useRef(null);
  const container = useRef(null);

  useEffect(() => {
    // If container element is loaded
    if (container.current) {
      swapy.current = createSwapy(container.current, {
        animation: "spring",
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
      className="relative z-0 grid auto-rows-max grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 justify-items-center items-center gap-5 min-h- bg-slate-400/10 p-3 rounded-3xl"
      ref={container}
    >
      {isLoading && <Loader />}

      <AnimatePresence>
        {Array.isArray(data) && data.length
          ? data?.map((note) => {
              const { id, title, content, color, done } = note;
              return (
                <motion.div
                  
                  initial={{ x: "50%", opacity: 0, scale: 0.5 }}
                  animate={{ x: 0, opacity: 1, scale: 1 }}
                  transition={{ delay: 1 }}
                  exit={{ x: "-50%", opacity: 0, scale: 0.5 }}
                  key={id}
                  data-swapy-slot={id}
                  className={`rounded-xl border-4 ${
                    done ? "border-green-400" : "border-slate-500"
                  }`}
                >
                  <div
                    data-swapy-item={id}
                    className={`relative ${
                      color || "bg-yellow-100"
                    } rounded-lg h-auto max-w-[230px]  px-2 pb-2`}
                  >
                    <NotesLoadingProvider>
                      <PopOver id={id} />

                      <Inputs note={note} />
                    </NotesLoadingProvider>
                  </div>
                </motion.div>
              );
            })
          : null}
      </AnimatePresence>
    </div>
  );
}
