import React from "react";

import './index.css'
import { Link } from "react-router-dom";
import { Front } from "../styledComponent";
import { FaArrowDown } from "react-icons/fa6";


const Home = () => {

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
                <div className="heading">
                    <h5>Welcome to,</h5>
                    <h1 className="typewriter-text">B2Y INFY SOLUTIONS</h1>
                    <h3 className="slide-in">Transforming Ideas into Innovation</h3>
                    <div className="home-buttons">
                        <Link to="/contact">
                            <button className="lets-talk">Let's Talk</button>
                        </Link>
                        <button className="explore-us" onClick={handleButtonClick}>
                            Explore Us
                            <span className="arrow-icon">
                            <FaArrowDown />
                            </span>
                        </button>
                    </div>
                </div>
            </Front>

            <div className="why-choose-us">
                <h1 className="why-choose-us-head">WHY CHOOSE US?</h1>
                <p className="why-choose-us-description">At B2Y, we understand that choosing the right IT partner for your business is crucial. With a myriad of options available, what sets us apart from the rest? Here are some compelling reasons why you should choose us:</p>

                <div className="why-choose-us-cards">

                    <div className="why-choose-us-card">
                        <h3>Expertise and Experience</h3>
                        <p>Backed by a team of seasoned professionals, we bring years of collective experience to the table. From web development to cybersecurity, our experts excel in their respective domains, ensuring that your projects are handled with utmost proficiency and care.</p>
                    </div>

                    <div className="why-choose-us-card">
                        <h3>Tailored Solutions</h3>
                        <p>We believe in a personalized approach to every project. Rather than adopting a one-size-fits-all mentality, we take the time to understand your unique requirements and tailor our solutions accordingly. Whether you're a startup or a multinational corporation, we have the flexibility to adapt to your needs.</p>
                    </div>

                    <div className="why-choose-us-card">
                        <h3>Cutting-Edge Technology</h3>
                        <p>In the fast-paced world of IT, staying ahead of the curve is essential. That's why we constantly strive to incorporate the latest technologies and methodologies into our work. From AI-driven applications to blockchain solutions, we leverage the power of innovation to deliver unmatched results.</p>
                    </div>

                    <div className="why-choose-us-card">
                        <h3>Commitment to Quality</h3>
                        <p>Quality is at the core of everything we do. From the initial consultation to the final delivery, we maintain rigorous standards to ensure that our products and services meet and exceed your expectations. Our commitment to quality is unwavering, and we go the extra mile to ensure your satisfaction.</p>
                    </div>

                    <div className="why-choose-us-card">
                        <h3>Customer-Centric Approach</h3>
                        <p>At B2Y, your satisfaction is our top priority. We take a customer-centric approach to every project, placing your needs and preferences at the forefront. Our dedicated support team is always available to address your concerns and provide assistance whenever you need it.</p>
                    </div>

                    <div className="why-choose-us-card">
                        <h3> Proven Track Record</h3>
                        <p>With a proven track record of success, we have earned the trust and confidence of countless clients across diverse industries. Our portfolio speaks for itself, showcasing the exceptional results we have achieved for our clients time and time again.</p>
                    </div>

                    <div className="why-choose-us-card">
                        <h3>Competitive Pricing</h3>
                        <p>We believe that quality IT services should be accessible to all businesses, regardless of size or budget. That's why we offer competitive pricing without compromising on quality. With B2Y, you get the best value for your investment.</p>
                    </div>

                    <div className="why-choose-us-card">
                        <h3>Long-Term Partnership</h3>
                        <p>We don't just view our clients as one-time transactions; we see them as long-term partners. We are committed to building lasting relationships based on trust, transparency, and mutual respect. When you choose B2Y, you're not just getting a vendor; you're gaining a trusted ally in your journey towards success.</p>
                    </div>


                </div>
            </div>
        </>
    )
}

export default Home