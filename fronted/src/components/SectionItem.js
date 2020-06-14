import React from 'react';
import { faAddressBook, faUserCheck, faGamepad } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SectionItem = (props) => {
    return (
        <div className={"SectionItem"}>

            <div className={"SectionItem__logo"}>
                <FontAwesomeIcon icon={faAddressBook} size={"2x"} />
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