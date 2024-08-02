"use client";

import { Editor } from "@tiptap/react";
import DropdownOptions from "../../shared/dropdown-options";
import { AiFillCaretDown } from "react-icons/ai";
import { getFocusedEditor } from "../editor-utils";

interface Props {
  editor: Editor;
}

export function TextSize({ editor }: Props) {
  const getLabel = (): string => {
    if (editor.isActive("heading", { level: 1 })) return "Heading 1";
    if (editor.isActive("heading", { level: 2 })) return "Heading 2";
    if (editor.isActive("heading", { level: 3 })) return "Heading 3";
    return "Paragraph";
  };
  const options = [
    {
      label: "Paragraph",
      onClick: () => getFocusedEditor(editor).setParagraph().run(),
    },
    {
      label: "Heading 1",
      onClick: () => getFocusedEditor(editor).toggleHeading({ level: 1 }).run(),
    },
    {
      label: "Heading 2",
      onClick: () => getFocusedEditor(editor).toggleHeading({ level: 2 }).run(),
    },
    {
      label: "Heading 3",
      onClick: () => getFocusedEditor(editor).toggleHeading({ level: 3 }).run(),
    },
  ];
 
  return (
    <DropdownOptions
      options={options}
      head={
        <div className="flex items-center space-x-2">
          <p>{getLabel()}</p>
          <AiFillCaretDown />
        </div>
      }
    />
  );
}
