import Header from "./components/header";
import Footer from "./components/footer";
import "./App.css";
import { useState } from "react";

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
        </main>
        <main className="flavors section" id="flavors">
          <h1 className="flavors__title title">Sabores de helado</h1>
          <ul className="flavors__list">
            <li>Mantecado y Oreo</li>
            <li>Fresa Tovar</li>
            <li>Mantecado y Dulce de Leche</li>
            <li>Crema del cielo</li>
            <li>Duo Mantecado y Chocolate</li>
            <li>Limón</li>
            <li>Kiwi y Naranja</li>
            <li>Ananá</li>
            <li>Palito Napolitano</li>
          </ul>
        </main>
      </article>
      <Footer />
    </div>
  );
}

export default App;
