import logo from "../../assets/mainlogo.png";
import instagram from "../../assets/instagram.svg";
import facebook from "../../assets/facebook.svg";
import tiktok from "../../assets/tiktok.svg";
import "./index.css";
import SocialMedia from "../SocialMedia";
import { useState } from "react";

const Header = ({
  aboutUs,
  products,
  flavors,
  isActive,
  workWithUs,
  classActive,
}) => {
  //Redirect Functions
  const instagramRedirect = () => {
    window.open("https://www.instagram.com/helado_silvia/");
  };
  const facebookRedirect = () => {
    window.open("https://www.facebook.com/heladosilvia");
  };

  const tiktokRedirect = () => {
    window.open("https://www.tiktok.com/@helado.silvia");
  };

  return (
    <header className="header">
      <div className="header__contact-info">
        <div className="header__contact-info__pc">
          <p>
            <strong>Email:</strong> silviapaleteria@gmail.com
          </p>
          <p>
            <strong>Teléfono: </strong> 1166521715 CABA / 3444 419359 Gualeguay
          </p>
          <div className="header__contact-info__social-media">
            <p className="social" onClick={instagramRedirect}>
              <img
                className="instagram-svg"
                alt="instagram"
                src={instagram}
              ></img>
              Instagram
            </p>
            <p className="social" onClick={facebookRedirect}>
              <img className="facebook-svg" alt="facebook" src={facebook}></img>
              Facebook
            </p>
            <p className="social" onClick={tiktokRedirect}>
              <img className="tiktok-svg" alt="tiktok" src={tiktok}></img>Tiktok
            </p>
          </div>
        </div>
        <div className="header__contact-info__mobile">
          <div
            onClick={classActive}
            className={`social-media__container ${isActive ? "active" : ""}`}
          >
            <SocialMedia isActive={isActive} />
          </div>
        </div>
      </div>
      <img className="main-logo" alt="Helado Silvia Logo" src={logo}></img>
      <div className="main_header">
        <h4 onClick={aboutUs} className="main-header__button">
          Nosotros
        </h4>
        <h4 onClick={products} className="main-header__button">
          Productos
        </h4>
        <h4 onClick={flavors} className="main-header__button">
          Sabores
        </h4>
        <h4 onClick={workWithUs} className="main-header__button">
          Redistribuí
        </h4>
      </div>
    </header>
  );
};
export default Header;
