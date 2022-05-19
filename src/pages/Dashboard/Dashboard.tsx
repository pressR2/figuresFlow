import { useState } from "react";
import { useAuth } from "../../services/auth/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import menuIcon from "../../images/menu.svg";
import userStatusIcon from "../../images/user-status.svg";
import userIcon from "../../images/user.svg";
import logOutIcon from "../../images/logout.svg";
import "./Dashboard.css";

const Dashboard = () => {
    const [error, setError] = useState<string>("");
    const [open, setOpen] = useState<boolean>(false);
    const [openUserDropDown, setOpenUserDropDown] = useState<boolean>(false);
    const authContext = useAuth();
    const navigate = useNavigate();

    const handleLogOut = async () => {
        setError("");
        try {
            await authContext?.logOut();
            navigate("/signIn");
        } catch {
            setError("Fail to log out");
        }
    };

    const handleMenu = () => {
        setOpen(!open);
    };

    const handleUser = () => {
        setOpenUserDropDown(!openUserDropDown);
    };

    return (
        <div className="dashboard">
            <div className="nav-and-main_container">
                <div className="top-nav">
                    <div
                        className="drawer-control"
                        onClick={handleMenu}
                        role="button"
                    >
                        <img src={menuIcon} alt="" />
                    </div>
                    <div
                        className="user-account"
                        onClick={handleUser}
                        role="button"
                    >
                        <div className="user-status">
                            <img src={userStatusIcon} alt="" />
                        </div>
                        <div
                            className={
                                openUserDropDown
                                    ? "user-drop-down"
                                    : "user-drop-down_visible"
                            }
                        >
                            <div className="user-info">
                                <img src={userStatusIcon} alt="" />
                                <p className="user-name">
                                    {authContext?.currentUser?.email}
                                </p>
                            </div>
                            <hr></hr>
                            <div className="user-links">
                                <Link to="/#" className="user-profile">
                                    <span className="user-icon">
                                        <img src={userIcon} alt=""></img>
                                    </span>
                                    <span>Profile</span>
                                </Link>
                                {error && (
                                    <label className="invalid-feedback">
                                        {error}
                                    </label>
                                )}
                                <Link
                                    to="/#"
                                    className="user-logout"
                                    onClick={handleLogOut}
                                >
                                    <span className="user-logout-icon">
                                        <img src={logOutIcon} alt=""></img>
                                    </span>
                                    <span>Logout</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main">
                    <h2>Content</h2>
                </div>
            </div>
            <div className={open ? "menu" : "menu_visible"}>
                <div className="menu-header">
                    <h2>figuresFlow</h2>
                </div>
                <hr></hr>
                <ul className="menu-items">
                    <li>Figures</li>
                    <li>Figures 2</li>
                    <li>Figures 3</li>
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
