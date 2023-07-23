// Contact.js

import React, { useState } from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [messageError, setMessageError] = useState(false);
    const [emailInvalid, setEmailInvalid] = useState(false);
    // Form submission handler
    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate form before submitting
        if (!name || !email || !message) {
            // If any field is empty, set the corresponding error state to true
            setNameError(!name);
            setEmailError(!email);
            setMessageError(!message);
            return; // Stop form submission if any field is empty
        }
        // Validate email format using a simple regex pattern
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            setEmailInvalid(true);
            return; // Stop form submission if email is invalid
        }

        // If form is valid, you can proceed with form submission logic here
        // For example, send form data to a backend server or display a success message
        console.log('Form submitted successfully:', { name, email, message });
        // Clear form fields and reset error states after submission
        setName('');
        setEmail('');
        setMessage('');
        setNameError(false);
        setEmailError(false);
        setMessageError(false);
        setEmailInvalid(false);
    };

    // Input change handlers
    const handleNameChange = (e) => {
        const { value } = e.target;
        setName(value);
        // Clear name error when user starts typing
        if (value.trim()) {
            setNameError(false);
        }
    };

    const handleEmailChange = (e) => {
        const { value } = e.target;
        setEmail(value);
        // Clear email error and invalid email error when user starts typing
        if (value.trim()) {
            setEmailError(false);
            setEmailInvalid(false);
        }
    };


        

    // Blur event handlers
    const handleNameBlur = () => {
        // Show "Name is required" if the name field is empty after clicking out
        setNameError(!name.trim());
    };

    const handleEmailBlur = () => {
        // Show "Email is required" if the email field is empty after clicking out
        setEmailError(!email.trim());
    };

    const handleMessageBlur = () => {
        // Show "Message is required" if the message field is empty after clicking out
        setMessageError(!message.trim());
    };

    const handleMessageChange = (e) => {
        const { value } = e.target;
        setMessage(value);
        // Clear message error when user starts typing
        if (value.trim()) {
            setMessageError(false);
        }
    };


    return (
        <div className = 'contact'>
            <h2>Contact</h2>
            <form onSubmit={handleSubmit}>
                <div className = 'form-wrapper'>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={handleNameChange}
                        onBlur={handleNameBlur} // Add onBlur event handler
                    />
                    {nameError && <p className="error">Name is required</p>}
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={handleEmailChange}
                        onBlur={handleEmailBlur} // Add onBlur event handler
                    />
                    {emailError && <p className="error">Email is required</p>}
                    {emailInvalid && <p className="error">Invalid email address</p>}
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        value={message}
                        onChange={handleMessageChange}
                        onBlur={handleMessageBlur} // Add onBlur event handler
                    />
                    {messageError && <p className="error">Message is required</p>}
                </div>
                </div>
                <button className= 'submit-btn' type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Contact;
