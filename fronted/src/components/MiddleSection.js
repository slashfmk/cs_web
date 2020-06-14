import React from 'react';
import SectionItem from "./SectionItem";

const MiddleSection = (props) => {

    return (
        <div className={"MiddleSection"} style={{backgroundColor: props.bg, color: props.tColor}}>
            <h1 className={"MiddleSection__title"}>{props.title}</h1>
            <h2 className={"MiddleSection__description"}>{props.comment}</h2>

            <div className={"MiddleSection__content"}>
                {props.children}
                {/*{props.children.map(item => <SectionItem title={item.title} description={item.description}/>)}*/}
            </div>
        </div>
    );

};

export default MiddleSection;