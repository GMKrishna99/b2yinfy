import React from "react";

import "./index.css";
import { Link } from "react-router-dom";
import { Front } from "../styledComponent";
import { FaArrowDown } from "react-icons/fa6";
import { Chrono } from "react-chrono";
import ChooseUs from "./ChooseUs";
import { chooseUsList } from "../../constants/index";
import ExplorePage from "../explore/Explore";

const Home = () => {
  const handleButtonClick = () => {
    // Scroll down by 100vh
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Hero section */}
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

      {/* explore section */}
      <ExplorePage />

      {/* Why choose us section */}
      <div className="why-choose-us">
        <h1 className="why-choose-us-head">WHY ONLY US?</h1>
        <p className="why-choose-us-description">
          At B2Y, we understand that choosing the right IT partner for your
          business is crucial. With a myriad of options available, what sets us
          apart from the rest? Here are some compelling reasons why you should
          choose us:
        </p>
        <div style={{ width: "100vw" }}>
          <Chrono
            items={chooseUsList}
            mode="VERTICAL_ALTERNATING"
            disableClickOnCircle="true"
            cardHeight="auto"
            activeItemIndex=""
            hideControls
            slideShowType="reveal"
            className={{ cardTitle: "my-card-title" }}
            theme={{
              primary: "#ff6347",
              secondary: "#ff6347",
              titleColor: "#ff6347",
              cardTitle: "#222222",
              cardSubtitle: "#312f36",
            }}
          >
            {chooseUsList.map((each) => {
              return <ChooseUs item={each} />;
            })}
          </Chrono>
        </div>
      </div>
    </>
  );
};

export default Home;
