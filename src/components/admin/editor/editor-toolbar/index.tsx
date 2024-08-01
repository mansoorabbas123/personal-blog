"use client";

import { Editor } from "@tiptap/react";
import { Bold } from "./bold";
import { TextSize } from "./text-size";

interface Props {
  editor: Editor;
}

function EditorToolbar({ editor }: Props) {
  return (
    <div className="flex gap-4">
      {/* select text type */}
      <TextSize editor={editor} />
      {/* seperator  */}
      <div className="w-[2px] h-full bg-black self-stretch"></div>
      {/* text bold  */}
      <Bold editor={editor} />
    </div>
  );
}

export default EditorToolbar;
