import Link from "next/link";
import Image from "next/image";
import MenuDropdown from "./MenuDropdown";
import NavItems from "./Navitems";
import {searchStocks} from "@/lib/actions/finnhub.actions";

const Header = async ({ user }: { user: User }) => {
    const initialStocks = await searchStocks();

    return (
        <header className="sticky top-0 header">
            <div className="container header-wrapper">
                <Link href="/">
                    <Image src="/assets/icons/logo.png" alt="Mebull logo" width={500} height={32} className="h-10 w-35 cursor-pointer" />
                </Link>
                <nav className="hidden sm:block">
                    <NavItems initialStocks={initialStocks} />
                </nav>
                <MenuDropdown user={user} initialStocks={initialStocks} />
            </div>
        </header>
    )
}
export default Header