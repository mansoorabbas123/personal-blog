import { Home, Newspaper, Settings, Users } from "lucide-react";
import { TypographyH3 } from "./shared/typography";
import { Separator } from "./UI/separator";
import Link from "next/link";

export function Navbar() {
    return (
        <div className="border w-60 h-screen p-2">
        <TypographyH3 className="p-3 mb-2">Logo</TypographyH3>
        <Separator className="mb-3" />
        <div className="flex gap-2 items-center hover:cursor-pointer hover:bg-black hover:text-white p-3 rounded-md">
          <Home /> <span className="block">Home</span>
        </div>
        <Link href='/admin/post' className="flex gap-2 items-center hover:cursor-pointer hover:bg-black hover:text-white p-3 rounded-md">
          <Newspaper /> <span className="block">Posts</span>
        </Link>
        <div className="flex gap-2 items-center hover:cursor-pointer hover:bg-black hover:text-white p-3 rounded-md">
          <Users /> <span className="block">Users</span>
        </div>
        <div className="flex gap-2 items-center hover:cursor-pointer hover:bg-black hover:text-white p-3 rounded-md">
          <Settings /> <span className="block">Settings</span>
        </div>
      </div>
    )
}