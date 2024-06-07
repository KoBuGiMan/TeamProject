import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function RoomList({
  isLogin,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  sum,
}) {
  const [rooms, setRooms] = useState([]);
  const [price, setPrice] = useState([]);
  const [role, setRole] = useState([]);
  const [standardCnt, setStandardCnt] = useState([]);
  const [deluxeCnt, setDeluxeCnt] = useState([]);
  const [luxuryCnt, setLuxuryCnt] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const res = await fetch("/rooms");
        const data = await res.json();
        setRooms(data);

        const prices = data.map((room) => room.roomPrice);
        setPrice(prices);

        const roles = data.map((room) => room.roomRole);
        setRole(roles);
      } catch (error) {
        console.error("Error fetching rooms:", error);
      }
    };
    fetchRooms();
  }, []);

  const changePage = () => {
    nav("/reservation/reservationRoom");
  };

  const loginCheck = () => {
    if (isLogin) {
      changePage();
    } else {
      alert("로그인이 필요합니다");
      nav("/login");
    }
  };

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
              <span>객실등급 : {role[0]}</span>
            </div>
            <div className="area-info-text">
              <span>최대인원 : 2명</span>
            </div>
            <div className="area-info-text">
              <span>체크인 17:00 ~ 체크아웃 11:00</span>
            </div>
            <div className="area-info-text">
              <span>잔여객실: </span>
            </div>
            <div style={{ left: "573px" }} className="area-price">
              {price[0] * sum} ₩
            </div>
          </div>
          <div onClick={loginCheck} className="area-button">
            <span className="area-button-text">예약</span>
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
              <span>객실등급 : {role[1]}</span>
            </div>
            <div className="area-info-text">
              <span>최대인원 : 4명</span>
            </div>
            <div className="area-info-text">
              <span>체크인 17:00 ~ 체크아웃 11:00</span>
            </div>
            <div className="area-info-text">
              <span>객실등급 : 스탠다드</span>
            </div>
            <div className="area-price">{price[1] * sum} ₩</div>
          </div>
          <div onClick={loginCheck} className="area-button">
            <span className="area-button-text">예약</span>
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
                <span>객실등급 : {role[2]}</span>
              </div>
              <div className="area-info-text">
                <span>최대인원 : 성인 6명</span>
              </div>
              <div className="area-info-text">
                <span>체크인 17:00 ~ 체크아웃 11:00</span>
              </div>
              <div className="area-info-text">
                <span>객실등급 : 스탠다드</span>
              </div>
              <div className="area-price">{price[2] * sum} ₩</div>
            </div>
            <div
              onClick={loginCheck}
              className="area-button"
              style={{ bottom: "195px" }}
            >
              <span className="area-button-text">예약</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RoomList;
