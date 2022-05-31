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
        <div className="dashboard-wrapper">
            <div className="nav-and-main">
                <TopNav handleMenu={handleMenu} />
                <div className="dashboard">
                    <h2>Dashboard</h2>
                </div>
            </div>
            <Sidenav open={open} handleMenu={handleMenu} />
        </div>
    );
};

export default Dashboard;
