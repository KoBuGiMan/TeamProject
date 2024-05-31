import axios from "axios";
import { ko } from "date-fns/locale";
import { useEffect, useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.module.css";
import Header from "./Header";

function CreateReservation() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const dateLater = new Date(new Date().setDate(new Date().getDate() + 30));
  const [room, setRoom] = useState([]);
  const [roomId, setRoomId] = useState("");

  const OnDateClick = () => {
    axios
      .post("/reservations/success", {
        startDate: startDate,
        endDate: endDate,
        roomId: roomId,
      })
      .catch((err) => {
        console.log(err);
      });
  };
  registerLocale("ko", ko);

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
    <>
      <div style={{ textAlign: "center" }}>
        <span style={{ margin: "10px" }}>
          <DatePicker
            dateFormat="yyyy-MM.dd"
            shouldCloseOnSelect
            minDate={new Date()}
            maxDate={dateLater}
            onChange={(date) => setStartDate(date)}
            selected={startDate}
            locale="ko"
          />
        </span>
        <span>-</span>
        <span style={{ margin: "10px" }}>
          <DatePicker
            dateFormat="yyyy-MM.dd"
            shouldCloseOnSelect
            minDate={new Date()}
            maxDate={dateLater}
            onChange={(date) => setEndDate(date)}
            selected={endDate}
            locale="ko"
          />
        </span>

        <ul>
          {room.map((room) => (
            <div
              style={{
                borderRadius: "10px",
                border: "solid 1px black",
                width: "200px",
                marginBottom: "10px",
              }}
            >
              <li key={`%{room.id}`}>
                <p>객실 등급: {room.roomRole}</p>
                <p>객실 번호: {room.roomNum}</p>
                <p>객실 가격: {room.roomPrice}</p>
                <p>잔여 객실: {room.roomCount}</p>
                {room.roomNum !== 0 ? (
                  <button onClick={() => seleced(room.id)}>선택</button>
                ) : (
                  <button disabled={room.roomNum}>매진</button>
                )}
              </li>
            </div>
          ))}
        </ul>
        <br />
        <div>{roomId}</div>
        <button onClick={OnDateClick}>입력</button>
      </div>
    </>
  );
}
export default CreateReservation;
