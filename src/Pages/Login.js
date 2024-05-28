import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [loginId, setLoginId] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(false);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("users")
      .then((res) => {
        return res.json();
      })
      .then(function (data) {
        setUsers(data);
      });
  }, []);

  const OnChangeId = (data) => {
    setLoginId(data.target.value);
  };
  const OnChangePW = (data) => {
    setPassword(data.target.value);
  };
  const Login = () => {
    if (loginId !== "" && password !== "") {
      const foundUser = users.find((user) => user.loginId === loginId);
      if (foundUser) {
        if (password === foundUser.password) {
          setIsLogin(true);
          console.log("Login successful!");
          navigate("/");
        } else {
          alert("비밀번호가 틀렸습니다.");
        }
      } else {
        alert("아이디가 틀렸습니다.");
      }
    } else {
      alert("빈칸을 채워주세요.");
    }
  };

  return (
    <>
      <h1>Login</h1>
      <form>
        <input
          type="text"
          value={loginId}
          onChange={OnChangeId}
          placeholder="ID"
        />
        <br />
        <input
          type="text"
          onChange={OnChangePW}
          value={password}
          placeholder="Password"
        />
      </form>
      <button onClick={Login}>로그인</button>
    </>
  );
}
export default Login;
