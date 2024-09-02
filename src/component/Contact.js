import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';
let Contact = () => {
    const [pending,setpending]=useState(false);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setpending(true)
        emailjs
            .sendForm('service_9h2c26v', 'template_8huxcnq', form.current, {
                publicKey: 'AWc3DRkAVGGIsd-ju',
            })
            .then(
                () => {
                    setpending(false)
                    alert("Your message sent successfully")
                    form.current.reset()
                },
                (error) => {
                    setpending(false)
                    console.log('FAILED...', error.text);
                    alert("Sorry somethig went wrong")
                    form.current.reset()
                },
            );
    };

    return (
        <div className="contact-page">
            <h1>Contact Me</h1>
            <div className="form-wrapper">
                <form className="form-container" ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" placeholder="Enter your name" name="name" required />
                    <label>Email</label>
                    <input type="email" placeholder="Enter your email" name="email" required />
                    <label>Message</label>
                    <textarea placeholder="Enter your message" name="message" required />
                    <button type="submit" disabled={pending ? true:false}>{pending ?"Loading...":"Send message"}</button>
                </form>
            </div>
            <Link to="/"><button className='homeBtn'>Go to home page</button></Link>
        </div>
    )
}

export default Contact;