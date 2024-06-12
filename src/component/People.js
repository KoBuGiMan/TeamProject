import { useState } from "react";

function People({
  adult,
  setAdult,
  child,
  setChild,
  baby,
  setBaby,
  room,
  setRoom,
}) {
  const roomPlus = () => {
    setRoom(room + 1);
  };
  const roomMinus = () => {
    setRoom(room - 1);
    if (room <= 1) {
      setRoom(1);
    }
  };
  const adultPlus = () => {
    setAdult(adult + 1);
  };
  const adultMinus = () => {
    setAdult(adult - 1);
    if (adult <= 1) {
      setAdult(1);
    }
  };

  const childPlus = () => {
    setChild(child + 1);
  };
  const childMinus = () => {
    setChild(child - 1);
    if (child <= 0) {
      setChild(0);
    }
  };

  const babyPlus = () => {
    setBaby(baby + 1);
  };
  const babyMinus = () => {
    setBaby(baby - 1);
    if (baby <= 0) {
      setBaby(0);
    }
  };

  return (
    <>
      <div className="people-list">
        {/* <div className="people-list-box">
          <span className="people-list-box-text">객실</span>
          <div>
            <span onClick={roomPlus} className="plus">
              +
            </span>
            <span className="object-num">{room}</span>
            <span onClick={roomMinus} className="minus">
              -
            </span>
          </div>
        </div> */}
        <div className="people-list-box">
          <span className="people-list-box-text">어른</span>
          <div>
            <span onClick={adultPlus} className="plus">
              +
            </span>
            <span className="object-num">{adult}</span>
            <span onClick={adultMinus} className="minus">
              -
            </span>
          </div>
        </div>
        <div className="people-list-box">
          <span className="people-list-box-text">어린이</span>
          <div>
            <span onClick={childPlus} className="plus">
              +
            </span>
            <span className="object-num">{child}</span>
            <span onClick={childMinus} className="minus">
              -
            </span>
          </div>
        </div>
        <div className="people-list-box">
          <span className="people-list-box-text">유아</span>
          <div>
            <span onClick={babyPlus} className="plus">
              +
            </span>
            <span className="object-num">{baby}</span>
            <span onClick={babyMinus} className="minus">
              -
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
export default People;
