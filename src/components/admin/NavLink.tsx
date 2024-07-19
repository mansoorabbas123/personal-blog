import { TypeNavLink } from "@/navlinks";
import { Home } from "lucide-react";
import Link from "next/link";
import React from "react";

interface Props {
  NavLink: TypeNavLink;
}

export const NavLink = ({ NavLink }: Props) => {
  return (
    <Link
      href={NavLink.href}
      className="flex gap-2 sm:justify-start justify-center items-center hover:cursor-pointer dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white p-3 rounded-md"
    >
      {NavLink.Icon} <span className="sm:block hidden">{NavLink.label}</span>
    </Link>
  );
};
