import { useState } from "react";
import TopNav from "../../pages/Dashboard/TopNav";
import SideNav from "../../pages/Dashboard/Sidenav";
import { NavWrapperProps } from "../../models";

const NavWrapper = ({ children }: NavWrapperProps) => {
    const [open, setOpen] = useState<boolean>(true);

    const handleMenuToggle = () => {
        setOpen((prevState) => !prevState);
    };

    return (
        <div className="figures-wrapper">
            <nav>
                <SideNav open={open} handleMenuToggle={handleMenuToggle} />
                <TopNav handleMenuToggle={handleMenuToggle} />
            </nav>
            <main className={open ? "main" : "main full-width"}>
                {children}
            </main>
        </div>
    );
};

export default NavWrapper;