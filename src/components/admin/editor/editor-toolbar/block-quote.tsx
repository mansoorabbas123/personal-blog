"use client";

import { RiDoubleQuotesL } from "react-icons/ri";
import { Button } from "../../UI/button";
import { useState } from "react";
import { Editor } from "@tiptap/react";
import { getFocusedEditor } from "../editor-utils";

interface Props {
  editor: Editor;
}

export function BlockQuote({ editor }: Props) {
  const [hover, setHover] = useState({
    name: "",
    state: false,
  });
  
  return (
    <Button
      className={`w-10 relative ${
        editor.isActive("blockquote") && "bg-[#13493a] dark:bg-primary-hover"
      }`}
      onClick={() => getFocusedEditor(editor).toggleBlockquote().run()}
      onMouseEnter={() => setHover({ name: "blockquote", state: true })}
      onMouseLeave={() => setHover({ name: "", state: false })}
    >
      <RiDoubleQuotesL
        size={
          (hover.name === "blockquote" && hover.state) || editor.isActive("blockquote")
            ? 25
            : 20
        }
        className="w-full absolute"
      />
    </Button>
  );
}
