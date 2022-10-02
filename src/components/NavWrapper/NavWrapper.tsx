import { useState } from "react";
import TopNav from "../../pages/Dashboard/TopNav";
import Sidenav from "../../pages/Dashboard/Sidenav";

const NavWrapper = (props: any) => {
    const [open, setOpen] = useState<boolean>(true);

    const handleMenu = () => {
        setOpen((prevState) => !prevState);
    };

    return (
        <div className="figures-wrapper">
            <nav>
                <Sidenav open={open} handleMenu={handleMenu} />
                <TopNav handleMenu={handleMenu} />
            </nav>
            <main className={open ? "main" : "main full-width"}>
                {props.children}
            </main>
        </div>
    );
};

export default NavWrapper;