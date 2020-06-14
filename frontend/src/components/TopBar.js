import React from 'react';
import LogoSmall from "./LogoSmall";
import TopRightIcons from "./TopRightIcons";
import Nav from '../components/Nav';

import {faLock, faUserCircle, faSave, faHome} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const TopBar = (props) => {

    const iconizing = [{tag: "Login", icon: faUserCircle}, {tag: "Sign up", icon: faSave}];

    return (
        <div className={"TopBar"}>
            <Nav links={props.nav} />
            <TopRightIcons items={iconizing}/>
        </div>
    )
}

export default TopBar;