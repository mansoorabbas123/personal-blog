"use client";

import { BsTypeStrikethrough } from "react-icons/bs";
import { Button } from "../../UI/button";
import { useState } from "react";
import { Editor } from "@tiptap/react";
import { getFocusedEditor } from "../editor-utils";

interface Props {
  editor: Editor;
}

export function Strikethrough({ editor }: Props) {
  const [hover, setHover] = useState({
    name: "",
    state: false,
  });
  return (
    <Button
      className={`w-10 relative ${
        editor.isActive("strike") && "bg-[#13493a] dark:bg-primary-hover"
      }`}
      onClick={() => getFocusedEditor(editor).toggleStrike().run()}
      onMouseEnter={() => setHover({ name: "strike", state: true })}
      onMouseLeave={() => setHover({ name: "", state: false })}
    >
      <BsTypeStrikethrough
        size={
          (hover.name === "strike" && hover.state) || editor.isActive("strike")
            ? 25
            : 20
        }
        className="w-full absolute"
      />
    </Button>
  );
}
