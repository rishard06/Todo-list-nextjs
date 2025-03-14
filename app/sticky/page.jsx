import React from "react";
import { LoadingProvider } from "./contextFile";
import { NotesLoadingProvider } from "./contextFile";
import { getNotes } from "@/lib/dbFetch/notes";
import AddNotes from "./addNotes";
import Swapy from "./swapy";

async function page() {
  const data = await getNotes();

  return (
    <LoadingProvider>
        <div className="relative w-full h-screen p-7 overflow-x-hidden">
          <div className="flex flex-row justify-between mb-5">
            <h1 className="text-2xl font-bold my-2">Sticky Notes</h1>

            <AddNotes />
          </div>
          {/* <Draggable containerRef={containerRef} /> */}
          <Swapy data={data} />

          <div className="absolute right-7 bottom-4">
            <div className="text-xs text-center text-white/50 justify-between">
              Ctrl Z - <span>Undo</span>
            </div>
            <div className="text-xs text-center text-white/50 justify-between">
              Ctrl Y - <span>Redo</span>
            </div>
          </div>
        </div>
    </LoadingProvider>
  );
}

export default page;
