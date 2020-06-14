import React from 'react';
import {faMinusCircle} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const IconWithTag = (props) => {
    return (
        <div className={"IconWithTag"}>
            <span className={"IconWithTag__icon"}><FontAwesomeIcon icon={props.icon === "" ? faMinusCircle : props.icon} size={props.size} /></span>
            <span className={"IconWithTag__tag"}> {props.tag}</span>
        </div>
    );
}

export default IconWithTag;