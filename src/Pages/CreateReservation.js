import axios from "axios";
import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.module.css";
import "../CSS/CreateReservation.css";
import DateCheck from "../component/DateCheck";
import RoomList from "../component/RoomList";

function CreateReservation() {
  const [room, setRoom] = useState([]);
  const [roomId, setRoomId] = useState("");

  // const OnDateClick = () => {
  //   axios
  //     .post("/reservations/success", {
  //       startDate: startDate,
  //       endDate: endDate,
  //       roomId: roomId,
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  useEffect(() => {
    fetch("/rooms")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setRoom(data);
      });
  }, []);

  const seleced = (roomNum) => {
    setRoomId(roomNum);
  };

  return (
    <div className="createReservationBody">
      <div>
        <div className="reservationTitle">
          <span className="reservationTitle-text">날짜, 인원 선택</span>
        </div>
      </div>
      <DateCheck />
      <div>
        {/* <div>{roomId}</div>
        <button onClick={OnDateClick}>입력</button> */}
      </div>
      <RoomList />
    </div>
  );
}
export default CreateReservation;
