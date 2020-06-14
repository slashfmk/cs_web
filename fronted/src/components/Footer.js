import React from 'react';
//import {} from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faTwitter, faYoutube, faInstagram} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Footer = (props) => {
    return (
        <footer className={"Footer"}>

            <div className={"Footer__contacts"}>
                <div className={"Footer__contacts__phone"}>
                    {props.phone}
                </div>
                <div className={"Footer__contacts__email"}>
                    {props.email}
                </div>
                <div className={"Footer__contacts__website"}>
                    {props.website}
                </div>
            </div>

            <div className={"Footer__social-media"}>
                <div className={"Footer__social-media--facebook"}>
                    {props.facebook}
                </div>
                <div className={"Footer__social-media--twitter"}>{props.twitter}</div>
                <div className={"Footer__social-media--instagram"}>{props.instagram}</div>
                <div className={"Footer__social-media--youtube"}>{props.youtube}</div>
            </div>

            <div className={"Footer__copyright"}>
                {props.copyright}
            </div>

        </footer>
    )
}

export default Footer;