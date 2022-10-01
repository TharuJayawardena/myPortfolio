// @flow 
import React from 'react';
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai';
import {RiMessengerLine} from 'react-icons/ri';
import {BsWhatsapp} from 'react-icons/bs';
import  { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();


        emailjs.sendForm('service_vpj15bu', 'template_0fsazek', form.current, 'AGUgoIr8NHnVegWo0')

        e.target.reset();
    };
    return (
        <section id='contact'>
          <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact_container">
                <div className="contact_options">
                    <article className="contact_option">
                        <AiOutlineMail/>
                        <h4>Email</h4>
                        <h5>tharushijayawardena03@gmail.com</h5>
                        <a href="mailto:harushijayawardena03@gmail.com">send a message</a>
                    </article>
                    <article className="contact_option">
                        <RiMessengerLine/>
                        <h4>Messenger</h4>
                        <h5>jayawardenatharu</h5>
                        <a href="message:jayawardenatharucom">send a message</a>
                    </article>
                    <article className="contact_option">
                        <BsWhatsapp/>
                        <h4>WhatsApp</h4>
                        <h5>+767459508</h5>
                        <a href="https://api.whatsapp.com/send?phone+767459508">send a message</a>
                    </article>
                </div>

                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="your full name" required/>
                    <input type="email" name="email" placeholder="your email" required/>
                    <textarea name="message" rows = "7" placeholder="yor message" required/>
                    <button type="submit" className="btn btn-primary">Send Message</button>

                </form>
            </div>
        </section>
    );
};
export default Contact