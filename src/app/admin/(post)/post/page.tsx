'use client'
import { CirclePlus } from "lucide-react";
import Link from "next/link";

export default function Post() {
    return (
        <div>
            <p>Post page</p>
            <Link href='/admin/create-post' className="absolute bottom-10 right-10">
                <div className="bg-white rounded-full opacity-80">
                    <CirclePlus className="w-16 h-16 hover:w-20 hover:h-20 hover:cursor-pointer transition-all duration-75 text-primary"/>
                </div>
            </Link>
        </div>
    )
}