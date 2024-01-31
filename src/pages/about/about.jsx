import React from "react";
import './about.css'
import joinImg from '../../assets/about-img/join_team.svg'

export const About = () => {
  try {
    return <section id="aboutUs" className="about-container">
      <div className="ourMission-div">
        <h3 className="mission-title">Our Mission</h3>
        <p className="mission-text">
          “For a long time I was looking to create a new <br />
          beauty brand that is different. Our beauty experts <br />
          use ingredients that work and that everyone <br /> understands. ”
        </p>
      </div>
      <div className="join-container">
        <div className="join-title">
          <h2 className="join-text">Join our team</h2>
          <p className="join-text2">
            We are always looking for great professionals <br />
            and will be happy to increase our team with <br />
            your talent. You can view our open positions <br />
            or simply send us an email.
          </p>
          <button className="join-btn">View Positions</button>
        </div>
        <div className="join-img"> <img src={joinImg} alt="" /> </div>
      </div>
    </section>;
  } catch (e) { console.log(); }
};