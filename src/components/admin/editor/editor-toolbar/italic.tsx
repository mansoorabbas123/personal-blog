"use client";

import { BsTypeItalic } from "react-icons/bs";
import { Button } from "../../UI/button";
import { useState } from "react";
import { Editor } from "@tiptap/react";
import { getFocusedEditor } from "../editor-utils";

interface Props {
  editor: Editor;
}

export function Italic({ editor }: Props) {
  const [hover, setHover] = useState({
    name: "",
    state: false,
  });
  return (
    <Button
      className={`w-10 relative ${
        editor.isActive("italic") && "bg-[#13493a] dark:bg-primary-hover"
      }`}
      onClick={() => getFocusedEditor(editor).toggleItalic().run()}
      onMouseEnter={() => setHover({ name: "italic", state: true })}
      onMouseLeave={() => setHover({ name: "", state: false })}
    >
      <BsTypeItalic
        size={
          (hover.name === "italic" && hover.state) || editor.isActive("italic")
            ? 25
            : 20
        }
        className="w-full absolute"
      />
    </Button>
  );
}
