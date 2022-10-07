import { useState } from "react";
import TopNav from "../../pages/Dashboard/TopNav";
import SideNav from "../../pages/Dashboard/Sidenav";
import { ProtectedRouteProps } from "../../models";

const NavWrapper = ({ children }: ProtectedRouteProps) => {
    const [open, setOpen] = useState<boolean>(true);

    const handleMenu = () => {
        setOpen((prevState) => !prevState);
    };

    return (
        <div className="figures-wrapper">
            <nav>
                <SideNav open={open} handleMenu={handleMenu} />
                <TopNav handleMenu={handleMenu} />
            </nav>
            <main className={open ? "main" : "main full-width"}>
                {children}
            </main>
        </div>
    );
};

export default NavWrapper;