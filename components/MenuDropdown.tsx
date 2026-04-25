'use client';

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import NavItems from "./Navitems";
import { signOut } from "@/lib/actions/auth.actions";

const MenuDropdown = ({ user, initialStocks }: { user: User, initialStocks: StockWithWatchlistStatus[] }) => {
    const router = useRouter();

    const handleSignOut = async () => {
        await signOut();
        router.push("/sign-in");
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-3 text-gray-400 hover:text-yellow-500">
                    <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-yellow-500 text-black text-sm font-bold">
                            {user.name[0]}
                        </AvatarFallback>
                    </Avatar>
                    <div className="hidden md:flex flex-col items-start">
                        <span className="text-base font-medium text-gray-400">
                            {user.name}
                        </span>
                    </div>
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-64 min-w-[16rem] text-gray-400 p-2">
                <DropdownMenuLabel className="p-0">
                    <div className="flex items-center gap-3 px-2 py-3">
                        <Avatar className="h-10 w-10 shrink-0">
                            <AvatarFallback className="bg-yellow-500 text-yellow-900 text-sm font-bold">
                                {user.name[0]}
                            </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col min-w-0">
                            <span className="text-base font-medium text-gray-400 truncate">
                                {user.name}
                            </span>
                            <span className="text-sm text-gray-500 truncate">{user.email}</span>
                        </div>
                    </div>
                </DropdownMenuLabel>

                <DropdownMenuSeparator className="bg-gray-600 my-1" />

                <DropdownMenuItem
                    onClick={handleSignOut}
                    className="flex items-center gap-2 px-2 py-2 text-sm font-medium text-gray-100 focus:bg-transparent focus:text-yellow-500 transition-colors cursor-pointer rounded-md"
                >
                    <LogOut className="h-4 w-4 shrink-0 hidden sm:block" />
                    Logout
                </DropdownMenuItem>

                <DropdownMenuSeparator className="hidden sm:block bg-gray-600 my-1" />

                <nav className="sm:hidden">
                    <NavItems initialStocks={initialStocks} />
                </nav>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default MenuDropdown;