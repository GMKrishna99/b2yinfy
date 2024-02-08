import React from "react";

import { FaArrowDown } from "react-icons/fa6";

import './index.css'
import { Front } from "../styledComponent";
import { Value } from "./styledComponent";





const About = () => {

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
                <div className="about-heading">
                    <h5>OUR STORY</h5>
                    <h1>About US</h1>
                    <p>At B2Y, we are not just a team of tech enthusiasts; we are architects of innovation, builders of solutions, and champions of digital transformation. Founded on the belief that technology has the power to reshape the future, our startup journey began with a simple yet ambitious goal – to redefine the IT landscape and empower businesses for success.</p>
                    <div className="about-buttons">
                        <button className="arrow-button" onClick={handleButtonClick}>
                            Explore Us
                            <span className="arrow-icon">
                                <FaArrowDown />
                            </span>
                        </button>
                    </div>       
                </div>
            </Front>
            <div className="vision">
                <div className="background-dark">
                    <div className="vision-content">
                        <h1>Our Story: From Vision to Venture</h1>
                        <p>Born out of a shared passion for cutting-edge technology, B2Y was founded by a group of seasoned professionals with a collective vision to create a company that goes beyond conventional IT services. With backgrounds ranging from software development to cybersecurity, our diverse team brings a wealth of expertise and a shared commitment to excellence.</p>
                        <h1>Our Mission: Empowering Your Digital Journey</h1>
                        <p>Our mission is simple yet profound – to empower businesses through tailor-made IT solutions that align with their goals. Whether it's developing robust software applications, securing digital assets, or navigating the complexities of cloud technology, we are here to be your trusted partner in the digital journey.</p>
                    </div>
                </div>
            </div>
            <div className="values-container">
                <h1>OUR CORE VALUES</h1>
                <div className="values">
                    <Value>
                        <h3>INNOVATION</h3>
                        <p>We embrace innovation as the cornerstone of our identity. Constantly seeking new and creative solutions, we thrive on pushing boundaries and exploring uncharted territories in the tech landscape.</p>
                    </Value>
                    <Value>
                        <h3>Client-Centric Approach</h3>
                        <p>Clients are at the heart of everything we do. We prioritize understanding their needs, challenges, and goals to deliver tailored IT solutions that drive their success.</p>
                    </Value>
                    <Value>
                        <h3>INTEGRITY & TRANSPARENCY</h3>
                        <p>Transparency is our policy, and integrity is our commitment. We foster an environment of trust, openness, and honesty in all our interactions, both internally and externally.</p>
                    </Value>
                    <Value>
                        <h3>Social Responsibility</h3>
                        <p>We are committed to making a positive impact on the communities we serve. Upholding social responsibility, we strive to contribute to meaningful causes and create a sustainable and inclusive future.</p>
                    </Value>
                    <Value>
                        <h3> Excellence in Execution</h3>
                        <p>We are committed to delivering excellence in every project. From planning to execution, we maintain a standard of quality that exceeds expectations and adds tangible value to our clients' businesses.</p>
                    </Value>
                    <Value>
                        <h3>Collaboration and Teamwork</h3>
                        <p>We believe in the power of collaboration. Our diverse team brings together unique perspectives and skills, working cohesively to achieve collective success and drive innovation.</p>
                    </Value>
                    <Value>
                        <h3>Accountability</h3>
                        <p>We take ownership of our responsibilities. Each team member is accountable for their actions, decisions, and contributions to the overall success of our projects and the company.</p>
                    </Value>
                    <Value>
                        <h3>FUN & PASSION</h3>
                        <p>We believe in enjoying what we do. Fostering a positive and fun work environment, we approach our work with enthusiasm, passion, and a sense of camaraderie.</p>
                    </Value>
                </div>
            </div>
            <div className="advantage">
                <div className="background-dark">
                    <div className="advantage-content">
                        <h1>What Sets Us Apart: The B2Y Advantage</h1>
                        <p>In a rapidly evolving digital era, staying ahead requires more than just keeping up with the trends. At B2Y, we distinguish ourselves through a combination of innovation, collaboration, and a client-centric approach. We don't just provide solutions; we craft experiences that elevate businesses to new heights.</p>
                        <h1>The B2Y Experience: Where Technology Meets Excellence</h1>
                        <p>As we embark on this exciting venture, we invite you to explore the world of B2Y. Beyond the lines of code and the intricacies of algorithms, we are a team dedicated to driving meaningful change in the digital landscape. Join us on this journey, and let's innovate, collaborate, and create something extraordinary together.</p>
                    </div>
                </div>
            </div>

        </>
        
    )
}

export default About