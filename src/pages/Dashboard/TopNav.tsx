import { FunctionComponent } from "react";
import { TopNavProps } from "../../models";
import UserAccount from "./UserAccount";
import menuIcon from "../../images/menu.svg";

const TopNav: FunctionComponent<TopNavProps> = (props) => {
    return (
        <div className="nav-and-main-container">
            <div className="top-nav">
                <div
                    className="drawer-control"
                    onClick={props.handleMenu}
                    role="button"
                >
                    <img src={menuIcon} alt="" />
                </div>
                <UserAccount />
            </div>
            <div className="main">
                <h2>Content</h2>
            </div>
        </div>
    );
};

export default TopNav;
