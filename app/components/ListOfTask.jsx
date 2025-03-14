"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import CheckTodo from "./CheckTodo";
import { AnimatePresence, motion } from "motion/react";

function ListOfTask({ list, path }) {
  // "use cache";

  return (
    <ul>
      <AnimatePresence>
        {list &&
          list?.map((todo) => (
            <motion.li
              initial={{ x: "50%", opacity: 0, scale: 0.5 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ delay: 1 }}
              exit={{ x: "-50%", opacity: 0, scale: 0.5 }}
              key={todo.id}
              className="border-b-[1px] last:border-b-0"
            >
              <div className="flex w-full cursor-pointer">
                <CheckTodo todo={todo} />
                <Link
                  href={{
                    pathname: path,
                    query: {
                      id: todo.id,
                      authorId: todo.authorId,
                    },
                  }}
                  className={`dark:text-white/60 dark:hover:bg-white/10 flex w-full h-10 gap-2 p-2 justify-between items-center font-semibold text-black/50 ${
                    todo.completed ? "line-through" : null
                  } active:scale-95 transition-transform ease-out duration-200
                  hover:bg-black/5 transition-color`}
                >
                  <p>{todo.title}</p>
                  <span className="flex items-center">
                    <p className="dark:text-white/60 text-xs font-thin text-black/40">
                      {todo.when ? todo.when : ""}
                    </p>
                    <ChevronRight className="text-black/50 dark:text-white/60" />
                  </span>
                </Link>
              </div>
            </motion.li>
          ))}
      </AnimatePresence>
    </ul>
  );
}

export default ListOfTask;
