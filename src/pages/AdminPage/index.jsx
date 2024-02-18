import { useState } from "react";
import productos from "../../products/paletas.json";
import Product from "../../components/products/product";
import remove from "../../assets/adminPage/remove.svg";
import add from "../../assets/adminPage/add.svg";
import "./index.css";

const AdminPage = () => {
  const [paletas, setPaletas] = useState([productos.paletas]);
  console.log(paletas);

  const handleDelete = (index) => {
    const updatePaletas = [...productos.paletas];
    const filteredPaletas = updatedPaletas.filter((_, i) => i !== index);
    setPaletas(filteredPaletas);
  };

  return (
    <div className="adminpage">
      <h4>Paletas</h4>
      <ul className="paletas-container">
        <Product producto="paletas" onDelete={handleDelete} />
        <li className=" add-container">
          {" "}
          <input type="text" className="paletas-container__add"></input>
          <img src={add} className="add-icon" />
        </li>
      </ul>
    </div>
  );
};

export default AdminPage;
