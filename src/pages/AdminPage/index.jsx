import { useEffect, useState } from "react";
import Product from "../../components/products/product";
import remove from "../../assets/adminPage/remove.svg";
import add from "../../assets/adminPage/add.svg";
import "./index.css";

const AdminPage = () => {
  const storedProductos = localStorage.getItem("productos");
  const initialProductos = storedProductos ? JSON.parse(storedProductos) : {};

  const [productos, setProductos] = useState(initialProductos);
  const [titulo, setTitulo] = useState("");
  const [precio, setPrecio] = useState("");
  const [tamaño, setTamaño] = useState("");

  useEffect(() => {
    console.log(productos);
    localStorage.setItem("productos", JSON.stringify(productos));
  }, [productos]);

  const addProduct = () => {
    const productId = Date.now().toString();
    const newProduct = {
      titulo: titulo,
      precio: precio,
      tamaño: tamaño,
    };
    setProductos({ ...productos, [productId]: newProduct });
    setTitulo("");
    setPrecio("");
    setTamaño("");
  };

  const updateProduct = (productId, updatedProduct) => {
    setProductos({
      ...productos,
      [productId]: updatedProduct,
    });
  };

  const handleRemove = (productId) => {
    const updatedProductos = { ...productos };
    delete updatedProductos[productId];
    setProductos(updatedProductos);
  };

  return (
    <div className="adminpage">
      <h4>Paletas</h4>
      <ul className="paletas-container">
        {Object.keys(productos).map((productId) => (
          <Product
            key={productId}
            productId={productId}
            producto={productos[productId]}
            updateProduct={updateProduct}
            handleRemove={handleRemove}
          />
        ))}
        <li className=" add-container">
          {" "}
          <input
            type="text"
            className="paletas-container__input"
            placeholder="Nombre"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
          <input
            type="text"
            className="paletas-container__input"
            placeholder="Precio"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
          />
          <input
            type="text"
            className="paletas-container__input"
            placeholder="Tamaño"
            value={tamaño}
            onChange={(e) => setTamaño(e.target.value)}
          />
          <input
            className="paletas-container__add-button"
            type="submit"
            value="Agregar"
            onClick={addProduct}
          />
        </li>
      </ul>
    </div>
  );
};

export default AdminPage;
