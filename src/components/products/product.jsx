import React from "react";
import remove from "../../assets/adminPage/remove.svg";
import "./product.css";

const Product = ({ producto, productId, updateProduct, handleRemove }) => {
  const { titulo, precio, tamaño, descuento, categoria } = producto;

  const handleInputChange = (field, value) => {
    const updatedProduct = {
      ...producto,
      [field]: value,
    };
    updateProduct(productId, updatedProduct);
  };

  let total = precio - (precio * descuento) / 100;

  return (
    <li className="product">
      <input
        className="product-name"
        type="text"
        value={titulo}
        onChange={(e) => handleInputChange("titulo", e.target.value)}
      />
      <div className="product-priceSize">
        <input
          className="product-price"
          type="text"
          value={`$${precio}`}
          onChange={(e) => handleInputChange("precio", e.target.value)}
        />
        <input
          className="product-size"
          type="text"
          value={tamaño}
          onChange={(e) => handleInputChange("tamaño", e.target.value)}
        />
      </div>
      <div className="product-descuento">
        <p>Descuento: </p>
        <div className="product-descuento-concatenado">
          <input
            className="product-size"
            type="text"
            value={descuento}
            onChange={(e) => handleInputChange("descuento", e.target.value)}
          />
          <p>%</p>
        </div>
      </div>
      <select
        value={categoria}
        onChange={(e) => handleInputChange("categoria", e.target.value)}
      >
        <option value="paletas">Paleta</option>
        <option value="otros">Otro</option>
        <option value="potes">Pote Familiar</option>
        <option value="sabores">Sabor</option>
      </select>
      <p>Total: ${total}</p>
      <img
        src={remove}
        className="remove-icon"
        alt="Remove"
        onClick={(e) => handleRemove(productId)}
      />
    </li>
  );
};
export default Product;
