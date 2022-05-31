import TopNav from "../Dashboard/TopNav";
import Sidenav from "../Dashboard/Sidenav";
import { useState } from "react";
import "./Figures.css";

const Figures2 = () => {
    const [open, setOpen] = useState<boolean>(false);

    const handleMenu = () => {
        setOpen(!open);
    };

    return (
        <div className="figures-wrapper">
            <div className="nav-and-main">
                <TopNav handleMenu={handleMenu} />
                <div className="figures">
                    <h2>Figures 2</h2>
                </div>
            </div>
            <Sidenav open={open} handleMenu={handleMenu} />
        </div>
    );
};

export default Figures2;
