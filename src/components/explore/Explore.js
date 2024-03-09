import LeftImg from "../../assets/images/left_img.jpg";
import aboutImg from "../../assets/images/about-us-1.jpg";
import React from "react";
import "./index.css";

const Explore = () => {
  return (
    <div className="explore_section">
      <h2 className="explore_heading">
        <span>Explore</span>
        <span className="color">Us</span>
      </h2>
      <p className="explore_para">
        {" "}
        With passion and vision, we're reshaping the future through innovative
        digital solutions, empowering businesses to thrive.
      </p>
      <div className="explore_section_container">
        <div className="left_card">
          <div className="card">
            <img src={LeftImg} alt="left_Image" />

            <div className="content">
              <h2 className="content_heading">Innovation.</h2>
              <p className="content_para">
                Innovation turns dreams into reality, bridging imagination with
                tangible outcomes. It's the force that propels us forward,
                creating solutions and shaping the future, guiding humanity
                towards endless possibilities and transformative change.
              </p>
            </div>
          </div>
        </div>
        <div className="right_card">
          <div className="card">
            <img src={aboutImg} alt="left_Image" />
            <div className="content">
              <h2 className="content_heading">Innovation.</h2>
              <p className="content_para">
                Innovation turns dreams into reality, bridging imagination with
                tangible outcomes. .
              </p>
            </div>
          </div>
          <div className="card">
            <img src={aboutImg} alt="left_Image" />
            <div className="content">
              <h2 className="content_heading">Innovation.</h2>
              <p className="content_para">
                Innovation turns dreams into reality, bridging imagination with
                tangible outcomes. .
              </p>
            </div>
          </div>
          <div className="card">
            <img src={aboutImg} alt="left_Image" />
            <div className="content">
              <h2 className="content_heading">Innovation.</h2>
              <p className="content_para">
                Innovation turns dreams into reality, bridging imagination with
                tangible outcomes. .
              </p>
            </div>
          </div>
          <div className="card">
            <img src={aboutImg} alt="left_Image" />
            <div className="content">
              <h2 className="content_heading">Innovation.</h2>
              <p className="content_para">
                Innovation turns dreams into reality, bridging imagination with
                tangible outcomes. .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
