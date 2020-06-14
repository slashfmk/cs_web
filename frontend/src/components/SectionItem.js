import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SectionItem = (props) => {
    return (
        <div className={"SectionItem"}>

            <div className={"SectionItem__logo"}>
                <FontAwesomeIcon icon={props.icon} size={"2x"} />
            </div>

            <div className={"SectionItem__title"}>
                {props.title}
            </div>

            <div className={"SectionItem__description"}>
                {props.description}
            </div>

        </div>
    )
}

export default SectionItem;