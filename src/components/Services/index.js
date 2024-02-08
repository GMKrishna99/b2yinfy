import React from "react";

import { FaArrowDown } from "react-icons/fa6";

import './index.css'

import { Front } from "../styledComponent";

import WEBIMAGE from '../../assets/images/world-wide-web.png';
import MOBILEAPP from '../../assets/images/mobile-development.png'
import SOFTWAREDEV from '../../assets/images/coding.png'
import CLOUDSOL from '../../assets/images/cloud.png'
import ITCONSULTANCY from '../../assets/images/consultant.png'
import ITSUPPORT from '../../assets/images/technical-support.png'



const Services = () => {

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
                <div className="services-page">
                    <h1>Our Services</h1>
                    <p>At B2Y, we offer a comprehensive range of IT services tailored to meet the diverse needs of our clients. With our team of experienced professionals and cutting-edge technology, we strive to deliver innovative solutions that drive business growth and success.</p>
                    <div className="services-page-buttons">
                        <button className="arrow-button" onClick={handleButtonClick}>
                        Explore Our Services
                            <span className="arrow-icon">
                                <FaArrowDown />
                            </span>
                        </button>
                    </div>  
                </div>
            </Front> 
            <div className="our-services">
                <div className="our-services-head">
                    <h1>OUR SERVICES</h1>
                </div>
                <div className="services">

                    <div className="service">
                        <div className="service-head">
                            <h2>WEB DEVELOPMENT</h2>
                            <img src={WEBIMAGE} alt="web" className="service-icon" />
                        </div>
                        <div className="service-description">
                            <p>
                            Our expert web development team specializes in creating dynamic, user-friendly websites tailored to your unique business requirements. Whether you need a simple informational site or a complex e-commerce platform, we have the skills and expertise to bring your vision to life.
                            </p>
                        </div>
                    </div>

                    <div className="service">
                        <div className="service-head">
                            <h2>MOBILE APP DEVELOPMENT</h2>
                            <img src={MOBILEAPP} alt="mobile" className="service-icon" />

                        </div>
                        <div className="service-description">
                            <p>
                            Stay connected with your customers on the go with our custom mobile app development services. From iOS to Android, we build intuitive, feature-rich mobile applications that enhance user engagement and streamline business processes.
                            </p>
                        </div>
                    </div>

                    <div className="service">
                        <div className="service-head">
                            <h2>SOFTWARE DEVELOPMENT</h2>
                            <img src={SOFTWAREDEV} alt="software" className="service-icon" />

                        </div>
                        <div className="service-description">
                            <p>
                            Empower your business with bespoke software solutions designed to optimize efficiency and productivity. Our software development team leverages the latest technologies to develop scalable, secure, and customizable applications tailored to your specific needs.
                            </p>
                        </div>
                    </div>

                    <div className="service">
                        <div className="service-head">
                            <h2>CLOUD SOLUTIONS</h2>
                            <img src={CLOUDSOL} alt="software" className="service-icon" />

                        </div>
                        <div className="service-description">
                            <p>
                            Unlock the power of the cloud with our comprehensive cloud solutions. From cloud migration and deployment to management and optimization, we help businesses harness the full potential of cloud computing for increased agility, scalability, and cost-effectiveness.
                            </p>
                        </div>
                    </div>

                    <div className="service">
                        <div className="service-head">
                            <h2>IT CONSULTING</h2>
                            <img src={ITCONSULTANCY} alt="software" className="service-icon" />

                        </div>
                        <div className="service-description">
                            <p>
                            Gain strategic insights and expert guidance with our IT consulting services. Whether you're looking to streamline operations, improve security, or implement new technologies, our team of consultants will work closely with you to develop customized solutions that align with your business goals.  
                            </p>
                        </div>
                    </div>

                    <div className="service">
                        <div className="service-head">
                            <h2>IT SUPPORT</h2>
                            <img src={ITSUPPORT} alt="software" className="service-icon" />

                        </div>
                        <div className="service-description">
                            <p>
                            Keep your business running smoothly with our reliable IT support services. From troubleshooting technical issues to providing proactive maintenance and monitoring, our dedicated support team is available around the clock to ensure your systems are always up and running.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            
        </>
    )
}

export default Services