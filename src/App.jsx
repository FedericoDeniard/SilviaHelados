import Header from "./components/header";
import Footer from "./components/footer";
import "./App.css";
import { useRef, useState } from "react";
import arrowleft from "./assets/arows/left.svg";
import arrowRight from "./assets/arows/right.svg";
import { useForm } from "react-hook-form";

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

  const workWithUs = () => {
    window.location.href = "#workWithUs";
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

  // Contact Form

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    alert("Enviando datos...");
    reset();
  });

  const handleInputChange = (event) => {
    autoExpand(event.target);
  };

  function autoExpand(textarea) {
    textarea.style.height = "fit-content";
    textarea.style.height = textarea.scrollHeight + "px";
  }

  // New scroll

  const containerRef = useRef(null);

  const scrollRight = () => {
    const container = containerRef.current;
    if (container) {
      container.scrollLeft += container.clientWidth;
    }
  };

  const scrollLeft = () => {
    const container = containerRef.current;
    if (container) {
      container.scrollLeft -= container.clientWidth;
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
        workWithUs={workWithUs}
        isActive={isActive}
        classActive={classActive}
      />

      <article className="article">
        <main className="about-us section" id="about-us">
          <h1 className="about-us__title title">Sobre Nosotros</h1>
        </main>
        <main className="products section" id="products">
          <h1 className="products__title title">Nuestros Productos</h1>
          <div className="products__pages" ref={containerRef}>
            <div className="paletas">
              <h4 className="subtitle">Paletas</h4>
              <ul className="paletas__list">
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
              <ul className="otros__list">
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
              <ul className="potes__list">
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
            onClick={scrollLeft}
            className="arrow-left arrow"
            src={arrowleft}
            alt="Left arrow"
          ></img>
          <img
            onClick={scrollRight}
            className="arrow-right arrow"
            src={arrowRight}
            alt="Left arrow"
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
        {/* Concact Form */}
        <main className="contact-us section" id="workWithUs">
          <h4 className="title">¿Queres distribuir nuestros helados?</h4>
          <form className="contact-us__form" onSubmit={onSubmit}>
            <div className="input-group">
              <input
                type="text"
                name="name"
                autoComplete="off"
                className="input"
                {...register("nombre", {
                  required: { value: true, message: "Ingrese su nombre" },
                  minLength: { value: 4, message: "Minímo 4 caracteres" },
                  maxLength: { value: 20, message: "Máximo 20 caracteres" },
                })}
              />
              <label className="user-label" htmlFor="name">
                Nombre
              </label>
              {errors.nombre && (
                <span className="form-errors">{errors.nombre.message}</span>
              )}
            </div>
            <div className="input-group">
              <input
                className="input"
                name="empresa"
                type="text"
                {...register("empresa")}
              />
              <label className="user-label" htmlFor="empresa">
                Empresa
              </label>
            </div>
            <div className="input-group">
              <input
                className="input"
                name="email"
                type="email"
                {...register("email", {
                  required: { value: true, message: "Ingrese su correo" },
                  pattern: {
                    value: /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]$/,
                    message: "Correo no válido",
                  },
                })}
              />
              <label className="user-label" htmlFor="email">
                Email
              </label>
              {errors.email && (
                <span className="form-errors">{errors.email.message}</span>
              )}
            </div>
            <div className="input-group">
              <select
                className="provincia"
                name="provincia"
                {...register("provincia", {
                  required: {
                    value: true,
                    message: "Porfavor, seleccione su provincia",
                  },
                })}
              >
                <option value="">Seleccione su provincia</option>
                <option value="CABA">Ciudad Autónoma de Buenos Aires</option>
                <option value="BA">Buenos Aires</option>
                <option value="CAT">Catamarca</option>
                <option value="CHA">Chaco</option>
                <option value="CHU">Chubut</option>
                <option value="COR">Córdoba</option>
                <option value="CTE">Corrientes</option>
                <option value="ER">Entre Ríos</option>
                <option value="FOR">Formosa</option>
                <option value="JUJ">Jujuy</option>
                <option value="LP">La Pampa</option>
                <option value="LR">La Rioja</option>
                <option value="MZA">Mendoza</option>
                <option value="MIS">Misiones</option>
                <option value="NQN">Neuquén</option>
                <option value="RN">Río Negro</option>
                <option value="SL">San Luis</option>
                <option value="SJ">San Juan</option>
                <option value="SC">Santa Cruz</option>
                <option value="SF">Santa Fe</option>
                <option value="SE">Santiago del Estero</option>
                <option value="TF">
                  Tierra del Fuego-Antártida e Islas del Atlántico Sur
                </option>
                <option value="TUC">Tucumán</option>
              </select>
              <label className="provincia-label" htmlFor="provincia">
                Provincia
              </label>
              {errors.provincia && (
                <span className="form-errors">{errors.provincia.message}</span>
              )}
              {watch("provincia") && (
                <>
                  <div className="input-group direccion">
                    <input
                      className="input"
                      type="text"
                      name="adress"
                      {...register("direccion", {
                        required: {
                          value: true,
                          message: "Porfavor, complete la dirección",
                        },
                      })}
                    />
                    <label className="user-label" htmlFor="adress">
                      Dirección
                    </label>
                  </div>
                  <div className="input-group cp">
                    <input
                      className="input"
                      type="text"
                      name="cp"
                      {...register("cp", {
                        required: {
                          value: true,
                          message: "Ingrese su código postal",
                        },
                        minLength: { value: 4, messagege: "Minimo 4 dígitos" },
                      })}
                    />
                    <label className="user-label" htmlFor="cp">
                      Código postal
                    </label>
                  </div>
                </>
              )}
            </div>

            <div className="input-group">
              <input
                className="input"
                name="subject"
                type="Subject"
                {...register("asunto")}
              />
              <label className="user-label" htmlFor="subject">
                Asunto
              </label>
            </div>
            <div className="input-group">
              <textarea
                className="provincia"
                name="mensaje"
                onInput={handleInputChange}
                {...register("mensaje", {
                  required: {
                    value: true,
                    message: "Por favor, ingrese su mensaje",
                  },
                  minLength: {
                    value: 20,
                    message: "Ingrese por lo menos 20 caracteres",
                  },
                })}
              />
              <label className="provincia-label" htmlFor="mensaje">
                Mensaje
              </label>
              {errors.mensaje && (
                <span className="form-errors">{errors.mensaje.message}</span>
              )}
            </div>
            <button className="send-form" type="submit">
              <span> Enviar</span>
            </button>
          </form>
        </main>
      </article>
      <Footer />
    </div>
  );
}

export default App;
