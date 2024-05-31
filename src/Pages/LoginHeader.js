import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Header.css";

function LoginHeader({ loginId }) {
  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="header-link">
          TEAM HOTEL
        </Link>
        <Link to="/reservation" className="link">
          예약
        </Link>
        <Link to="/about" className="link">
          호텔소개
        </Link>
        <Link to="/rooms" className="link">
          객실
        </Link>
        <Link to="/enjoy" className="link">
          즐길거리
        </Link>
        <Link to="/mypage" className="link">
          {loginId} 님
        </Link>
      </nav>
    </div>
  );
}

export default LoginHeader;
