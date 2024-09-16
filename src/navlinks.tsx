import { Contact, Home, Inbox, Mail, Newspaper, Settings, Users } from "lucide-react";
import React from "react";
import { GrDashboard } from "react-icons/gr";
import { MdDashboard } from "react-icons/md";

export type TypeNavLink = {
  label: string;
  href: string;
  Icon: React.ReactElement;
};

export const navlinks: TypeNavLink[] = [
  {
    label: "Dashboard",
    href: "/admin/",
    Icon: <GrDashboard  size={25}/>,
  },
  {
    label: "Posts",
    href: "/admin/post",
    Icon: <Newspaper />,
  },
  {
    label: "Users",
    href: "/admin/erty",
    Icon: <Users />,
  },
  {
    label: "Comments",
    href: "/admin/abd",
    Icon: <Mail />,
  },
  {
    label: "Contacts",
    href: "/admin/gfhg",
    Icon: <Contact />,
  },
  {
    label: "Settings",
    href: "/admin/ghjh",
    Icon: <Settings />,
  },
];
