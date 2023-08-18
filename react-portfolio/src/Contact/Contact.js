import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [messageError, setMessageError] = useState(false);
    const [emailInvalid, setEmailInvalid] = useState(false);
    const [emailSent, setEmailSent] = useState(false);
    // Form submission handler
    const handleSubmit = async (e) => {
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

        try {
            const response = await emailjs.send(
                'service_lv90l97',
                'template_pot28fv',
                {
                    to_name: 'Michael',
                    from_name: name,
                    from_email: email,
                    message: message,
                    reply_to: email
                },
                'K2IxcdGeA0hA_3Ufi'
            );
            console.log('Email sent successfully:', response);
            setEmailSent(true);


            setName('');
            setEmail('');
            setMessage('');
            setNameError(false);
            setEmailError(false);
            setMessageError(false);
            setEmailInvalid(false);
        } catch (error) {
            console.log('Failed to submit form:', error);
        }
    }


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
            <div className='contact'>
                <h2>Contact</h2>
                <form onSubmit={handleSubmit}>
                    <div className='form-wrapper'>
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
                    <button className='submit-btn' type="submit">Submit</button>
                </form>
                {emailSent && <p style = {{ color: 'green'}} className="success-message">Email sent successfully!</p>}
            </div>
        );
    };

    export default Contact;
