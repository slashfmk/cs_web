import React from 'react';
import { faAddressBook, faLock, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LogoSmall = (props) => {
    return (
        <div className={"LogoSmall"}>
        <FontAwesomeIcon icon={faHome} size={props.size} />
        </div>
    )
}

export default LogoSmall;