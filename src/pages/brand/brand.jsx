import React from "react";
import "../brand/brand.css";
import HeaderImg from "../../assets/brand/brand-header.png";
import MainImg from "../../assets/brand/main-img1.png";
import youtube from "../../assets/brand/youtube.svg";
import sectionImg from "../../assets/brand/section-img.svg";
import { Link } from "react-router-dom";
import WhatsApp from '../../assets/brand/whatsApp.svg'

function Brand() {
  return (
    <div>
      <img className="header-img" src={HeaderImg} alt="" />
      <div className="container ">
        <div className="d-flex">
          <h1>About Brand ONmacabim</h1>
          <p className="header-p">
            Place where our crazy-talented master stylists will not only do a
            haircut or makeup.
          </p>
        </div>
      </div>
      <div className="container">
        <h2 className="main-h2">ONmacabim. Made in Uzbekistan with LOVE</h2>
        <p className="main-p">
          ONmacabim ist ein führender Hersteller von kosmezeutischen
          Hautpflegeprodukten in Israel. Seit dem Jahr 2000 verwaltet das
          Unternehmen den gesamten Zyklus der Produktentwicklung: Kontrolle des
          Anbaus von Pflanzen aus der Judäischen Wüste, deren Sammlung und
          Verarbeitung, Rezepturentwicklung, Tests, Lizenzierung und Produktion
          mit modernsten Anlagen. Eine der Stärken von ONmacabim ist seine
          vielfältige Produktpalette, die nahtlos zusammenarbeitet und von
          Spezialisten kombiniert werden kann, um klinische Ergebnisse zu
          erzielen. Die Wirkstoffe sind Pflanzenextrakte, die durch geschützte
          Extraktionsverfahren in hoher Konzentration gewonnen werden. Die
          Formulierungen der kosmetischen Mittel enthalten keine Mineralöle,
          künstlichen Farb- und Duftstoffe oder Bestandteile tierischen
          Ursprungs. Exklusive professionelle und häusliche Pflege, ausgewählt
          von einem Spezialisten, garantiert die gewünschten Ergebnisse in
          kürzester Zeit.
        </p>
      </div>
      <div className="container main-flex">
        <div className="img-div">
          <img className="main-img" src={MainImg} alt="" />
          <img className="youtube" src={youtube} alt="" />
        </div>
        <ul className="main-ul">
          <li className="main-h3">Eigenschaften von ONmacabim cosmetics</li>
          <li className="main-li">
            Lösungen für mehrere kosmetische Probleme in einer einzigen
            Behandlung;
          </li>
          <li className="main-li">
            Individuelles Herangehen an jeden Kunden, individuelle
            Behandlungsprotokolle auf der Grundlage der ästhetischen Probleme
          </li>
          <li className="main-li">Kombinierbarkeit mit Gerätetechniken;</li>
          <li className="main-li">
            Vorteil der Verwendung von Präparaten aus verschiedenen Linien in
            einem Verfahren;
          </li>
          <li className="main-li">Absolute Sicherheit in der Anwendung;</li>
        </ul>
      </div>

      <section className="container flex ">
        <div className="section-text">
          <h3 className="section-h3">
            Herkunft der Pflanzen für ONmacabim Cosmeceuticals
          </h3>
          <div className="section-p-flex">
            <p className="section-p">
              Die Judäische Wüste ist eine einzigartige Region an der Küste des
              Toten Meeres. Die Kräuter, die in der Region wachsen, sind seit
              über zweitausend Jahren für ihre heilende Wirkung bekannt.
            </p>
            <p className="section-p">
              Die rauen klimatischen Bedingungen der Wüste zwingen die Pflanzen
              dazu, eine große Anzahl nützlicher Inhaltsstoffe anzusammeln und
              zu bewahren. Alte Manuskripte enthalten häufig Beschreibungen der
              verschiedenen Möglichkeiten, die Kräuter der judäischen Wüste zur
              Behandlung verschiedener Krankheiten einzusetzen.
            </p>
          </div>
        </div>
        <div>
          <img className="brand-section-img" src={sectionImg} alt="" />
        </div>
      </section>

      <section className="container brand-section-2">
        <h3 className="brand-section-h3-2">
          Möchtest du die Marke ONmacabim besser <br /> kennen lernen?
        </h3>

        <p className="brand-section-p-2">
          Dann melde dich bei uns auf <Link to="#">Instagram</Link> oder{" "}
          <Link to="#">WhatsApp!</Link>
        </p>
        <div className="brand-address-section">
          <div>
            <ul className="brand-address"> 
              <li>
                <Link to="#">Datenschutzerklärung</Link>
              </li>
              <li>
                <Link to="#">Impressum</Link>
              </li>
            </ul>
          </div>
          <div className="brand-tel-layout">
            <h5>Adresse:</h5>
            <p>
              <Link to="#">Kaiser-Friedrich-Strasse 19, 10585 Berlin</Link>
            </p>
            <h5>Termine nach Vereinbarung</h5>
            <p>RU / DE / UA</p>
            <div className="section-tel">
              <img src={WhatsApp} alt="" />
              <span>+49 176 436 036 89</span>
            </div>

            <p>ENG / RU</p>
            <div className="section-tel">
              <img src={WhatsApp} alt="" />
              <span>+49 157 381 811 78</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Brand;
