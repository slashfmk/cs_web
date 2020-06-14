import React from 'react';
import Header from '../components/Header';
import MiddleSection from "../components/MiddleSection";
import {faAddressBook, faUserCheck, faGamepad, faBurn, faHome} from "@fortawesome/free-solid-svg-icons";
import contents from '../contents/content.json';
import pexel from "../img/pexels.jpg";

import SectionItem from "../components/SectionItem";
import TopBar from '../components/TopBar';
import Footer from "../components/Footer";

const Portfolio = (props) => {
    return(
        <div className={'Portfolio'} >
            <TopBar nav={contents.nav} />
            <Header title={contents.header.title} slogan={contents.header.slogan} logo={faHome}
                    backgroundImage = {"https://images.unsplash.com/photo-1506774518161-b710d10e2733?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"}
                //     backgroundImage = {pexel}
            />

            {
                contents.middleSections.map(item =>
                    <MiddleSection title={item.title} comment={item.comment} bg={'fff'} tColor={"#000"}>
                        {item.content.map(embeddedItem => <SectionItem title={embeddedItem.title} description={embeddedItem.description}/>)}
                    </MiddleSection>)
            }

            <Footer />
        </div>
    )
}

export default Portfolio;