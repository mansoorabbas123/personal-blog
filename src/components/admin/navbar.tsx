'use client';

import { TypographyH3 } from "./shared/typography";
import { Separator } from "./UI/separator";
import { navlinks } from "@/navlinks";
import { NavLink } from "./NavLink";

export function Navbar() {
  return (
    <div className="border md:w-60 w-auto h-screen p-2">
      <TypographyH3 className="p-3 mb-2 sm:text-md text-sm">Logo</TypographyH3>
      <Separator className="mb-3" />
      {navlinks.map((link) => (
        <NavLink key={link.label} NavLink={link} />
      ))}
    </div>
  );
}
