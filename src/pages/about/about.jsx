import React from "react";
import './about.css'
import joinImg from '../../assets/about-img/join_team.svg'
import founderImg from '../../assets/about-img/founder-img.svg'
import cardImg_1 from '../../assets/about-img/aboutCard-img-1.svg'
import cardImg_2 from '../../assets/about-img/aboutCard-img-2.svg'
import cardImg_3 from '../../assets/about-img/aboutCard-img-3.svg'
import cards_img_1 from '../../assets/about-img/cards-img-1.svg'
import cards_img_2 from '../../assets/about-img/cards-img-2.svg'
import whatsappImg from '../../assets/about-img/whatsapp.svg'
import aboutHero from '../../assets/about-img/aboutHero.svg'

const AboutCard = ({ img, title, text }) => {
  try {
    return <div className="about-cards">
      <div className="cards-img_1"> <img src={img} alt="Card img" /> </div>
      <div className="cards-title">
        <h3 className="cards-text1">{title}</h3>
        <p className="cards-text2">{text}</p>
      </div>
    </div>
  } catch (e) {
  }
}
const AboutHero = () => {
  try {
    return <div className="about-hero">
      <div className="hero-title">
        <h2 className="hero-text1">Hallo zusammen!</h2>
        <h5 className="hero-text2">Wir sind der offizielle und einzige ONmacabim-Distributor in Deutschland.</h5>
        <h5 className="hero-text2">Wir sind zwei Geschäftspartner, Lolita Fedorova und Zulkhumor Sabyrova</h5>
      </div>
      <img className="hero-img" src={aboutHero} alt="Hero img" />
    </div>
  } catch (e) { console.log(e); }
}
const AboutCardsDiv = () => {
  try {
    return <div className="aboutCards-div">
      <div className="aboutCards-div-1">
        <ul className="two-title">
          <li> <a className="a-link" href="">Datenschutzerklärung</a> </li>
          <li className="impressum"> <a className="a-link" href="">Impressum</a> </li>
        </ul>
        <div className="sevn-text">
          <p>Adresse:</p>
          <p> <a className="a-link" href="">Kaiser-Friedrich-Strasse 19, 10585 Berlin</a> </p>
          <p>Termine nach Vereinbarung</p>
          <p>RU / DE / UA</p>
          <p className="telefonNumber"> <img src={whatsappImg} alt="" /> +49 176 436 036 89 </p>
          <p>ENG / RU</p>
          <p className="telefonNumber"> <img src={whatsappImg} alt="" /> +49 157 381 811 78 </p>
        </div>
      </div>
      <div className="aboutCards-div-2">
        <div className="div-2-title">
          <AboutCard img={cardImg_1} title={'Vegan & cruelty free'} text={'All products are 100% Vegan and have been registered with the Vegan Society. We will never test our products or ingredients on animals nor do we use suppliers who test them on our behalf.'} />
          <AboutCard img={cardImg_2} title={'Green beauty'} text={'We avoid any raw materials that are considered toxic or harmful to sensitive skin. If the safety of an ingredient is unclear, we avoid it until more concrete evidence is available.'} />
          <AboutCard img={cardImg_3} title={'Made in France'} text={'We avoid any raw materials that are considered toxic or harmful to sensitive skin. If the safety of an ingredient is unclear, we avoid it until more concrete evidence is available.'} />
        </div>
        <div className="aboutCards-div-2-img">
          <img src={cards_img_1} alt="Img" />
          <img className="cards_img_2" src={cards_img_2} alt="Img 2 absolute" />
        </div>
      </div>
    </div>
  } catch (e) { console.log(e); }
}
const Founder = () => {
  try {
    return (
      <div className="founder-container">
        <div className="founder-img"> <img src={founderImg} alt="" /> </div>
        <div className="founder-title">
          <h2 className="founder-text">From founder</h2>
          <p className="founder-text2">
            Dear friends, I would certainly love to meet <br />
            you all in person, so come and just say hi. If <br />
            it's not possible at the moment, I would like to <br />
            introduce myself, I'm Vicky, the founder of the <br />
            Beauty Shop. I'm certain that new lipstick and <br />
            body scrub can make your day better.
          </p>
          <p className="founder-text3">- Vicky Underwood</p>
        </div>
      </div>
    )
  } catch (e) { console.log(e); }
}
const OurMission = () => {
  try {
    return (
      <div className="ourMission-div">
        <h3 className="mission-title">Our Mission</h3>
        <p className="mission-text">
          “For a long time I was looking to create a new <br />
          beauty brand that is different. Our beauty experts <br />
          use ingredients that work and that everyone <br /> understands. ”
        </p>
      </div>
    )
  } catch (e) { console.log(e); }
}
const Discover = () => {
  try {
    return (
      <div className="discover-div">
        <h3 className="discover-title">Discover our products</h3>
        <p className="discover-text">
          We have skincare, body, wellbeing products and amazing <br /> frangrance range. All made with love in France.
        </p>
        <button className="discover-btn">Shop All</button>
      </div>
    )
  } catch (e) { console.log(e); }
}
const JoinTeam = () => {
  try {
    return (
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
    )
  } catch (e) { console.log(e); }
}

// Import uchun About
export const About = () => {
  try {
    return <section className="about-container">
      <AboutHero />
      <AboutCardsDiv />
      <Founder />
      <OurMission />
      <Discover />
      <JoinTeam />
    </section>;
  } catch (e) { console.log(); }
};