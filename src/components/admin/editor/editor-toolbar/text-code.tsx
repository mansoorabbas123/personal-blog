"use client";

import { Button } from "../../UI/button";
import { useState } from "react";
import { Editor } from "@tiptap/react";
import { getFocusedEditor } from "../editor-utils";
import { IoIosCode } from "react-icons/io";

interface Props {
  editor: Editor;
}

export function TextCode({ editor }: Props) {
  const [hover, setHover] = useState({
    name: "",
    state: false,
  });
  return (
    <Button
      className={`w-10 relative ${
        editor.isActive("code") && "bg-[#13493a] dark:bg-primary-hover"
      }`}
      onClick={() => getFocusedEditor(editor).toggleCode().run()}
      onMouseEnter={() => setHover({ name: "code", state: true })}
      onMouseLeave={() => setHover({ name: "", state: false })}
    >
      <IoIosCode
        size={
          (hover.name === "code" && hover.state) || editor.isActive("code")
            ? 25
            : 20
        }
        className="w-full absolute"
      />
    </Button>
  );
}
