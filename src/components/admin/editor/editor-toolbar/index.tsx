"use client";

import { Editor } from "@tiptap/react";
import { Bold } from "./bold";
import { TextSize } from "./text-size";
import { Italic } from "./italic";
import { Underline } from "./underline";
import { Strikethrough } from "./strike-through";
import { BlockQuote } from "./block-quote";

interface Props {
  editor: Editor;
}

function EditorToolbar({ editor }: Props) {
  return (
    <div className="flex gap-4 items-center">
      {/* select text type */}
      <TextSize editor={editor} />
      {/* seperator  */}
      <div className="border-l-black border-l-[1px] h-4 mx-3"></div>
      {/* text bold  */}
      <Bold editor={editor} />
      {/* text italic  */}
      <Italic editor={editor} />
      {/* text underline  */}
      <Underline editor={editor} />
      {/* text strike through  */}
      <Strikethrough editor={editor} />
      <div className="border-l-black border-l-[1px] h-4 mx-3"></div>
      {/* text strike through  */}
      <BlockQuote editor={editor} />

    </div>
  );
}

export default EditorToolbar;
