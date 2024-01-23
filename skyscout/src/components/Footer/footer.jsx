import React from "react";
import "./footer.css";
import googlemap from "../Map/googlemap";
import form from "../ContactForm"

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