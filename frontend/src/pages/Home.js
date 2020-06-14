import React from 'react';
import Header from '../components/Header';
import MiddleSection from "../components/MiddleSection";
import contents from '../contents/content.json';
import pexel from "../img/pexels.jpg";

import SectionItem from "../components/SectionItem";
import TopBar from '../components/TopBar';
import Footer from "../components/Footer";

const Home = (props) => {

    return (
        <div className={"Home"}>
            <TopBar nav={contents.nav} />
            <Header title={contents.header.title} slogan={contents.header.slogan} logo={"home"}
                backgroundImage = {"https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1700&q=80"}
                //     backgroundImage = {pexel}
            />

            {
                contents.middleSections.map(item =>
                    <MiddleSection title={item.title} comment={item.comment} bg={item.bg} tColor={"#cccccc"}>
                        {item.content.map(embeddedItem => <SectionItem icon={embeddedItem.icon} title={embeddedItem.title} description={embeddedItem.description}/>)}
                    </MiddleSection>)
            }

            <Footer />
        </div>
    )
}

export default Home;