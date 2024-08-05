"use client";

import { BsTypeUnderline } from "react-icons/bs";
import { Button } from "../../UI/button";
import { useState } from "react";
import { Editor } from "@tiptap/react";
import { getFocusedEditor } from "../editor-utils";

interface Props {
  editor: Editor;
}

export function Underline({ editor }: Props) {
  const [hover, setHover] = useState({
    name: "",
    state: false,
  });
  return (
    <Button
      className={`w-10 relative ${
        editor.isActive("underline") && "bg-[#13493a] dark:bg-primary-hover"
      }`}
      onClick={() => getFocusedEditor(editor).toggleUnderline().run()}
      onMouseEnter={() => setHover({ name: "underline", state: true })}
      onMouseLeave={() => setHover({ name: "", state: false })}
    >
      <BsTypeUnderline
        size={
          (hover.name === "underline" && hover.state) || editor.isActive("underline")
            ? 25
            : 20
        }
        className="w-full absolute"
      />
    </Button>
  );
}
