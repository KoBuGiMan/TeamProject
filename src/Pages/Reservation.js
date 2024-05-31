import { useEffect, useState } from "react";
import Header from "./Header";

function Reservation() {
  const [res, setRes] = useState([]);

  useEffect(() => {
    fetch("reservations")
      .then((res) => {
        return res.json();
      })
      .then(function (data) {
        setRes(data);
      });
  }, []);

  return (
    <>
      <div>
        <h2>예약 리스트</h2>
        <ul>
          {res.map((res) => (
            <li key={`%{res.id}`}>
              <p>ID: {res.id}</p>
              <p>Name: {res.name}</p>
              <p>Email: {res.email}</p>
              <p>Phone: {res.phone}</p>
              <p>Room Number: {res.roomNum}</p>
              <p>Room Price: {res.roomPrice}</p>
              <p>Room Count: {res.roomCount}</p>
              <p>Room Role: {res.roomRole}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default Reservation;
