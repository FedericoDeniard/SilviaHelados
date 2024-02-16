import Header from "./components/header";
import Footer from "./components/footer";
import "./App.css";
import { useRef, useState } from "react";
import arrowleft from "./assets/arows/left.svg";
import arrowRight from "./assets/arows/right.svg";
import { useForm } from "react-hook-form";
import productos from "./products/paletas.json";

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

  const writePaletas = Object.keys(productos.paletas).map((key) => (
    <li key={key}>{productos.paletas[key].name}</li>
  ));

  const writeSabores = Object.keys(productos.sabores).map((key) => (
    <li key={key}>{productos.sabores[key].name}</li>
  ));

  const writeOtros = Object.keys(productos.otros).map((key) => (
    <li key={key}>{productos.otros[key].name}</li>
  ));

  const writePotes = Object.keys(productos.potes).map((key) => (
    <li key={key}>
      {productos.potes[key].name} {productos.potes[key].size}
    </li>
  ));

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
              <ul className="paletas__list">{writePaletas}</ul>
            </div>
            <div className="otros">
              <h4 className="subtitle"> Otros </h4>
              <ul className="otros__list">{writeOtros}</ul>
            </div>
            <div className="potes">
              <h4 className="subtitle">Potes Familiares</h4>
              <ul className="potes__list">{writePotes}</ul>
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
          <ul className="flavors__list">{writeSabores}</ul>
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
