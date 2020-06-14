import React from 'react';
import {faLock, faBrain} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Header = (props) => {

    return (
        <header className={"Header"}
                style={{backgroundImage:
                        `linear-gradient(
                        rgba(0,0,0, .6), 
                        rgba(0, 0, 0, .6)), 
                        url(${props.backgroundImage})`,
                    backgroundAttachment: 'fixed'
                    // backgroundPosition: 'right 0 bottom 0 left 0 right 0 top 120px'
                }}>
            <div className={"Header__logo"}>
                <FontAwesomeIcon icon={faBrain} size={"5x"}/>
            </div>
            <div className={"Header__slogan"}>{props.slogan}</div>
            <div className={"Header__title"}>{props.title}</div>

        </header>
    )
}

export default Header;