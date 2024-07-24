"use client";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css"; // Add css for snow theme
import { EditorToolbar } from "./editor-toolbar";

interface Props {}

export function Editor({}: Props) {
  const { quill, quillRef } = useQuill({
    modules: {
      toolbar: [[{ header: [1, 2, 3, 4, 5, 6, false] }], ["clean"]],
    },
    formats: ["size", "bold", "header"], // Important
  });
  //   console.log(quill); // undefined > Quill Object
  //   console.log(quillRef); // { current: undefined } > { current: Quill Editor Reference }

  return (
    <div className="px-10 ">
      <EditorToolbar />
      <div ref={quillRef} className="w-full" />
    </div>
  );
}
