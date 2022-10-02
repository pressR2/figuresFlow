import { FunctionComponent } from "react";
import { Link, useLocation } from "react-router-dom";
import { SidenavProps } from "../../models";

const Menu: FunctionComponent<SidenavProps> = (props) => {
    const { pathname } = useLocation();

    return (
        <nav>
            <div className={props.open ? "menu" : "menu hide"}>
                <header className="menu-header">
                    <h2>figuresFlow</h2>
                    <button
                        className="close-btn"
                        onClick={props.handleMenu}
                        type="button"
                    >
                        <img className="close-icon" alt="" />
                    </button>
                </header>
                <hr></hr>
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
        </nav>
    );
};

export default Menu;