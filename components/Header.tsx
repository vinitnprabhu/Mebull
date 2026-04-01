import Link from "next/link";
import NavItems from "./Navitems";
import MenuDropdown from "./MenuDropdown";

const Header = () => {
  return (
    <header className="sticky top-0 header">
        <div className="container header-wrapper">
            <Link href="/">
            
            </Link>
            <nav className="hidden sm:block">
                <NavItems />
            </nav>
            <MenuDropdown />
        </div>
    </header>
  );
};

export default Header;