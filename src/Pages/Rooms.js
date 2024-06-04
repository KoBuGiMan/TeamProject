import { useEffect, useState } from "react";
import Header from "./Header";
import "../CSS/Rooms.css";
import StandardRoom from "../component/StandardRoom";
import DeluxeRoom from "../component/DeluxeRoom";
import LuxuryRoom from "../component/LuxuryRoom";

function Rooms({ roomRole, setRoomRole }) {
  const [room, setRoom] = useState([]);

  const selectStandard = () => {
    setRoomRole("standard");
  };
  const selectDeluxe = () => {
    setRoomRole("deluxe");
  };
  const selectLuxury = () => {
    setRoomRole("luxury");
  };

  useEffect(() => {
    fetch("rooms")
      .then((res) => res.json())
      .then((data) => setRoom(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="roomBody">
      <nav className="roleBar">
        <div
          className="roleBar-content"
          style={{
            backgroundColor: roomRole === "standard" ? "#ced4da" : "white",
          }}
          onClick={selectStandard}
        >
          <span className="roleBar-content-text">STANDARD</span>
        </div>
        <div
          style={{
            backgroundColor: roomRole === "deluxe" ? "#ced4da" : "white",
          }}
          className="roleBar-content"
          onClick={selectDeluxe}
        >
          <span className="roleBar-content-text">DELUXE</span>
        </div>
        <div
          style={{
            backgroundColor: roomRole === "luxury" ? "#ced4da" : "white",
          }}
          className="roleBar-content"
          onClick={selectLuxury}
        >
          <span className="roleBar-content-text">LUXURY</span>
        </div>
      </nav>
      {roomRole === "standard" ? <StandardRoom /> : ""}
      {roomRole === "deluxe" ? <DeluxeRoom /> : ""}
      {roomRole === "luxury" ? <LuxuryRoom /> : ""}
    </div>
  );
}

export default Rooms;
