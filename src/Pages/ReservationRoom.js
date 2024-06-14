import { useState } from "react";
import "../CSS/ReservationRoom.css";
import DaumPostcodeEmbed from "react-daum-postcode";
import Modal from "react-modal";
import axios from "axios";
import Payment from "../component/Payment";

function ReservationRoom({
  startDate,
  endDate,
  sum,
  price,
  roomRole,
  adult,
  child,
  baby,
  name,
  setName,
  phone,
  setPhone,
  address,
  setAddress,
  email,
  setEmail,
  zoneCode,
  setZoneCode,
  loginId,
}) {
  const [car, setCar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [plusAddress, setPluseAddress] = useState("");
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [third, setThird] = useState("");
  const [sendCheck, setSendCheck] = useState(false);
  const [verificationCode, setVerificationCode] = useState();
  const [verCheck, setVerCheck] = useState();
  const [verCheckNum, setVerCheckNum] = useState(false);
  const [fullAdd, setFullAdd] = useState("");
  const [frontEmail, setFrontEmail] = useState("");
  const [backEmail, setBackEmail] = useState("");
  const customModalStyles = {
    overlay: {
      backgroundColor: " rgba(0, 0, 0, 0.4)",
      width: "100%",
      height: "100vh",
      zIndex: "10",
      position: "fixed",
      top: "0",
      left: "0",
    },
    content: {
      width: "360px",
      height: "400px",
      zIndex: "150",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "10px",
      boxShadow: "2px 2px 2px rgba(0, 0, 0, 0.25)",
      backgroundColor: "white",
      justifyContent: "center",
      overflow: "auto",
    },
  };

  const onCompletePost = (data) => {
    console.log(data);
    setAddress(data.address);
    setFullAdd(data.address + " " + plusAddress);
    setZoneCode(data.zonecode);
    setIsOpen(false);
  };
  const nameChange = (prev) => {
    setName(prev.target.value);
  };

  const firstChange = (prev) => {
    if (prev.target.value.length <= 3) {
      setFirst(prev.target.value);
      setPhone(prev.target.value + second + third);
    }
  };

  const secondChange = (prev) => {
    if (prev.target.value.length <= 4) {
      setSecond(prev.target.value);
      setPhone(first + prev.target.value + third);
    }
  };
  const thirdChange = (prev) => {
    if (prev.target.value.length <= 4) {
      setThird(prev.target.value);
      setPhone(first + second + prev.target.value);
    }
  };
  const modalChange = () => {
    setIsOpen(!isOpen);
  };

  const carClick = () => {
    setCar(true);
  };
  const walkClick = () => {
    setCar(false);
  };

  const plusAddChange = (res) => {
    setPluseAddress(res.target.value);
    setFullAdd(address + " " + res.target.value);
  };

  const sendPhone = () => {
    const sanitizedPhone = phone.replace(/\D/g, "");
    if (sanitizedPhone.length !== 11 || name === "" || address === "") {
      alert("정보를 입력해주세요.");
    } else {
      alert("문자가 전송되었습니다.");
      axios
        .post("/send-mms", {
          phoneNum: sanitizedPhone,
        })
        .then((res) => {
          const data = res.data;
          setVerificationCode(data.verificationCode);
          console.log(data.verificationCode);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const verCheckChange = (res) => {
    if (res.target.value.length <= 4) {
      setVerCheck(res.target.value);
    }
  };

  const changeSendCheck = () => {
    setSendCheck(true);
  };

  const checkVerNum = () => {
    if (verificationCode.toString() === verCheck) {
      alert("인증이 완료되었습니다.");
      setVerCheckNum(true);
    } else {
      alert("인증번호가 틀렸습니다.");
    }
  };

  const frontEmailChange = (res) => {
    setFrontEmail(res.target.value);
    setEmail(res.target.value + "@" + backEmail);
  };
  const backEmailChange = (res) => {
    setBackEmail(res.target.value);
    setEmail(frontEmail + "@" + res.target.value);
  };
  return (
    <>
      <div className="ReservationRoom-body">
        <div className="res-title">
          <span>객실예약</span>
        </div>
        <div className="res-side">
          <div className="res-side-image">
            <img
              className="res-side-image-src"
              src={
                roomRole === "standard"
                  ? ".././images/standardBed.jpg"
                  : roomRole === "deluxe"
                  ? ".././images/deluxeBed.jpg"
                  : roomRole === "luxury"
                  ? ".././images/luxuryBed.jpg"
                  : ""
              }
              alt="."
            />
            <div className="res-side-content">
              <div className="res-side-content-object">
                <span>
                  <strong>객실유형</strong>
                </span>
              </div>
              <div
                style={{ marginTop: "15px" }}
                className="res-side-content-object"
              >
                {roomRole === "standard"
                  ? "스탠다드"
                  : roomRole === "deluxe"
                  ? "디럭스"
                  : roomRole === "luxury"
                  ? "럭셔리"
                  : ""}
              </div>
              <div
                style={{ marginTop: "50px" }}
                className="res-side-content-object"
              >
                <span>
                  <strong>투숙인원</strong>
                </span>
              </div>
              <div className="res-side-content-object">
                <span>어른 : {adult}명</span>
              </div>
              <div className="res-side-content-object">
                <span>어린이 : {child}명</span>
              </div>
              <div className="res-side-content-object">
                <span>유아 : {baby}명</span>
              </div>
              <div
                className="res-side-content-object"
                style={{ marginTop: "50px" }}
              >
                <span>
                  <strong>숙박일자</strong>
                </span>
              </div>
              <div className="res-side-content-object">
                <span>
                  {startDate.getUTCFullYear()}년 {startDate.getMonth() + 1}월{" "}
                  {startDate.getDate()}일 ~ {endDate.getUTCFullYear()}년{" "}
                  {endDate.getMonth() + 1}월 {endDate.getDate()}일
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="res-main">
          <div className="res-main-box">
            <div className="res-main-box-title">
              <span className="res-main-box-title-text">예약정보</span>
            </div>
            <div className="res-main-box-content">
              <div>
                <span style={{ fontSize: "20px" }}>예약자명</span>
              </div>
              <div className="res-main-box-content-name">
                {verCheckNum ? (
                  <input
                    className="res-main-box-content-name-text"
                    type="text"
                    onChange={nameChange}
                    placeholder="홍길동"
                    maxLength={8}
                    disabled
                  />
                ) : (
                  <input
                    className="res-main-box-content-name-text"
                    type="text"
                    onChange={nameChange}
                    placeholder="홍길동"
                    maxLength={8}
                  />
                )}
              </div>
              <div className="res-main-box-content-car">
                <span className="res-main-box-content-car-text">차량유무</span>
              </div>
              <div className="res-main-box-content-car-box">
                <div
                  onClick={carClick}
                  className={
                    car
                      ? "res-main-box-content-car-box-select"
                      : "res-main-box-content-car-box-noneSelect"
                  }
                >
                  <span className="res-main-box-content-car-box-text">
                    차량
                  </span>
                </div>
                <div
                  onClick={walkClick}
                  className={
                    car
                      ? "res-main-box-content-car-box-noneSelect"
                      : "res-main-box-content-car-box-select"
                  }
                >
                  <span className="res-main-box-content-car-box-text">
                    도보
                  </span>
                </div>
              </div>
              <div className="res-main-box-content-address">
                <div className="res-main-box-content-address-title">
                  <span>주소</span>
                </div>
                <div className="res-main-box-content-address-zoneCode">
                  <input
                    className="res-main-box-content-address-zoneCode-box"
                    type="text"
                    disabled
                    value={zoneCode}
                    placeholder="우편번호"
                  />
                </div>
                <div
                  className="res-main-box-content-address-button"
                  onClick={modalChange}
                >
                  <span className="res-main-box-content-address-button-text">
                    주소검색
                  </span>
                </div>
                <div className="res-main-box-content-address-input">
                  <input
                    className="res-main-box-content-address-input-text"
                    type="text"
                    placeholder="주소입력"
                    disabled
                    value={address}
                  />
                </div>
                <div className="res-main-box-content-address-plus">
                  <input
                    className="res-main-box-content-address-plus-text"
                    type="text"
                    placeholder="상세주소"
                    value={plusAddress}
                    onChange={plusAddChange}
                  ></input>
                </div>
              </div>
              <div className="res-main-box-content-phone">
                <div className="res-main-box-content-phone-title">
                  <span>전화번호</span>
                </div>
                <div className="res-main-box-content-phone-number">
                  <input
                    style={{ left: "5px" }}
                    className="res-main-box-content-phone-number-text"
                    type="number"
                    value={first}
                    onChange={firstChange}
                    placeholder="010"
                  />
                </div>
                <span style={{ position: "relative", right: "10px" }}>-</span>
                <div className="res-main-box-content-phone-number">
                  <input
                    className="res-main-box-content-phone-number-text"
                    type="number"
                    value={second}
                    onChange={secondChange}
                    placeholder="0000"
                  />
                </div>
                <span style={{ position: "relative", right: "10px" }}>-</span>
                <div className="res-main-box-content-phone-number">
                  <input
                    type="number"
                    className="res-main-box-content-phone-number-text"
                    value={third}
                    onChange={thirdChange}
                    placeholder="0000"
                  />
                </div>
                {sendCheck ? (
                  <div className="res-main-box-content-phone-check2" disabled>
                    <span className="res-main-box-content-phone-check-text">
                      인증번호 발송
                    </span>
                  </div>
                ) : (
                  <div
                    className="res-main-box-content-phone-check"
                    onClick={() => {
                      changeSendCheck();
                      sendPhone();
                    }}
                  >
                    <span className="res-main-box-content-phone-check-text">
                      인증번호 발송
                    </span>
                  </div>
                )}
                {sendCheck ? (
                  verCheckNum ? (
                    <div>
                      <div className="res-main-box-content-phone-check-verCheck">
                        <span>인증번호</span>
                      </div>
                      <input
                        type="number"
                        onChange={verCheckChange}
                        placeholder="인증번호"
                        value={verCheck}
                        disabled
                      />
                      <div className="res-main-box-content-phone-check-verCheck-btn2">
                        <span className="res-main-box-content-phone-check-verCheck-btn-text">
                          인증번호 확인
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="res-main-box-content-phone-check-verCheck">
                        <span>인증번호</span>
                      </div>
                      <input
                        type="number"
                        onChange={verCheckChange}
                        placeholder="인증번호"
                        value={verCheck}
                      />
                      <div
                        onClick={() => {
                          checkVerNum();
                        }}
                        className="res-main-box-content-phone-check-verCheck-btn"
                      >
                        <span className="res-main-box-content-phone-check-verCheck-btn-text">
                          인증번호 확인
                        </span>
                      </div>
                    </div>
                  )
                ) : (
                  ""
                )}
              </div>
              <div className="res-main-box-content-email">
                <div className="res-main-box-content-email-box">
                  <span>이메일</span>
                </div>
                <div>
                  <input
                    className="res-main-box-content-email-text"
                    type="text"
                    placeholder="example"
                    value={frontEmail}
                    onChange={frontEmailChange}
                  />{" "}
                  @{" "}
                  <input
                    className="res-main-box-content-email-text"
                    type="text"
                    placeholder="example.com"
                    value={backEmail}
                    onChange={backEmailChange}
                  />
                </div>
              </div>
              {/* {verCheckNum && email !== "" ? ( */}
              <Payment
                name={name}
                phone={phone}
                address={fullAdd}
                zoneCode={zoneCode}
                email={email}
                roomRole={roomRole}
                sum={sum}
                price={price}
                verCheckNum={verCheckNum}
                car={car}
                adult={adult}
                child={child}
                baby={baby}
                loginId={loginId}
                startDate={startDate}
                endDate={endDate}
              />
              {/* ) : (
                ""
              )} */}
            </div>
          </div>
        </div>
      </div>
      <Modal isOpen={isOpen} style={customModalStyles}>
        <div
          className="res-main-box-content-address-modal"
          onClick={modalChange}
        >
          <span>X</span>
        </div>
        <DaumPostcodeEmbed autoClose onComplete={onCompletePost} />
      </Modal>
    </>
  );
}
export default ReservationRoom;
