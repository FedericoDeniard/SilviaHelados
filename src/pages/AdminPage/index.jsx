import { useEffect, useState, useRef } from "react";
import Product from "../../components/products/product";
import "./index.css";
import edit from "../../assets/adminPage/edit.svg";
import check from "../../assets/adminPage/check.svg";

const AdminPage = () => {
  const storedProductos = localStorage.getItem("productos");
  const initialProductos = storedProductos ? JSON.parse(storedProductos) : [];

  const [productos, setProductos] = useState(initialProductos);
  const tituloRef = useRef("");
  const precioRef = useRef("");
  const tamañoRef = useRef("");
  const descuentoRef = useRef("");
  const stockRef = useRef("");
  const categoriaRef = useRef("paletas");

  useEffect(() => {
    localStorage.setItem("productos", JSON.stringify(productos));
    console.log(productos);
  }, [productos]);

  const addProduct = () => {
    const newProduct = {
      productId: Date.now().toString(),
      titulo: tituloRef.current.value,
      precio: precioRef.current.value,
      tamaño: tamañoRef.current.value,
      descuento: descuentoRef.current.value,
      categoria: categoriaRef.current.value,
      stock: stockRef.current.value,
    };
    setProductos([...productos, newProduct]);

    tituloRef.current.value = "";
    precioRef.current.value = "";
    tamañoRef.current.value = "";
    descuentoRef.current.value = "";
    stockRef.current.value = "";
    categoriaRef.current.value = "paletas";
  };

  const updateProduct = (updatedProduct) => {
    const updatedProductos = productos.map((product) =>
      product.productId === updatedProduct.productId ? updatedProduct : product
    );
    setProductos(updatedProductos);
  };

  const handleRemove = (productId) => {
    const updatedProductos = productos.filter(
      (product) => product.productId !== productId
    );
    setProductos(updatedProductos);
  };

  const [editStatus, setEditStatus] = useState(false);

  const editProducts = () => {
    setEditStatus(!editStatus);
  };

  return (
    <div className="adminpage">
      <h4>Paletas</h4>
      <ul className="paletas-container">
        <div className="paletas-container__title">
          <p>Producto</p>
          <p>Precio</p>
          <p>Tamaño</p>
          <p>Descuento</p>
          <p>Stock</p>
          <p>Categoria</p>
          <p>Total</p>
          <img
            src={editStatus ? check : edit}
            className="remove-icon"
            onClick={editProducts}
          />
        </div>
        {productos.map((product) => (
          <Product
            key={product.productId}
            productId={product.productId}
            producto={product}
            updateProduct={updateProduct}
            handleRemove={handleRemove}
            editStatus={editStatus}
          />
        ))}
      </ul>
      <ul>
        <li className=" add-container">
          {" "}
          <input
            ref={tituloRef}
            type="text"
            className="paletas-container__input"
            placeholder="Nombre"
          />
          <input
            ref={precioRef}
            type="text"
            className="paletas-container__input"
            placeholder="Precio"
          />
          <input
            ref={tamañoRef}
            type="text"
            className="paletas-container__input"
            placeholder="Tamaño"
          />
          <input
            ref={descuentoRef}
            type="text"
            className="paletas-container__input"
            placeholder="Descuento"
          />
          <input
            ref={stockRef}
            className="paletas-container__input"
            type="text"
            placeholder="Stock"
          ></input>
          <select ref={categoriaRef}>
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
