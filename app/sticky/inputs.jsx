import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Update from "./update";
import { useNotesLoading } from "./contextFile";

export default function Inputs({ note }) {
  const [inputs, setInputs] = useState({
    input: note.title,
    textarea: note.content,
  });
  const { isLoading } = useNotesLoading();

  const handleInput = (e) => {
    setInputs({
      ...inputs,
      input: e.target.value,
    });
  };

  const handleTextArea = (e) => {
    setInputs({
      ...inputs,
      textarea: e.target.value,
    });
  };

  return (
    <>
      <Input
        type="text"
        value={inputs.input}
        onChange={handleInput}
        className="bg-none border-none text-black/60 font-bold p-1"
      />
      <Textarea
        value={inputs.textarea}
        onChange={handleTextArea}
        className="h-[200px] border-none shadow-none text-black/70 py-0 px-1"
      ></Textarea>

      {isLoading(note.id) && (
        <div className="absolute left-24 top-20 w-5 h-5 border-2 border-blue-300 border-t-transparent rounded-full animate-spinning"></div>
      )}

      {inputs.input !== note.title || inputs.textarea !== note.content ? (
        <Update input={inputs.input} textarea={inputs.textarea} id={note.id} />
      ) : null}
    </>
  );
}
