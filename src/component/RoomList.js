import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function RoomList({
  isLogin,
  sum,
  count,
  setCount,
  setRoomRole,
  price,
  setPrice,
  role,
  setRole,
}) {
  const nav = useNavigate();

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const res = await fetch("/rooms");
        const data = await res.json();

        const prices = data.map((room) => room.roomPrice);
        setPrice(prices);

        const roles = data.map((room) => room.roomRole);
        setRole(roles);
      } catch (error) {
        console.error("Error fetching rooms:", error);
      }
    };
    fetchRooms();

    const fetchRoomCounts = async () => {
      try {
        const response = await fetch("roomList/nowDateCheck", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setCount(data);
      } catch (err) {}
    };

    fetchRoomCounts();
  }, []);
  const changePage = () => {
    nav("/reservation/reservationRoom");
  };

  const loginCheck = () => {
    // if (isLogin) {
    //   changePage();
    // } else {
    //   alert("로그인이 필요합니다");
    //   nav("/login");
    // }
    changePage();
  };

  const loginCheckStandard = () => {
    setRoomRole("standard");
    changePage();
  };
  const loginCheckDeluxe = () => {
    setRoomRole("deluxe");
    changePage();
  };
  const loginCheckLuxury = () => {
    setRoomRole("luxury");
    changePage();
  };

  const standardClick = () => {
    setRoomRole("standard");
    nav("/rooms");
  };

  const deluxeClick = () => {
    setRoomRole("deluxe");
    nav("/rooms");
  };

  const luxuryClick = () => {
    setRoomRole("luxury");
    nav("/rooms");
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
              onClick={standardClick}
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
              <span>잔여객실:{count[0]} </span>
            </div>
            <div className="area-price">{price[0] * sum} ₩</div>
          </div>
          <div onClick={loginCheckStandard} className="area-button">
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
              onClick={deluxeClick}
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
              <span>잔여객실:{count[1]}</span>
            </div>
            <div className="area-price">{price[1] * sum} ₩</div>
          </div>
          <div onClick={loginCheckDeluxe} className="area-button">
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
              onClick={luxuryClick}
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
                <span>잔여객실:{count[2]}</span>
              </div>
              <div className="area-price">{price[2] * sum} ₩</div>
            </div>
            <div
              onClick={loginCheckLuxury}
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
