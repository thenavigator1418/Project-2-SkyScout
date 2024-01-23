import React, { useState } from 'react';
import './form.css';

const ContactForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [message, setMessage] = useState('');

    const firstNameAdded = (e) => {
        setFirstName(e.target.value);
    };

    const lastNameAdded = (e) => {
        setLastName(e.target.value);
    };

    const messageAdded = (e) => {
        setMessage(e.target.value);
    };

    const submitInfo = (e) => {
        e.preventDefault();
        console.log({ firstName, lastName, message });
    };

    return (
        <div className="contact-form">
            <h2>Enquiries</h2>
            <p className="subheading">Lorem ipsum</p>
            <form onSubmit={submitInfo}>
                <div className="form-group">
                    <label htmlFor="firstName">First Name:</label>
                    <input
                        type="text"
                        id="firstName"
                        value={firstName}
                        onChange={firstNameAdded}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name:</label>
                    <input
                        type="text"
                        id="lastName"
                        value={lastName}
                        onChange={lastNameAdded}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        value={message}
                        onChange={messageAdded}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ContactForm;
