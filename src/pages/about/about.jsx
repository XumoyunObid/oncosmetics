import React from "react";
import './about.css'
import joinImg from '../../assets/about-img/join_team.svg'

export const About = () => {
  try {
    return <>
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
    </>;
  } catch (e) { console.log(); }
};