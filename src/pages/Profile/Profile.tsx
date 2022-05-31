import { useAuth } from "../../services/auth/AuthContext";
import TopNav from "../Dashboard/TopNav";
import Sidenav from "../Dashboard/Sidenav";
import { useState } from "react";
import "./Profile.css";

const Profile = () => {
    const [open, setOpen] = useState<boolean>(false);
    const authContext = useAuth();

    const handleMenu = () => {
        setOpen(!open);
    };

    return (
        <div className="profile-wrapper">
            <div className="nav-and-main">
                <TopNav handleMenu={handleMenu} />
                <div className="profile">
                    <h2>Profile</h2>
                    <p className="loggedin-user">
                        <span>Email: </span>
                        {authContext?.currentUser?.email}
                    </p>
                </div>
            </div>
            <Sidenav open={open} handleMenu={handleMenu} />
        </div>
    );
};

export default Profile;
