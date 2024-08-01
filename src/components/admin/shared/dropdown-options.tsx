'use client'
import React, { FC, ReactNode, useState } from "react";

interface Props {
  options: {
    label: string;
    onClick(): void;
  }[];
  head: ReactNode;
}

const DropdownOptions: FC<Props> = ({ options, head }): JSX.Element => {
  const [showOptions, setOptions] = useState(false);
  return (
    <button
      className="relative border"
      onBlur={() => setOptions(false)}
      onClick={() => setOptions(!showOptions)}
    >
      {head}
      {showOptions && (
        <div className="absolute z-50 p-4 bg-white dark:bg-black ounded-md border bg-popover text-popover-foreground shadow-md">
          <ul className="flex flex-col gap-3 w-full cursor-default select-none items-center rounded-sm text-sm outline-none focus:bg-accent focus:text-accent-foreground">
            {options.map(({ label, onClick }, idx) => {
              return (
                <li key={label + idx} onClick={onClick}>
                  {label}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </button>
  );
};

export default DropdownOptions;