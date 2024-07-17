import { CircleUserRound } from "lucide-react";
import { ModeToggle } from "./theme-switch";

export function Header() {
    return (
        <header className="flex justify-between items-center p-3">
            <div></div>
            <div className="flex gap-4 items-center">
            <ModeToggle />
            <CircleUserRound size={40} strokeWidth={1} />
            </div>
          </header>
    )
}