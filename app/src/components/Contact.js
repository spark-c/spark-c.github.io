import React, { useState } from 'react';

import Socials from './Socials';


const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");


    return (
        <div className="section contact">
            <h1 className="section-title">[contact-title-placeholder]</h1>
            <Socials />
            <div className="contact-content">
                <form
                className="contact-form"
                action={`mailto:cklsparks@gmail.com?cc=${email}`}
                enctype="text/plain"
                target="_blank">
                    <div className="short-fields">
                        <div className="name-input">
                            <label htmlFor="name-input">
                                Name<span className="red">*</span>
                            </label>
                            <input
                                className="input short"
                                id="name-input"
                                type="text"
                                value={name}
                                onChange={e => setName(e.target.value)}>
                            </input>
                        </div>

                        <div className="email-input">
                            <label htmlFor="email-input">
                                Email<span className="red">*</span>
                            </label>
                            <input
                            className="input short"
                            id="email-input"
                            type="text"
                            name="sender"
                            value={email}
                            onChange={e => setEmail(e.target.value)}>
                            </input>
                        </div>
                    </div>

                    <label htmlFor="subject-input">
                        Subject<span className="red">*</span>
                    </label>
                    <input
                    className="input"
                    id="subject-input"
                    type="text"
                    name="subject"
                    value={subject}
                    onChange={e => setSubject(e.target.value)}>
                    </input>
                    
                    <label htmlFor="message-input">
                        Message<span className="red">*</span>
                    </label>
                    <textarea
                    className="input"
                    id="message-input"
                    name="body"
                    value={message}
                    onChange={e => setMessage(e.target.value)}>
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