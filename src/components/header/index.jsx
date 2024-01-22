import logo from "../../assets/mainlogo.png";
import instagram from "../../assets/instagram.svg";
import "./index.css";

const Header = ({ aboutUs, products, flavors }) => {
  return (
    <header className="header">
      <div className="header__contact-info">
        <p>Contacto: heladeria@gmail.com</p>
        <div className="header__contact-info__social-media">
          <p>
            <img className="instagram-svg" src={instagram}></img>Instagram
          </p>
          <p>facebook</p>
          <p>otras</p>
        </div>
      </div>
      <img className="main-logo" src={logo}></img>
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
      </div>
    </header>
  );
};
export default Header;
