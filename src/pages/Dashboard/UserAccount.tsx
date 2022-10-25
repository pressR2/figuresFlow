import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../services/auth/AuthContext";
import userStatusIcon from "../../images/user-img.svg";
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
        setOpenUserDropDown((prevState) => !prevState);
    };

    return (
        <details>
            <summary
                className="user-account"
                onClick={handleUser}
                role="button"
            >
                <div className="user-status">
                    <img src={userStatusIcon} alt="user image" />
                </div>
                <span className="dropdown-caret"></span>
            </summary>
            <menu
                className={
                    openUserDropDown ? "drop-down-menu" : "drop-down-menu hide"
                }
            >
                <div className="current-user">
                    <img src={userStatusIcon} alt="" />
                    <strong>{authContext?.currentUser?.email}</strong>
                </div>
                <ul className="drop-down-items">
                    <Link to="/profile" className="drop-down-item">
                        <span className="user-icon">
                            <img src={userIcon} alt="" />
                        </span>
                        <span>Profile</span>
                    </Link>
                    {error && <label className="invalid-logout">{error}</label>}
                    <Link
                        to="/#"
                        className="drop-down-item"
                        onClick={handleLogOut}
                    >
                        <span className="user-logout-icon">
                            <img src={logOutIcon} alt="" />
                        </span>
                        <span>Logout</span>
                    </Link>
                </ul>
            </menu>
        </details>
    );
};

export default UserAccount;