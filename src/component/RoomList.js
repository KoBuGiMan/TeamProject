import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function RoomList() {
  const [rooms, setRooms] = useState([]);
  const [price, setPrice] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const res = await fetch("/rooms");
        const data = await res.json();
        setRooms(data);

        const prices = data.map((room) => room.roomPrice);
        setPrice(prices);
      } catch (error) {
        console.error("Error fetching rooms:", error);
      }
    };
    fetchRooms();
  }, []);
  

  return (
    <>
      <div className="roomList-body">
        <div className="roomList-title">
          <span className="roomList-title-text">예약 가능한 객실</span>
        </div>
        <div className="standard-area">
          <span className="area-title">STANDARD</span>
          <div>
            <img
              className="area-img"
              src="./images/standardBed.jpg"
              alt="standard"
            />
          </div>
          <div className="area-info">
            <div className="area-info-text">
              <span>객실등급 : 스탠다드</span>
            </div>
            <div className="area-info-text">
              <span>최대인원 : 2명</span>
            </div>
            <div className="area-info-text">
              <span>체크인 17:00 ~ 체크아웃 11:00</span>
            </div>
          </div>
          <div className="area-button">
            <span className="area-button-text">버튼</span>
          </div>
        </div>
        <div className="deluxe-area">
          <span className="area-title">DELUXE</span>
          <div>
            <img
              src="./images/deluxeBed.jpg"
              className="area-img"
              alt="deluxe"
            />
          </div>
          <div className="area-info">
            <div className="area-info-text">
              <span>객실등급 : 디럭스</span>
            </div>
            <div className="area-info-text">
              <span>최대인원 : 4명</span>
            </div>
            <div className="area-info-text">
              <span>체크인 17:00 ~ 체크아웃 11:00</span>
            </div>
          </div>
          <div className="area-button">
            <span className="area-button-text">버튼</span>
          </div>
        </div>
        <div className="luxury-area">
          <span className="area-title">LUXURY</span>
          <div>
            <img
              src="./images/luxuryBed.jpg"
              className="area-img"
              alt="luxury"
            />
            <div className="area-info">
              <div className="area-info-text">
                <span>객실등급 : 럭셔리</span>
              </div>
              <div className="area-info-text">
                <span>최대인원 : 성인 6명</span>
              </div>
              <div className="area-info-text">
                <span>체크인 17:00 ~ 체크아웃 11:00</span>
              </div>
            </div>
            <div className="area-button" style={{ bottom: "172px" }}>
              <span className="area-button-text">버튼</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RoomList;
