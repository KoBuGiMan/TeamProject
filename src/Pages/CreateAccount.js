import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/CreateAccount.css";

function CreateAccount() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();
  const [idCheck, setIdCheck] = useState(false);
  const [idList, setIdList] = useState([]);

  const OnChangeId = (data) => {
    setId(data.target.value);
  };
  const OnChangePW = (data) => {
    setPassword(data.target.value);
  };
  const OnChangeFN = (data) => {
    setFirstName(data.target.value);
  };
  const OnChangeLN = (data) => {
    setLastName(data.target.value);
  };
  const OnChangeEmail = (data) => {
    setEmail(data.target.value);
  };
  const OnChangePhone = (data) => {
    setPhone(data.target.value);
  };

  const lengthCheck = () => {
    if (idCheck === true) {
      if (
        id.length < 5 ||
        password.length < 8 ||
        firstName === "" ||
        lastName === "" ||
        email === "" ||
        phone === ""
      ) {
        alert("입력란이 비어있습니다.");
      } else {
        alert("회원가입에 성공했습니다.");
        createUser();
      }
    } else {
      alert("아이디 중복체크를 진행해 주세요.");
    }
  };

  useEffect(() => {
    fetch("users")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setIdList(data);
      });
  }, []);

  const check = () => {
    const findId = idList.find((idL) => idL.loginId === id);
    if (findId) {
      alert("아이디가 중복됩니다.");
    } else {
      if (id.length < 5) {
        alert("아이디는 5자리 이상 입력해야 합니다.");
      } else {
        alert("사용 가능한 아이디입니다.");
        setIdCheck((prev) => !prev);
      }
    }
  };

  const createUser = () => {
    console.log("눌림");
    axios
      .post("/users/create", {
        loginId: id,
        password: password,
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        userRole: "USER",
      })
      .then((response) => {})
      .catch((err) => {
        console.log(err);
      });
    navigate("/login");
  };

  return (
    <div className="account-body">
      <h2 className="join">Join Now</h2>
      <hr />
      <br /> <br />
      <form className="form">
        <div className="colum-box-boxing">
          <div className="colum-box">
            <span className="colum">성</span>
          </div>
          <input
            minLength="1"
            className="textarea"
            type="text"
            onChange={OnChangeFN}
            value={firstName}
            placeholder="First Name"
          />
        </div>
        <div className="colum-box-boxing">
          <div className="colum-box">
            <div className="colum">이름</div>
          </div>
          <input
            minLength="1"
            className="textarea"
            type="text"
            onChange={OnChangeLN}
            value={lastName}
            placeholder="Last Name"
          />
        </div>
        <br />
        <div className="colum-box-boxing">
          <div className="colum-box">
            <span className="colum">아이디</span>
          </div>
          {idCheck ? (
            <input
              minLength="8"
              className="textarea"
              type="text"
              onChange={OnChangeId}
              value={id}
              placeholder="ID"
              disabled
            />
          ) : (
            <input
              minLength="8"
              className="textarea"
              type="text"
              onChange={OnChangeId}
              value={id}
              placeholder="ID"
            />
          )}
        </div>
        <br />
        {idCheck ? (
          ""
        ) : (
          <div className="idcheck" onClick={check}>
            <div className="idcheck-text">아이디 중복체크</div>
          </div>
        )}
        <div className="colum-box-boxing">
          <div className="colum-box">
            <span className="colum">비밀번호</span>
          </div>
          <input
            minLength="8"
            className="textarea"
            type="password"
            onChange={OnChangePW}
            value={password}
            placeholder="Password"
          />
        </div>
        <br />
        <div className="colum-box-boxing">
          <div className="colum-box">
            <span className="colum">이메일</span>
          </div>
          <input
            className="textarea"
            type="text"
            onChange={OnChangeEmail}
            value={email}
            placeholder="E-Mail"
          />
        </div>
        <br />
        <div className="colum-box-boxing">
          <div className="colum-box">
            <span className="colum">전화번호</span>
          </div>
          <input
            className="textarea"
            type="text"
            onChange={OnChangePhone}
            value={phone}
            placeholder="Phone"
          />
        </div>
        <div className="box" onClick={lengthCheck}>
          <span className="box-text">회원가입</span>
        </div>
      </form>
      <br />
    </div>
  );
}

export default CreateAccount;
