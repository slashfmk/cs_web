import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LogoSmall = (props) => {
    return (
        <div className={"LogoSmall"}>
        <FontAwesomeIcon icon={"google"} size={props.size} />
        </div>
    )
}

export default LogoSmall;