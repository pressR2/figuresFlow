import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../services/auth/AuthContext";
import userStatusIcon from "../../images/user-status.svg";
import userIcon from "../../images/user.svg";
import logOutIcon from "../../images/logout.svg";

const UserAccount = () => {
    const [error, setError] = useState<string>("");
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

    const handleUser = () => {
        setOpenUserDropDown(!openUserDropDown);
    };

    return (
        <div className="user-account" onClick={handleUser} role="button">
            <div className="user-status">
                <img src={userStatusIcon} alt="" />
            </div>
            <div
                className={
                    openUserDropDown ? "user-drop-down" : "user-drop-down hide"
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
                        <label className="invalid-feedback">{error}</label>
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
    );
};

export default UserAccount;
