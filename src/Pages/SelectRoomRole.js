import { useState } from "react";
import "../CSS/SelectRoomRole.css";
import { useNavigate } from "react-router-dom";

function SelectRoomRole({ setRoomRole }) {
  const [standard, setStandard] = useState(false);
  const [deluxe, setDeluxe] = useState(false);
  const [luxury, setLuxury] = useState(false);
  const nav = useNavigate();

  const standChange = () => {
    setStandard((prev) => !prev);
  };

  const deluxeChange = () => {
    setDeluxe((prev) => !prev);
  };

  const luxuryChange = () => {
    setLuxury((prev) => !prev);
  };

  const standardroom = () => {
    setRoomRole("standard");
    nav("/rooms");
  };

  const deluxeroom = () => {
    setRoomRole("deluxe");
    nav("/rooms");
  };

  const luxuryroom = () => {
    setRoomRole("luxury");
    nav("/rooms");
  };

  return (
    <div className="select">
      <div className="selectbody">
        <div
          className="standard"
          style={{ opacity: standard ? "100%" : "50%" }}
          onMouseOver={standChange}
          onMouseOut={standChange}
          onClick={standardroom}
        >
          <span className="room-text">STANDARD</span>
        </div>
        <div
          className="deluxe"
          style={{ opacity: deluxe ? "100%" : "50%" }}
          onMouseOver={deluxeChange}
          onMouseOut={deluxeChange}
          onClick={deluxeroom}
        >
          <span className="room-text">DELUXE</span>
        </div>
        <div
          className="luxury"
          style={{ opacity: luxury ? "100%" : "50%" }}
          onMouseOver={luxuryChange}
          onMouseOut={luxuryChange}
          onClick={luxuryroom}
        >
          <span className="room-text">LUXURY</span>
        </div>
      </div>
    </div>
  );
}

export default SelectRoomRole;
