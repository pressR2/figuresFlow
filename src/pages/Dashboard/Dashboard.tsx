import { useState } from "react";
import Sidenav from "./Sidenav";
import TopNav from "./TopNav";
import "./Dashboard.css";

const Dashboard = () => {
    const [open, setOpen] = useState<boolean>(false);

    const handleMenu = () => {
        setOpen(!open);
    };

    return (
        <div className="dashboard">
            <TopNav handleMenu={handleMenu} />
            <Sidenav open={open} />
        </div>
    );
};

export default Dashboard;
