/* eslint-disable no-unused-vars */
import React from "react";
import profilePic from "../img/profile-pic.png";
import "./About.css";

// const element1 = <FontAwesomeIcon className="icon" icon={faCoffee} />;
// const element2 = <FontAwesomeIcon className="icon" icon={faCab} />;
// const element3 = <FontAwesomeIcon className="icon" icon={faFaceGrin} />;
// const element4 = <FontAwesomeIcon className="icon" icon={faCoffee} />;

const About = () => {
  return (
    <div className="about-area">
      <div className="about_title-area">
        <div className="section-title">
          <h2>Get to know me</h2>
          <h3>About Me</h3>
        </div>
      </div>
      <div className="about">
        <div className="about-img">
          <div className="img_data">
            <img src={profilePic} alt="" />
          </div>
        </div>
        <div className="about_data">
          <div className="data_info">
            <h4>Who am i?</h4>
            <h1>I'm zubair, a  front-end-developer and Digital marketer</h1>
            <p>
              I am a full-stack developer with strong knowledge in front-end
              development, I believe in hard work and efficiency. I always like
              to learn new things and have experience with new stuff. To gain
              confidence and fame using my potential in this field of web
              development. That's why I am always ready to accomplish any task
              by working hard.
            </p>


          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
