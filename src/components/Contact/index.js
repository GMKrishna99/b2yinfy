import React from "react";


import './index.css'

import { Front } from "../styledComponent";
import { FaArrowDown } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";


const Contact = () => {

    const handleButtonClick = () => {
        // Scroll down by 100vh
        window.scrollTo({
          top: window.innerHeight,
          behavior: 'smooth',
        });
      };

    return(
        <>
            <Front>
                <div className="contact-heading">
                    <h1>Contact Us</h1>
                    <p>Welcome to B2Y, where innovation meets connectivity. We are thrilled to connect with you and explore how our expertise in IT solutions can empower your business.</p>
                    <div className="contact-buttons">
                        <button className="arrow-button" onClick={handleButtonClick}>
                            Contact Us
                            <span className="arrow-icon">
                                <FaArrowDown />
                            </span>
                        </button>
                    </div>  
                </div>
            </Front>    
            <div className="reach-out">
                <div className="reach-out-dark">
                    <div className="reach-out-content">
                        <h1>Why Reach Out to B2Y?</h1>
                        <p>At B2Y, we understand the dynamic landscape of technology and the pivotal role it plays in shaping businesses. Whether you're looking for tailored software solutions, strategic IT consulting, or innovative digital transformations, we are here to offer unparalleled services.</p>
                        <h1>Let's Start a Conversation</h1>
                        <p>We invite you to connect with us and embark on a journey of technological innovation. Whether you are a startup seeking a tech partner or an established enterprise looking to elevate your digital presence, B2Y is here to make a difference.</p>
                    </div>
                </div>
            </div>
            <div className="contact-us">
                <div className="contact-us-left">
                    <h1>How to Connect with Us?</h1>
                    <p>Whether you have a specific project in mind or need guidance on the best IT strategies for your business, our team is ready to assist you. Here's how you can get in touch:</p>
                    <div className="contact-icons-container">
                        <div className="contact-icon-container">
                            <div className="contact-icon">
                                <FaLocationDot />
                            </div>
                            <div className="contact-icon-content">
                                <h1>Registered Address</h1>
                                <address>
                                301/302, 3rd Floor, Saket Callipolis,<br />
                                Sarjapur - Marathahalli Rd, Doddakannelli,<br />
                                Bengaluru, Karnataka 560035
                                </address>
                            </div>
                        </div>

                        <div className="contact-icon-container">
                            <div className="contact-icon">
                                <MdEmail />
                            </div>
                            <div className="contact-icon-content">
                                <h1>Our Email</h1>
                                <p>info@b2yinfy.com</p>
                            </div>
                        </div>

                        <div className="contact-icon-container">
                            <div className="contact-icon">
                                <FaPhoneAlt />
                            </div>
                            <div className="contact-icon-content">
                                <h1>Our Phone Number</h1>
                                <p>+91 8886123105</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="contact-us-right">
                    <form>
                        <h1>Get in Touch</h1>
                        <input type="text" placeholder="Your Name" />
                        <input type="text" placeholder="Phone" />
                        <input type="email" placeholder="Email" />
                        <textarea type="text" placeholder="Your Message" rows="5" cols="60"></textarea> 
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>

        </>
        
    )
}

export default Contact