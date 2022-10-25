import { Link, useLocation } from "react-router-dom";
import { SidenavProps } from "../../models";
import MediaQuery from "react-responsive";

const SideNav = ({ open, handleMenu }: SidenavProps) => {
    const { pathname } = useLocation();

    return (
        <aside>
            <MediaQuery maxWidth={550}>
            <div className={open ? "menu hide" : "menu"}>
                <header className="menu-header">
                    <h2>figures<span>Flow</span></h2>
                    <button
                        className="close-btn"
                        onClick={handleMenu}
                        type="button"
                    >
                        <img className="close-icon" alt="" />
                    </button>
                </header>
                <ul className="menu-items">
                    <Link
                        to="/figuresList"
                        className={`figures-link ${
                            pathname === "/figuresList" ? "link" : ""
                        }`}
                    >
                        Figures List
                    </Link>
                    <Link
                        to="/dashboard"
                        className={`figures-link ${
                            pathname === "/dashboard" ? "link" : ""
                        }`}
                    >
                        Dashboard
                    </Link>
                    <Link
                        to="/figures"
                        className={`figures-link ${
                            pathname === "/figures" ? "link" : ""
                        }`}
                    >
                        Figures
                    </Link>
                    <Link
                        to="/figures2"
                        className={`figures-link ${
                            pathname === "/figures2" ? "link" : ""
                        }`}
                    >
                        Figures 2
                    </Link>
                    <Link
                        to="/figures3"
                        className={`figures-link ${
                            pathname === "/figures3" ? "link" : ""
                        }`}
                    >
                        Figures 3
                    </Link>
                </ul>
            </div>
            </MediaQuery>
            <MediaQuery minWidth={551}>
            <div className={open ? "menu" : "menu hide"}>
                <header className="menu-header">
                    <h2>figures<span>Flow</span></h2>
                    <button
                        className="close-btn"
                        onClick={handleMenu}
                        type="button"
                    >
                        <img className="close-icon" alt="" />
                    </button>
                </header>
                <ul className="menu-items">
                    <Link
                        to="/figuresList"
                        className={`figures-link ${
                            pathname === "/figuresList" ? "link" : ""
                        }`}
                    >
                        Figures List
                    </Link>
                    <Link
                        to="/dashboard"
                        className={`figures-link ${
                            pathname === "/dashboard" ? "link" : ""
                        }`}
                    >
                        Dashboard
                    </Link>
                    <Link
                        to="/figures"
                        className={`figures-link ${
                            pathname === "/figures" ? "link" : ""
                        }`}
                    >
                        Figures
                    </Link>
                    <Link
                        to="/figures2"
                        className={`figures-link ${
                            pathname === "/figures2" ? "link" : ""
                        }`}
                    >
                        Figures 2
                    </Link>
                    <Link
                        to="/figures3"
                        className={`figures-link ${
                            pathname === "/figures3" ? "link" : ""
                        }`}
                    >
                        Figures 3
                    </Link>
                </ul>
            </div>
            </MediaQuery>
        </aside>
    );
};

export default SideNav;