import "./instagram.css"
import InstagramIcon from './../../../../assets/icons/InstagramIcon';

//////////////////////////
import Girl from "../../../../assets/home/lookinggirl.png"
import Acre from "../../../../assets/home/actAcre.png"
import Chanel from "../../../../assets/home/chanel.png"
import Face from "../../../../assets/home/face.png"
import Gel from "../../../../assets/home/gel.png"
import Hand from "../../../../assets/home/hand.png"
import Necessaire from "../../../../assets/home/necessaire.png"


const Instagram = () => {
  return (
    <section className="instagram">
      <div className="instagram-wrapper">
        <h1 className="instagram-title"><InstagramIcon/> Instagram</h1>
        <div className="instagram-imgs">
          <img src={Girl} className="girlFace" />
          <img src={Hand} />
          <img src={Acre} />
          <img src={Face} />
          <img src={Necessaire} />
          <img src={Gel} />
          <img src={Chanel} />
        </div>
        <button className="shopBtn">Follow Us @beautyshop</button>
      </div>
    </section>
  )
}

export default Instagram
