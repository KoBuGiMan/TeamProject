import { useEffect, useState } from "react";
import Header from "./Header";

function Rooms() {
  const [room, setRoom] = useState([]);
  useEffect(() => {
    fetch("rooms")
      .then((res) => {
        return res.json();
      })
      .then(function (data) {
        setRoom(data);
      });
  }, []);

  return (
    <>
      <div>
        <h2>객실 리스트</h2>
        <ul>
          {room.map((room) => (
            <li key={`%{room.id}`}>
              <p>ID: {room.id}</p>
              <p>Room Number: {room.roomNum}</p>
              <p>Room Price: {room.roomPrice}</p>
              <p>Room Count: {room.roomCount}</p>
              <p>Room Role: {room.roomRole}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default Rooms;
