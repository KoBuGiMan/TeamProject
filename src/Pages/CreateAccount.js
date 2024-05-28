import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateAccount() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

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

  const createUser = (e) => {
    e.preventDefault();
    console.log("눌림");
    axios
      .post("/users/create", {
        loginId: id,
        password: password,
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
      })
      .then((response) => {})
      .catch((err) => {
        console.log(err);
      });
    navigate("/");
  };

  return (
    <>
      <form>
        <input type="text" onChange={OnChangeId} value={id} placeholder="ID" />
        <br />
        <input
          type="password"
          onChange={OnChangePW}
          value={password}
          placeholder="Password"
        />
        <br />
        <input
          type="text"
          onChange={OnChangeFN}
          value={firstName}
          placeholder="First Name"
        />
        <br />
        <input
          type="text"
          onChange={OnChangeLN}
          value={lastName}
          placeholder="Last Name"
        />
        <br />
        <input
          type="text"
          onChange={OnChangeEmail}
          value={email}
          placeholder="E-Mail"
        />
        <br />
        <input
          type="text"
          onChange={OnChangePhone}
          value={phone}
          placeholder="Phone"
        />
      </form>
      <br />
      <button onClick={createUser}>입력</button>
    </>
  );
}

export default CreateAccount;
