import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome} from "@fortawesome/free-solid-svg-icons";
import {NavLink, Link} from 'react-router-dom';

const Nav = (props) => {
    return (
        <nav className={"TopBar__Menu"}>
            <ul className={"TopBar__Menu__list"}>
                <li className={"TopBar__Menu__list__item"}><NavLink exact className={"TopBar__Menu__link"} to={"/"}><FontAwesomeIcon icon={faHome} size={"1x"} /></NavLink></li>
                {/*<li className={"TopBar__Menu__list__item"}><a className={"TopBar__Menu__link"} href={"#"}>Service</a></li>*/}
                {props.links.map(item => <li className={"TopBar__Menu__list__item"}><NavLink className={"TopBar__Menu__link"} to={item.link_address}>{item.link_text}</NavLink></li>)}
            </ul>
        </nav>
    )
}

export default Nav;