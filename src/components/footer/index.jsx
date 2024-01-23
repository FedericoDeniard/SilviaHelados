import ShopInfo from "../ShopInfo";
import "./index.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-pc">
        <p>Gualeguay/CABA</p>
        <p>Shopping los altos de Gualeguay</p>
        <p>Entre Rios 2940</p>
        <p>Abierto de 10am hasta las 22pm</p>
      </div>
      <div className="footer-mobile">
        <ShopInfo />
      </div>
    </footer>
  );
};
export default Footer;
