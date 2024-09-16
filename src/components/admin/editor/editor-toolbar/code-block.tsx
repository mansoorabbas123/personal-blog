"use client";

import { Button } from "../../UI/button";
import { useState } from "react";
import { Editor } from "@tiptap/react";
import { getFocusedEditor } from "../editor-utils";
import { TbCodeDots } from "react-icons/tb";

interface Props {
  editor: Editor;
}

export function CodeBlock({ editor }: Props) {
  const [hover, setHover] = useState({
    name: "",
    state: false,
  });
  return (
    <Button
      className={`w-10 relative ${
        editor.isActive("codeBlock") && "bg-[#13493a] dark:bg-primary-hover"
      }`}
      onClick={() => getFocusedEditor(editor).toggleCodeBlock().run()}
      onMouseEnter={() => setHover({ name: "codeBlock", state: true })}
      onMouseLeave={() => setHover({ name: "", state: false })}
    >
      <TbCodeDots
        size={
          (hover.name === "codeBlock" && hover.state) ||
          editor.isActive("codeBlock")
            ? 25
            : 20
        }
        className="w-full absolute"
      />
    </Button>
  );
}
