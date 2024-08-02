"use client";

import { BsTypeBold } from "react-icons/bs";
import { Button } from "../../UI/button";
import { useState } from "react";
import { Editor } from "@tiptap/react";

interface Props {
  editor: Editor;
}

export function Bold({ editor }: Props) {
  const [hover, setHover] = useState({
    name: "",
    state: false,
  });
  return (
    <Button
      className="w-10 relative"
      onClick={() => editor.commands.setContent("<h2>Hello World!</h2>")}
      onMouseEnter={() => setHover({ name: "bold", state: true })}
      onMouseLeave={() => setHover({ name: "", state: false })}
    >
      <BsTypeBold
        size={hover.name === "bold" && hover.state ? 25 : 20}
        className="w-full absolute"
      />
    </Button>
  );
}
