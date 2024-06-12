import React from "react";
import "../CSS/Home.css";
import { useNavigate } from "react-router-dom";
function Home() {
  const nav = useNavigate();

  const OnClick = () => {
    nav("/reservation");
  };
  return (
    <>
      <div className="home">
        <div className="back">
          <div className="back-box-font">
            THE BEST PLACE <br />
            YOU'VE EVER RESCHED
          </div>
          <div onClick={OnClick} className="back-box">
            <span className="reservation-text">RESERVATION ROOM</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
