import React from 'react';


const Contact = () => {

    return (
        <div className="section contact">
            <h1 className="section-title">_ Contact me! :) _</h1>
            <div className="contact-content">
                <form className="contact-form">
                    <label for="name-input">Name</label>
                    <input id="name-input" type="text"></input>
                    <label for="email-input">Email</label>
                    <input id="email-input" type="text"></input>
                    <label for="message-input">Message</label>
                    <input id="message-input" type="text"></input>
                </form>
            </div>
        </div>
    );
};

export default Contact;