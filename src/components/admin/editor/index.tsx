"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Heading, Link } from "./tiptap-custom-extensions/extend";
import { useEffect } from "react";
import { Separator } from "../UI/separator";
import EditorToolbar from "./editor-toolbar";
import Underline from "@tiptap/extension-underline";
import Blockquote from "@tiptap/extension-blockquote";
import Placeholder from "@tiptap/extension-placeholder";
import CodeBlock from "@tiptap/extension-code-block";

const Editor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Heading,
      Underline,
      Blockquote,
      Placeholder.configure({
        placeholder: "Type someting",
      }),
      CodeBlock.configure({
        HTMLAttributes: {
          class: "dark:bg-[#fff] dark:text-[#000]",
        },
      }),
      Link.configure({
        openOnClick: false,
        autolink: true,
        defaultProtocol: 'https',
        HTMLAttributes: {
          class: 'text-blue',
        },
      }),
    ],
    editorProps: {
      attributes: {
        class:
          "prose prose-lg focus:outline-none dark:prose-invert mx-auto h-full",
      },
    },
  });

  useEffect(() => {
    // editor?.commands.setContent("<blockquote>hello champ</blockquote>");
  }, [editor]);

  return (
    <div className="lg:w-[60%] w-[80%] mx-auto ">
      {editor && <EditorToolbar editor={editor} />}
      <Separator className="my-4 dark:bg-[#fff]" />
      {editor && <EditorContent editor={editor} className="" />}
    </div>
  );
};

export default Editor;
