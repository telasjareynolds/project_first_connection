import "./Footer.css";
import { Link } from "react-router-dom";
import facebookIcon from "../../assets/facebook.png";
import locationIcon from "../../assets/location.png";
import mailIcon from "../../assets/mail.png";
import phoneIcon from "../../assets/phone.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__info">
        <img
          src="https://firstconnectionsva.yobo.dev/wp-content/uploads/2023/07/fav_icon_100x100.png"
          alt="logo"
          className="footer__logo"
        />
        <div className="footer__left-text">
          <p className="footer__copyright">Copyright © 2024 FirstConnections</p>
          <Link to="/privacy" className="footer__privacy-policy">
            Privacy Policy
          </Link>
        </div>
      </div>
      <div className="footer__cards">
        <div className="footer__card">
          <p className="footer__card-heading">Contact</p>
          <div className="footer__card-container">
            <img
              src={locationIcon}
              alt="location pin icon"
              className="footer__icon"
            />
            <p className="footer__card-text">Hopewell, Virginia 23860</p>
          </div>
          <div className="footer__card-container">
            <img src={phoneIcon} alt="Phone icon" className="footer__icon" />
            <p className="footer__card-text">804.458.6329 (ext. 2022)</p>
          </div>
          <div className="footer__card-container">
            <img src={mailIcon} alt="email icon" className="footer__icon" />
            <p className="footer__card-text">ksloan@arls.org</p>
          </div>
        </div>
        <div className="footer__card">
          <p className="footer__card-heading">Follow us!</p>
          <a href="https://www.facebook.com/firstconnectionsva" target="_blank">
            <img
              src={facebookIcon}
              alt="Facebook icon"
              className="footer__facebook"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
