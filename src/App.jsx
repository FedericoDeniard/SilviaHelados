import Header from "./components/header";
import Footer from "./components/footer";
import "./App.css";
import { useEffect, useRef, useState } from "react";
import arrowleft from "./assets/arows/left.svg";
import arrowRight from "./assets/arows/right.svg";

function App() {
  // Header redirections
  const aboutUs = () => {
    window.location.href = "#about-us";
  };
  const products = () => {
    window.location.href = "#products";
  };

  const flavors = () => {
    window.location.href = "#flavors";
  };

  const [isActive, setIsActive] = useState(false);

  const classActive = () => {
    setIsActive(!isActive);
  };

  const classActiveRemove = (event, toRemove) => {
    if (
      event.type === "touchstart" &&
      !event.target.closest(toRemove) &&
      !event.target.classList.contains(toRemove.slice(1))
    ) {
      setIsActive(false);
    }
  };

  //  ProductScroll
  const product0 = useRef(null); //Paletas
  const product1 = useRef(null); //Otros
  const product2 = useRef(null); //Potes familiares

  const [scrollProductPosition, setScrollProductPosition] = useState(0);

  const scrollRightIndex = () => {
    if (scrollProductPosition < 2) {
      setScrollProductPosition(scrollProductPosition + 1);
    }
  };

  const scrollLeftIndex = () => {
    if (scrollProductPosition > 0) {
      setScrollProductPosition(scrollProductPosition - 1);
    }
  };

  useEffect(() => {
    switch (scrollProductPosition) {
      case 0:
        product0.current.scrollIntoView({
          behavior: "smooth",
          inline: "center",
        });
        break;
      case 1:
        product1.current.scrollIntoView({
          behavior: "smooth",
          inline: "center",
        });
        break;
      case 2:
        product2.current.scrollIntoView({
          behavior: "smooth",
          inline: "center",
        });
        break;
    }
  }, [scrollProductPosition]);

  return (
    <div
      onClick={() => {
        classActiveRemove(".social-media__container");
      }}
      onTouchStart={(event) =>
        classActiveRemove(event, ".social-media__container")
      }
    >
      <Header
        aboutUs={aboutUs}
        products={products}
        flavors={flavors}
        isActive={isActive}
        classActive={classActive}
      />

      <article className="article">
        <main className="about-us section" id="about-us">
          <h1 className="about-us__title title">Sobre Nosotros</h1>
        </main>
        <main className="products section" id="products">
          <h1 className="products__title title">Nuestros Productos</h1>
          <div className="products__pages">
            <div className="paletas">
              <h4 className="subtitle">Paletas</h4>
              <ul className="paletas__list" ref={product0}>
                <li> BANANA SPLIT 110 g</li>
                <li> BANANA 110 g</li>
                <li> CHOCO CHIPS 110 g</li>
                <li> CHOCOLATE 110 g</li>
                <li> CREMA DEL CIELO 110 g</li>
                <li> DDL GRANIZADO 110 g</li>
                <li> DULCE DE LECHE 110 g</li>
                <li> DUO CHOCO / DDL 110 g</li>
                <li> DUO CHOCO / FRESA 110 g</li>
                <li> DUO MANTE / DDL 110g</li>
                <li> DUO MANTE/CHOCO 110 g</li>
                <li> DUO MANT/FRESA 110 g</li>
                <li> FRESA 110 g</li>
                <li> FRESA TOVAR 110 g</li>
                <li> FRUTOS ROJOS 110 g</li>
                <li> MANTECADO 110 g</li>
                <li> MANTECADO OREO 110 g</li>
                <li> MENTA GRANIZADA 110 g</li>
                <li> PISTACHO 110 g</li>
                <li> SUPER DULCE DE LECHE 110 g</li>
                <li> TRAMONTANA 110 g</li>
                <li> NARANJA / VAINILLA 110 g</li>
              </ul>
            </div>
            <div className="otros">
              <h4 className="subtitle"> Otros </h4>
              <ul className="otros__list" ref={product1}>
                <li>Batido</li>
                <li>Milkshake</li>
                <li>Paleta Grande</li>
                <li>Paleta Pequeña</li>
                <li>Conos 1 Bocha / 2 Bochas / 3 Bochas</li>
                <li>Capelina</li>
                <li>Tinitas</li>
                <li>Vasitos</li>
              </ul>
            </div>
            <div className="potes">
              <h4 className="subtitle">Potes Familiares</h4>
              <ul className="potes__list" ref={product2}>
                <li>Pote Banana Split 1L</li>
                <li>Pote Choco Chips 1L</li>
                <li>Pote Chocolate 1L</li>
                <li>Pote Crema del Cielo 1L</li>
                <li>Pote DDL Granizado 1L</li>
                <li>Pote Dulce de Leche 1L</li>
                <li>Pote Duo Fresa / DDL 1L</li>
                <li>Pote DuoFresa / Choco 1L</li>
                <li>Pote Duo Mant / DDL 1L</li>
                <li>Pote Duo Mant/Choco 1L</li>
                <li>Pote Duo Mant/Fresa 1L</li>
                <li>Pote Fresa 1L</li>
                <li>Pote Fresa Tovar 1L</li>
                <li>Pote Frutos Rojos 1L</li>
                <li>Pote Mantecado 1L</li>
                <li>Pote Mantecado Oreo 1L</li>
                <li>Pote Menta Granizada 1L</li>
                <li>Pote Pistacho 1L</li>
                <li>Pote Super Dulce de Leche 1L</li>
                <li>Pote Tramontana 1L</li>
                <li>Pote Naranja / Vainilla 1L</li>
                <li>Pote Napolitano 1L</li>
                <li>Pote Napolitano 3L</li>
              </ul>
            </div>
          </div>
          <img
            onClick={scrollLeftIndex}
            className="arrow-left arrow"
            src={arrowleft}
          ></img>
          <img
            onClick={scrollRightIndex}
            className="arrow-right arrow"
            src={arrowRight}
          ></img>
        </main>
        <main className="flavors section" id="flavors">
          <h1 className="flavors__title title">Sabores de helado</h1>
          <ul className="flavors__list">
            <ul>
              <li>
                <strong className="flavors__strong">Helado para servir</strong>
              </li>
              <li>1/4 Kg Helado Artesanal</li>
              <li>1/2 Kg Helado Artesanal</li>
              <li>1 Kg Helado Artesanal</li>
            </ul>
            <ul>
              <li>
                <strong className="flavors__strong">Crema</strong>
              </li>
              <li>Banana</li>
              <li>Banana Split</li>
              <li>Crema del Cielo</li>
              <li>Fresa</li>
              <li>Fresa Tovar</li>
              <li>Naranja-Vainilla</li>
              <li>Pistacho</li>
              <li>Toddy</li>
            </ul>

            <ul>
              <li>
                <strong className="flavors__strong">Dulce de leche</strong>
              </li>
              <li>Dulce de Leche Clásico</li>
              <li>Dulce de Leche Granizado</li>
              <li>Super Dulce de Leche</li>
              <li>Dulce de Leche con Maní</li>
              <li>Dulce de Leche con Oreo</li>
              <li>Chocotorta</li>
            </ul>

            <ul>
              <li>
                <strong className="flavors__strong">Chocolate</strong>
              </li>
              <li>Chocolate Clásico</li>
              <li>Chocolate Granizado</li>
              <li>Chocolate Shot</li>
              <li>Chocolate Almendra</li>
              <li>Chocolate Tentación</li>
              <li>Chocolate Blanco</li>
              <li>Ferrero Rocher</li>
              <li>Chocolate Bariloche</li>
            </ul>

            <ul>
              <li>
                <strong className="flavors__strong">Crema</strong>
              </li>
              <li>Mantecado</li>
              <li>Mantecado Clásico</li>
              <li>Mantecado Granizado</li>
              <li>Mantecado Oreo</li>
              <li>Mantecado Dulce de Leche</li>
              <li>Tramontana</li>
              <li>Torta Suiza</li>
            </ul>

            <ul>
              <li>
                <strong className="flavors__strong">Especiales</strong>
              </li>
              <li>Coco</li>
              <li>Cheesecake</li>
              <li>Ron Pasas</li>
              <li>Frutos Rojos</li>
              <li>Menta Granizada</li>
            </ul>
          </ul>
        </main>
      </article>
      <Footer />
    </div>
  );
}

export default App;
