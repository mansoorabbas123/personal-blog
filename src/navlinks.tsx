import { Home, Newspaper, Settings, Users } from "lucide-react";
import React from "react";

export type TypeNavLink = {
  label: string;
  href: string;
  Icon: React.ReactElement;
};

export const navlinks: TypeNavLink[] = [
  {
    label: "Home",
    href: "/",
    Icon: <Home />,
  },
  {
    label: "Posts",
    href: "/post",
    Icon: <Newspaper />,
  },
  {
    label: "Users",
    href: "/",
    Icon: <Users />,
  },
  {
    label: "Settings",
    href: "/",
    Icon: <Settings />,
  },
];
