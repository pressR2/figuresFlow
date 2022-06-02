import { useState } from "react";
import TopNav from "../../pages/Dashboard/TopNav";
import Sidenav from "../../pages/Dashboard/Sidenav";

const NavWrapper = (props: any) => {
    const [open, setOpen] = useState<boolean>(true);

    const handleMenu = () => {
        setOpen(prevState => !prevState);
    };

    return (
        <div className="figures-wrapper">
            <div className="nav-and-main">
                <TopNav handleMenu={handleMenu} />
                {props.children}
            </div>
            <Sidenav open={open} handleMenu={handleMenu} />
        </div>
    );
};

export default NavWrapper;