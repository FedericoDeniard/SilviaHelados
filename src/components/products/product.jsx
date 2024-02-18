import { useEffect, useState } from "react";
import productos from "../../products/paletas.json";
import remove from "../../assets/adminPage/remove.svg";
import "./product.css";

const Product = ({ producto, onDelete }) => {
  const [productData, setProductData] = useState(productos[producto]);

  useEffect(() => {
    console.log(productData);
  }, [productData]);

  const handleDelete = (index) => {
    onDelete(index);
  };

  const handleProductNameChange = (e, key) => {
    const updatedProductData = {
      ...productData,
      [key]: {
        ...productData[key],
        name: e.target.value,
      },
    };
    setProductData(updatedProductData);
  };

  const handleProductPriceChange = (e, key) => {
    // Implement your logic to handle product name change here
  };

  const handleProductSizeChange = (e, key) => {
    // Implement your logic to handle product name change here
  };

  const writeProduct = Object.keys(productData).map((key, index) => (
    <li className="product" key={key}>
      <input
        className="product-name"
        type="text"
        value={productData[key].name}
        onChange={(e) => handleProductNameChange(e, key)}
      />
      <div className="product-priceSize">
        {" "}
        <input
          className="product-price"
          type="text"
          value={productos[producto][key].price}
          onChange={(e) => handleProductPriceChange(e, key)}
        />
        <input
          className="product-size"
          type="text"
          value={productos[producto][key].size}
          onChange={(e) => handleProductSizeChange(e, key)}
        />
      </div>

      <img
        src={remove}
        className="remove-icon"
        alt="Remove"
        onClick={() => handleDelete(index)}
      />
    </li>
  ));

  return <>{writeProduct}</>;
};

export default Product;
