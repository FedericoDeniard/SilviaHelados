import { useEffect, useState } from "react";
import Product from "../../components/products/product";
import remove from "../../assets/adminPage/remove.svg";
import add from "../../assets/adminPage/add.svg";
import "./index.css";

const AdminPage = () => {
  const storedProductos = localStorage.getItem("productos");
  const initialProductos = storedProductos ? JSON.parse(storedProductos) : [];

  const [productos, setProductos] = useState(initialProductos);
  const [titulo, setTitulo] = useState("");
  const [precio, setPrecio] = useState("");
  const [tamaño, setTamaño] = useState("");
  const [descuento, setDescuento] = useState("");
  const [categoria, setCategoria] = useState("");

  useEffect(() => {
    localStorage.setItem("productos", JSON.stringify(productos));
    console.log(productos);
  }, [productos]);

  const addProduct = () => {
    const newProduct = {
      productId: Date.now().toString(),
      titulo: titulo,
      precio: precio,
      tamaño: tamaño,
      descuento: descuento,
      categoria: categoria,
    };
    setProductos([...productos, newProduct]);
    setTitulo("");
    setPrecio("");
    setTamaño("");
    setDescuento("");
    setCategoria("");
  };

  const updateProduct = (productId, updatedProduct) => {
    const updatedProductos = productos.map((product) =>
      product === productId ? updatedProduct : product
    );
    setProductos(updatedProductos);
  };

  const handleRemove = (productId) => {
    const updatedProductos = productos.filter(
      (product) => product !== productId
    );
    setProductos(updatedProductos);
  };

  return (
    <div className="adminpage">
      <h4>Paletas</h4>
      <ul className="paletas-container">
        {productos.map((product, index) => (
          <Product
            key={index}
            productId={index}
            producto={product}
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
            type="text"
            className="paletas-container__input"
            placeholder="Descuento"
            value={descuento}
            onChange={(e) => setDescuento(e.target.value)}
          />
          <select>
            <option value="paletas">Paleta</option>
            <option value="otros">Otro</option>
            <option value="potes">Pote Familiar</option>
            <option value="sabores">Sabor</option>
          </select>
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
