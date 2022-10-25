import { SidenavProps } from "../../models";
import MenuItem from "./MenuItem";
import MediaQuery from "react-responsive";

const SideNav = ({ open, handleMenuToggle }: SidenavProps) => {
    return (
        <aside>
            <MediaQuery maxWidth={550}>
                <div className={open ? "menu hide" : "menu"}>
                    <header className="menu-header">
                        <h2>
                            figures<span>Flow</span>
                        </h2>
                        <button
                            className="close-btn"
                            onClick={handleMenuToggle}
                            type="button"
                        >
                            <img className="close-icon" alt="" />
                        </button>
                    </header>
                    <ul className="menu-items">
                        <MenuItem to="/figuresList">Figures List</MenuItem>
                        <MenuItem to="/dashboard">Dashboard</MenuItem>
                        <MenuItem to="/figures">Figures</MenuItem>
                        <MenuItem to="/figures2">Figures 2</MenuItem>
                        <MenuItem to="/figures3">Figures 3</MenuItem>
                    </ul>
                </div>
            </MediaQuery>
            <MediaQuery minWidth={551}>
                <div className={open ? "menu" : "menu hide"}>
                    <header className="menu-header">
                        <h2>
                            figures<span>Flow</span>
                        </h2>
                        <button
                            className="close-btn"
                            onClick={handleMenuToggle}
                            type="button"
                        >
                            <img className="close-icon" alt="" />
                        </button>
                    </header>
                    <ul className="menu-items">
                        <MenuItem to="/figuresList">Figures List</MenuItem>
                        <MenuItem to="/dashboard">Dashboard</MenuItem>
                        <MenuItem to="/figures">Figures</MenuItem>
                        <MenuItem to="/figures2">Figures 2</MenuItem>
                        <MenuItem to="/figures3">Figures 3</MenuItem>
                    </ul>
                </div>
            </MediaQuery>
        </aside>
    );
};

export default SideNav;