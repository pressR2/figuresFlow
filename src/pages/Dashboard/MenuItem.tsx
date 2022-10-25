import { NavLink, useLocation } from "react-router-dom";
import { MenuItemProps } from "../../models";

const MenuItem = ({ children, to }: MenuItemProps) => {
    const { pathname } = useLocation();

    return (
        <li>
            <NavLink
                className={`figures-link ${pathname === to ? "link" : ""}`}
                to={to}
            >
                {children}
            </NavLink>
        </li>
    );
};

export default MenuItem;