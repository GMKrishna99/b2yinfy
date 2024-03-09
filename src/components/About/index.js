import React from "react";

import { FaArrowDown } from "react-icons/fa6";
import { aboutList } from "../../constants/index";
import { whatWeOffer } from "../../constants/index";
import OurStoryImg from "../../assets/images/ourStory.jpg";
import OurMissionImg from "../../assets/images/mission.jpg";

import "./index.css";
import { Front } from "../styledComponent";
// import { Value } from "./styledComponent";
const About = () => {
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
        <div className="about-heading">
          <h5>OUR STORY</h5>
          <h1>About US</h1>
          <p>
            At B2Y, we are not just a team of tech enthusiasts; we are
            architects of innovation, builders of solutions, and champions of
            digital transformation. Founded on the belief that technology has
            the power to reshape the future, our startup journey began with a
            simple yet ambitious goal – to redefine the IT landscape and empower
            businesses for success.
          </p>
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
      {/* <div className="vision">
        <div className="vision-content">
          <h1>Our Story</h1>
          <h5>From Vision to Venture</h5>
          <img src={ABOUT1} alt="about-2-mobile" className="mobile-about" />
          <p>
            Born out of a shared passion for cutting-edge technology, B2Y was
            founded by a group of seasoned professionals with a collective
            vision to create a company that goes beyond conventional IT
            services. With backgrounds ranging from software development to
            cybersecurity, our diverse team brings a wealth of expertise and a
            shared commitment to excellence.
          </p>
        </div>

        <div className="vision-image">
          <img src={ABOUT1} alt="about-1" />
        </div>
      </div> */}

      {/* <div className="mission">
        <div className="mission-image">
          <img src={ABOUT2} alt="about-2" />
        </div>

        <div className="mission-content">
          <h1>Our Mission</h1>
          <h5>Empowering Your Digital Journey</h5>
          <img src={ABOUT2} alt="about-2-mobile" className="mobile-about" />
          <p>
            Our mission is simple yet profound – to empower businesses through
            tailor-made IT solutions that align with their goals. Whether it's
            developing robust software applications, securing digital assets, or
            navigating the complexities of cloud technology, we are here to be
            your trusted partner in the digital journey.
          </p>
        </div>
      </div> */}
      {/* <div className="advantage">
        <div className="background-dark">
          <div className="advantage-content">
            <h1>What Sets Us Apart: The B2Y Advantage</h1>
            <p>
              In a rapidly evolving digital era, staying ahead requires more
              than just keeping up with the trends. At B2Y, we distinguish
              ourselves through a combination of innovation, collaboration, and
              a client-centric approach. We don't just provide solutions; we
              craft experiences that elevate businesses to new heights.
            </p>
            <h1>The B2Y Experience: Where Technology Meets Excellence</h1>
            <p>
              As we embark on this exciting venture, we invite you to explore
              the world of B2Y. Beyond the lines of code and the intricacies of
              algorithms, we are a team dedicated to driving meaningful change
              in the digital landscape. Join us on this journey, and let's
              innovate, collaborate, and create something extraordinary
              together.
            </p>
          </div>
        </div>
      </div> */}

      {/* advantages and machines and vision */}

      <div className="advantages_Container">
        {aboutList.map((item) => (
          <div className="advantages_card">
            <div className="svg_icons">
              <img src={item.svg} alt="advantage" width={60} height={60} />
            </div>
            <div className="advantages_text">
              <h2 className="advantages_head">{item.title}</h2>
              <p className="advantages_para">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ourstory section */}
      <div className="story_section">
        <div className="story_container">
          <img src={OurStoryImg} className="story-img" alt="story-img" />
          <div className="story_text">
            <div className="black_trans"></div>
            <h2 className="our_story_head">Our Story</h2>
            <span className="out_story_subheading">From Vision to Venture</span>
            <p className="our-story_para">
              Established from a mutual enthusiasm for pioneering technology,
              B2Y was conceived by a consortium of experienced professionals
              united by a common goal to establish a company transcending
              traditional IT offerings. Our team, encompassing backgrounds in
              software development and cybersecurity, amalgamates a spectrum of
              proficiency and a unified dedication to unparalleled quality.
            </p>
          </div>
        </div>

        <div className="story_container">
          <img src={OurMissionImg} className="story-img" alt="story-img" />
          <div className=" right_content">
            <h2 className="our_story_head">Our Mission</h2>
            <span className="out_story_subheading">
              Empowering Your Digital Journey
            </span>
            <p className="our-story_para">
              Born from a shared passion for cutting-edge technology, B2Y was
              founded by a group of seasoned professionals with a collective
              vision to create a company that goes beyond conventional IT
              services. With backgrounds ranging from software development to
              cybersecurity, our diverse team brings a wealth of expertise and a
              shared commitment to excellence.
            </p>
          </div>
        </div>
      </div>

      {/* What we Offer */}

      <div className="what_we_offer_container">
        <div className="what_we_offer_text">
          <h1 className="what_we_offer_heading">What We Offer ?</h1>
          <p className="what_we_offer_subheading">
            At B2Y, we stand prepared to deliver exceptional service...
          </p>
        </div>
        <div className="what_we_offer_cards">
          {whatWeOffer.map((item) => (
            <div className="what_we_offer_card">
              <span className="what_we_offer_card_heading">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default About;
