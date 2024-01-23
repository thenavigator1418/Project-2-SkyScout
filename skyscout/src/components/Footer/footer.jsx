import React from "react";
import "./footer.css";
import googlemap from "../Map/googlemap";
<<<<<<< HEAD
import form from "../ContactForm/form"
=======
import ContactForm from "../ContactForm/form";
>>>>>>> e914a54f3a0aa187eb52cd58aacaaefe93080998

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="map-container">
                <Map />
            </div>
            <div className="form-container">
                <ContactForm />
            </div>
        </div>
    );
};

export default Footer;