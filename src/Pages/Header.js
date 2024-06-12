import React from "react";
import { Link } from "react-router-dom";
import "../CSS/Header.css";

function Header() {
  return (
    <div>
      <nav className="navbar">
        <Link to="/" className="header-link">
          <div className="logo" alt="" />
        </Link>
        <Link to="/reservation" className="link">
          예약
        </Link>
        <Link to="/about" className="link">
          호텔소개
        </Link>
        <Link to="/select" className="link">
          객실
        </Link>
        <Link to="/enjoy" className="link">
          즐길거리
        </Link>
        <Link to="/login" className="link">
          로그인
        </Link>
        <Link to="/createAccount" className="link">
          회원가입
        </Link>
      </nav>
    </div>
  );
}

export default Header;
