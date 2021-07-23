import React from 'react';

import Socials from './Socials';


const Contact = () => {

    return (
        <div className="section contact">
            <h1 className="section-title">_ Contact me! :) _</h1>
            <Socials />
            <div className="contact-content">
                <form className="contact-form">
                    <div className="short-fields">
                        <div className="name-input">
                            <label htmlFor="name-input">
                                Name<span className="red">*</span>
                            </label>
                            <input
                                className="input short"
                                id="name-input"
                                type="text">
                            </input>
                        </div>

                        <div className="email-input">
                            <label htmlFor="email-input">
                                Email<span className="red">*</span>
                            </label>
                            <input
                            className="input short"
                            id="email-input"
                            type="text">
                            </input>
                        </div>
                    </div>

                    <label htmlFor="subject-input">
                        Subject<span className="red">*</span>
                    </label>
                    <input
                    className="input"
                    id="subject-input"
                    type="text">
                    </input>
                    
                    <label htmlFor="message-input">
                        Message<span className="red">*</span>
                    </label>
                    <textarea
                    className="input"
                    id="message-input">
                    </textarea>

                    <input
                    id="contact-submit"
                    type="submit"
                    value="Submit!">
                    </input>
                </form>
            </div>
        </div>
    );
};

export default Contact;