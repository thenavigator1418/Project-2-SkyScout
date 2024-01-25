import React from "react";
import "./footer.css";
import Map from "../Map/googlemap";
import ContactForm from "../ContactForm/form";

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