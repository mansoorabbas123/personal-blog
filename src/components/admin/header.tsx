import { CircleUserRound } from "lucide-react";

export function Header() {
    return (
        <header className="flex justify-between items-center p-3">
            <div></div>
            <CircleUserRound size={40} strokeWidth={1} />
          </header>
    )
}