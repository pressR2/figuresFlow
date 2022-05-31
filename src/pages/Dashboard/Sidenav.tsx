import { FunctionComponent, useState } from "react";
import { SidenavProps } from "../../models";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Sidenav: FunctionComponent<SidenavProps> = (props) => {
    const { pathname } = useLocation();

    return (
        <div className={props.open ? "menu" : "menu hide"}>
            <div className="menu-header">
                <h2>figuresFlow</h2>
                <div
                    className="close-btn"
                    onClick={props.handleMenu}
                    role="button"
                >
                    <img className="close-icon" />
                </div>
            </div>
            <hr></hr>
            <ul className="menu-items">
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
    );
};

export default Sidenav;
