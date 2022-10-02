import { FunctionComponent } from "react";
import MediaQuery from "react-responsive";
import Menu from "./Menu";
import { SidenavProps } from "../../models";

const Sidenav: FunctionComponent<SidenavProps> = (props) => {
    return (
        <aside>
            <MediaQuery maxWidth={550}>
                <Menu open={props.open} handleMenu={props.handleMenu} />
            </MediaQuery>
            <MediaQuery minWidth={551}>
                <Menu open={props.open} handleMenu={props.handleMenu} />
            </MediaQuery>
        </aside>
    );
};

export default Sidenav;