import logo from "../assets/logo.png";
import twitter from "../assets/twitter.png";
import facebook from "../assets/facebook.png";
import youtube from "../assets/youtube.png";
import instagram from "../assets/instagram.png";
import playstore from "../assets/playstore.png";
import appstore from "../assets/appstore.png";

function FooterBottom() {
  return (
    <div className="footer-bottom">
      <img src={logo} alt="Mcdonald Logo" className="nav-logo__img" />
      <p>©2025 McDonald's, 2017-2025 All rights reserved.</p>
      <ul className="footer-bottom-list">
        <li className="footer-bottom-list__item">
          <a href="#">Privacy</a>
        </li>
        <li className="footer-bottom-list__item">
          <a href="#">Terms & Conditions</a>
        </li>
        <li className="footer-bottom-list__item">
          <a href="#">Accessibility</a>
        </li>
      </ul>
      <div className="social-media">
        <a href="#">
          <img
            src={twitter}
            alt="Twitter Logo Link"
            className="social-media__img"
          />
        </a>
        <a href="#">
          <img
            src={facebook}
            alt="Facebook Logo Link"
            className="social-media__img"
          />
        </a>
        <a href="#">
          <img
            src={youtube}
            alt="Youtube Logo Link"
            className="social-media__img"
          />
        </a>
        <a href="#">
          <img
            src={instagram}
            alt="Instagram Logo Link"
            className="social-media__img"
          />
        </a>
      </div>
      <div className="app-store">
        <a href="#">
          <img
            src={playstore}
            alt="Play Store Logo Link"
            className="social-media__img"
          />
        </a>
        <a href="#">
          <img
            src={appstore}
            alt="App Store Logo Link"
            className="social-media__img"
          />
        </a>
      </div>
    </div>
  );
}

export default FooterBottom;
