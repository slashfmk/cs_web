import React from 'react';
import IconWithTag from "./IconWithTag";


const TopRightIcons = (props) => {
    return (
        <div className={"TopRightIcons"}>
            <ul>
                {props.items.map(item => <IconWithTag tag={item.tag} icon={item.icon} size={"1x"} />)}
            </ul>

        </div>
    )
}

export default TopRightIcons;