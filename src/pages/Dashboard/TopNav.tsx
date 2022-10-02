import { FunctionComponent } from "react";
import UserAccount from "./UserAccount";
import { TopNavProps } from "../../models";
import menuIcon from "../../images/menu.svg";

const TopNav: FunctionComponent<TopNavProps> = (props) => {
    return (
        <nav className="top-nav">
            <button
                className="drawer-control"
                onClick={props.handleMenu}
                type="button"
            >
                <img src={menuIcon} alt="hamburger menu button" />
            </button>
            <UserAccount />
        </nav>
    );
};

export default TopNav;