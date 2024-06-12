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
  count,
  setCount,
  roomRole,
  setRoomRole,
  price,
  setPrice,
  role,
  setRole,
  adult,
  setAdult,
  child,
  setChild,
  baby,
  setBaby,
}) {
  const [room, setRoom] = useState([]);

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
        count={count}
        setCount={setCount}
        adult={adult}
        setAdult={setAdult}
        child={child}
        setChild={setChild}
        baby={baby}
        setBaby={setBaby}
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
        count={count}
        setCount={setCount}
        roomRole={roomRole}
        setRoomRole={setRoomRole}
        price={price}
        setPrice={setPrice}
        role={role}
        setRole={setRole}
      />
    </div>
  );
}
export default CreateReservation;
