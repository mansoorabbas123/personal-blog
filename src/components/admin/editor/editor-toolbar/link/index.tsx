"use client";
import { useCallback, useState } from "react";
import { Editor } from "@tiptap/react";
import { IoLinkOutline } from "react-icons/io5";
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@/components/admin/UI/popover";
import { Button } from "@/components/admin/UI/button";
import { LinkForm } from "./link-form";
import { GrClose } from "react-icons/gr";

interface Props {
  editor: Editor;
}

export type TLink = {
  url: string;
  _black: boolean;
};

function Link({ editor }: Props) {
  const [hover, setHover] = useState({
    name: "",
    state: false,
  });
  const [active, setActive] = useState(false);
  const [url, setUrl] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleLink = useCallback(
    (link: TLink) => {
      
      const url = link.url;

      // cancelled
      if (url === null) {
        return;
      }

      // empty
      if (url === "") {
        editor.chain().focus().extendMarkRange("link").unsetLink().run();
        return;
      }

      // update link
      editor
        .chain()
        .focus()
        .extendMarkRange("link")
        .setLink({ href: url })
        .run();
        setActive(false);
    },
    [editor]
  );

  const openModal = useCallback(() => {
    console.log(editor.chain().focus());
    setUrl(editor.getAttributes("link").href);
    setActive(true);
  }, [editor]);

  const closeModal = useCallback(() => {
    setActive(false);
    setUrl("");
  }, []);

  return (
    <Popover open={active}>
      <PopoverTrigger asChild>
        <Button
          className={`w-10 relative`} // ${ active && "bg-[#13493a] dark:bg-primary-hover"}
          onClick={() => setActive((prv) => !prv)}
          onMouseEnter={() => setHover({ name: "link", state: true })}
          // onMouseLeave={() => setHover({ name: "", state: false })}
        >
          <IoLinkOutline
            size={
              (hover.name === "link" && hover.state) ||
              editor.isActive("codeBlock")
                ? 25
                : 20
            }
            className="w-full absolute"
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="flex justify-end">
            <button onClick={() => setActive(false)}><GrClose /></button>
        </div>
        <LinkForm handleLink={handleLink} prvUrl={editor.getAttributes("link").href} />
      </PopoverContent>
    </Popover>
  );
}

export default Link;
