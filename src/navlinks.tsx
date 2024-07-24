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
    href: "/admin/",
    Icon: <Home />,
  },
  {
    label: "Posts",
    href: "/admin/post",
    Icon: <Newspaper />,
  },
  {
    label: "Users",
    href: "/admin/",
    Icon: <Users />,
  },
  {
    label: "Settings",
    href: "/admin/",
    Icon: <Settings />,
  },
];
