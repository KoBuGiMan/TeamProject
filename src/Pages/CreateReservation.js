import axios from "axios";
import { useEffect, useState } from "react";
import "react-datepicker/dist/react-datepicker.module.css";
import "../CSS/CreateReservation.css";
import DateCheck from "../component/DateCheck";
import RoomList from "../component/RoomList";

function CreateReservation({
  isLogin,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  sum,
  setSum,
}) {
  const [room, setRoom] = useState([]);
  const [roomId, setRoomId] = useState("");

 

  useEffect(() => {
    fetch("/rooms")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setRoom(data);
      });
  }, []);

  return (
    <div className="createReservationBody">
      <div>
        <div className="reservationTitle">
          <span className="reservationTitle-text">날짜, 인원 선택</span>
        </div>
      </div>
      <DateCheck
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        sum={sum}
        setSum={setSum}
      />
      <div>
        {/* <div>{roomId}</div>
        <button onClick={OnDateClick}>입력</button> */}
      </div>
      <RoomList
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        isLogin={isLogin}
        sum={sum}
      />
    </div>
  );
}
export default CreateReservation;
