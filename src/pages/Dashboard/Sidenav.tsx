import { FunctionComponent } from "react";
import { SidenavProps } from "../../models";

const Sidenav: FunctionComponent<SidenavProps> = (props) => {
    return (
        <div className={props.open ? "menu" : "menu hide"}>
            <div className="menu-header">
                <h2>figuresFlow</h2>
            </div>
            <hr></hr>
            <ul className="menu-items">
                <li>Figures</li>
                <li>Figures 2</li>
                <li>Figures 3</li>
            </ul>
        </div>
    );
};

export default Sidenav;
