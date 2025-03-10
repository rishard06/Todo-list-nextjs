import React from "react";
import { Button } from "@/components/ui/button";
import { LoadingProvider } from "./contextFile";
import { getNotes } from "@/lib/dbFetch/notes";
import AddNotes from "./addNotes";
import Swapy from "./swapy";

async function page() {
  const data = await getNotes();

  return (
    <LoadingProvider>
      <div className="w-full h-screen m-7">
        <div className="flex flex-row justify-between mb-5">
          <h1 className="text-2xl font-bold my-2">Sticky Notes</h1>

          <AddNotes />
        </div>
        {/* <Draggable containerRef={containerRef} /> */}
        <Swapy data={data} />
      </div>
    </LoadingProvider>
  );
}

export default page;
