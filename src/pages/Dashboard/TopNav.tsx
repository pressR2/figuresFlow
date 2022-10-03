import UserAccount from "./UserAccount";
import { TopNavProps } from "../../models";
import menuIcon from "../../images/menu.svg";

const TopNav = ({ handleMenu }: TopNavProps) => {
    return (
        <nav className="top-nav">
            <button
                className="drawer-control"
                onClick={handleMenu}
                type="button"
            >
                <img src={menuIcon} alt="hamburger menu button" />
            </button>
            <UserAccount />
        </nav>
    );
};

export default TopNav;