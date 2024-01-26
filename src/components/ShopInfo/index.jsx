import "./index.css";
import location from "../../assets/location.svg";
import time from "../../assets/time.svg";
import { useState } from "react";

const ShopInfo = () => {
  const [locationIsPressed, setLocationIsPressed] = useState(false);
  const [timeIsPressed, setTimeIsPressed] = useState(false);

  const locationPressed = () => {
    setLocationIsPressed(true);
  };
  const timePressed = () => {
    setTimeIsPressed(true);
  };

  const clearTimePressed = () => {
    setTimeIsPressed(false);
  };

  const clearLocationPressed = () => {
    setLocationIsPressed(false);
  };

  const disableContextMenu = (event) => {
    event.preventDefault();
  };

  return (
    <ul className="example-1">
      <li
        className={`icon-content ${locationIsPressed ? "pressed" : ""}`}
        onTouchStart={locationPressed}
        onTouchEnd={clearLocationPressed}
        onContextMenu={disableContextMenu}
      >
        <a className="link" data-social="location" aria-label="location">
          <img className="location-img" alt="ubicación" src={location}></img>
        </a>
        <div className="tooltip">
          Gualeguay/CABA
          <br />
          Entre Rios 2940
          <br />
        </div>
      </li>
      <li
        className={`icon-content ${timeIsPressed ? "pressed" : ""}`}
        onTouchStart={timePressed}
        onTouchEnd={clearTimePressed}
        onContextMenu={disableContextMenu}
      >
        <a className="link" data-social="time" aria-label="time">
          <img className="time-img" alt="horario" src={time}></img>
        </a>
        <div className="tooltip">Abierto de 10am a 22pm</div>
      </li>
    </ul>
  );
};
export default ShopInfo;
