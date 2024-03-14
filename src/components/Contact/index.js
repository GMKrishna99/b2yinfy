import React from "react";

import "./index.css";

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
      behavior: "smooth",
    });
  };

  return (
    <>
      <Front>
        <div className="contact-heading">
          <h1>Contact Us</h1>
          <p>
            Welcome to B2Y, where innovation meets connectivity. We are thrilled
            to connect with you and explore how our expertise in IT solutions
            can empower your business.
          </p>
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
      <div className="contact-us">
        <div className="contact-us-left">
          <h1>
            How to Connect with <span className="color">Us</span>?
          </h1>
          <p>
            Whether you have a specific project in mind or need guidance on the
            best IT strategies for your business, our team is ready to assist
            you. Here's how you can get in touch:
          </p>
          <div className="contact-icons-container">
            <div className="contact-icon-container">
              <div className="contact-icon">
                <FaLocationDot />
              </div>
              <div className="contact-icon-content">
                <h1>
                  Registered <span className="color">Address</span>
                </h1>
                <address>
                  301/302, 3rd Floor, Saket Callipolis,
                  <br />
                  Sarjapur - Marathahalli Road,
                  <br />
                  Doddakannelli, Bengaluru, Karnataka 560035
                </address>
              </div>
            </div>

            <div className="contact-icon-container">
              <div className="contact-icon">
                <MdEmail />
              </div>
              <div className="contact-icon-content">
                <h1>
                  Our <span className="color">Email</span>
                </h1>
                <p>info@b2yinfy.com</p>
              </div>
            </div>

            <div className="contact-icon-container">
              <div className="contact-icon">
                <FaPhoneAlt />
              </div>
              <div className="contact-icon-content">
                <h1>
                  Our Phone <span className="color">Number</span>
                </h1>
                <p>+91 8886123105</p>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-us-right">
          <form>
            <h1>
              Get in <span className="color">Touch</span>
            </h1>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Email" />
            <input type="email" placeholder="subject" />
            <input type="text" placeholder="Phone" />
            <textarea
              type="text"
              placeholder="Your Message"
              rows="5"
              cols="60"
            ></textarea>
            <button type="submit" className="submit_btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
