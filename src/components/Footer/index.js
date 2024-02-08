import React from "react";

import { FaArrowUp, FaTwitter } from "react-icons/fa6";

import { FaFacebookF,FaInstagram,FaLinkedinIn } from "react-icons/fa6";

import './index.css'
import { Link } from "react-router-dom";

const Footer = () => {

  const companyMailId = "info@b2yinfy.com"
  const companyNumber = 8886123105

    const handleScrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };

    return(
        <div className="footer">
          <div className="footer-content">
            <div className="footer-b2y">
              <Link to="/">
              <div className="footer-logo" onClick={handleScrollToTop}>
                B2Y<span>INFY</span>
              </div>
              </Link>
              <p>
                B2Y is a dynamic and innovative IT solutions provider dedicated to empowering businesses with cutting-edge technology. With a passion for excellence and a commitment to customer satisfaction, we strive to deliver tailored solutions that drive growth, efficiency, and success.
              </p>
              <div className="footer-social-links">
                <a href="https://www.facebook.com/b2yinfy" target="_blank" rel="noopener noreferrer">
                  <span>
                      <FaFacebookF /> 
                  </span>
                </a>

                <a href="https://www.instagram.com/b2yinfy" target="_blank" rel="noopener noreferrer">
                  <span>
                      <FaInstagram /> 
                  </span>
                </a>

                <a href="https://www.linkedin.com/in/b2yinfy" target="_blank" rel="noopener noreferrer">
                  <span>
                      <FaLinkedinIn /> 
                  </span>
                </a>

                <a href="https://twitter.com/b2yinfy" target="_blank" rel="noopener noreferrer">
                  <span>
                      <FaTwitter /> 
                  </span>
                </a>
              </div>
            </div>

            <div className="footer-company">
              <h1>COMPANY</h1>

              <Link to="/about">
                <p onClick={handleScrollToTop}>About Us</p>
              </Link>
              <Link to="/services">
                <p onClick={handleScrollToTop}>Our Services</p>
              </Link>
              <Link to="/contact">
                <p onClick={handleScrollToTop}>Contact Us</p>
              </Link>
            </div>

            <div className="footer-support">
              <h1>SUPPORT</h1>
              <a href={`mailto:${companyMailId}`} >info@b2yinfy.com</a>
              <a href={`tel:${companyNumber}`}>+91 8886123105</a>
            </div>
            <button className="arrow-up" onClick={handleScrollToTop}><FaArrowUp /></button>
          </div>
            

            <div className="copy-rights">
               2023 &copy; All right reserved. Development by <span>B2Y Infy Solutions Pvt. Ltd.</span>
            </div>
        </div>
    )
}

export default Footer