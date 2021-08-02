import React, { useState } from 'react';

import Socials from './Socials';


const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [sendStatus, setSendStatus] = useState(undefined);
    const [loading, setLoading] = useState(false);

    const sendMail = async () => {
        const response = await fetch(
            "https://sparksie-api.vercel.app/send_email",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "sender_name": name,
                "sender_email": email,
                "subject": subject,
                "body": message,
            }) 
        })
        .then(response => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json()
        })
        .catch(error => {
            console.log(`hello my name is ${error}`);
            setSendStatus("error")
        });

        let result = await response;
        return result;
    };


    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (sendStatus) {
            setSendStatus(undefined);
        }

        const result = await sendMail();
        if (await result) {
            setSendStatus("success");
            setMessage("");
            setName("");
            setEmail("");
            setSubject("");
        }
        setLoading(false);
    };

    const renderedStatus = {"value": undefined}
    switch (sendStatus) {
        case "success":
            renderedStatus.value = (
                <p className="feedback">
                    Email successfully sent!
                </p>
            );
            break;
        case "error":
            renderedStatus.value = (
                <p className="feedback">
                    Something went wrong on our end!
                </p>
            );
            break;
    }


    return (
        <div className="section contact">
            <h1 className="section-title">[ Send an email below! ]</h1>
            <Socials />
            {renderedStatus.value}
            <div className="contact-content">
                <form
                className="contact-form"
                onSubmit={handleFormSubmit}>
                    
                    {loading?
                        <p className="loading-message">Sending...</p>:
                        undefined
                    }
                    {
                    loading?
                        <div className="loading">
                        </div>:
                        undefined
                    }

                    <div className="short-fields">
                        <div className="name-input">
                            <label htmlFor="name-input">
                                Your Name<span className="red">*</span>
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
                                Your Email<span className="red">*</span>
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
                        Subject Line<span className="red">*</span>
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
                        Message Body<span className="red">*</span>
                    </label>
                    <textarea
                    className="input"
                    id="message-input"
                    name="body"
                    value={message}
                    onChange={e => setMessage(e.target.value)}>
                    </textarea>

                    <p className="contact-cc">
                        Note: You will be cc'd on the email :)
                    </p>

                    <input
                    id="contact-submit"
                    type="submit"
                    value="Send!">
                    </input>
                </form>
            </div>
        </div>
    );
};

export default Contact;