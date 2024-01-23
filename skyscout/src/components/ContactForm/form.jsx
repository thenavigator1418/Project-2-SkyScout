import React, { useState } from 'react';
import './form.css';

const ContactForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
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

    const emailAddress = (e) => {
        setEmail(e.target.value);
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
                    <input
                        type="text"
                        id="firstName"
                        placeholder="First Name"
                        value={firstName}
                        onChange={firstNameAdded}
                    />
                    <input
                        type="text"
                        id="lastName"
                        placeholder="Last Name"
                        value={lastName}
                        onChange={lastNameAdded}
                    />
                </div>

                <div className="form-group">
                    <input
                        type="email"
                        id="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={emailAddress}
                    />
                </div>
                <div className="form-group">
                    <textarea
                        id="message"
                        placeholder="Your Message"
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
