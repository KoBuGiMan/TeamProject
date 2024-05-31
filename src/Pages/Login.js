import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../CSS/Login.css";


function Login({ changeLoginId, changeIsLogin }) {
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

  useEffect(() => {
    if (isLogin) {
      console.log("isLogin: " + isLogin);
      changeLoginId(loginId);
      changeIsLogin(isLogin);
      navigate("/");
    }
  }, [isLogin, navigate]);

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
        } else {
          alert("비밀번호가 틀렸습니다");
        }
      } else {
        alert("아이디가 틀렸습니다.");
      }
    } else {
      alert("빈칸을 채워주세요.");
    }
  };

  const createAccount = () => {
    navigate("/createaccount");
  };

  return (
    <>
      <div className="body">
        <span className="signin">Sign In</span>
        <hr />
        <br />
        <form className="textArea">
          <div className="text-div">
            <div>
              <div className="colum">아이디</div>
              <input
                className="text"
                minLength="8"
                type="text"
                value={loginId}
                onChange={OnChangeId}
                placeholder=" ID"
              />
            </div>
            <br />
            <div>
              <div className="colum">비밀번호</div>
              <input
                className="text"
                minLength="8"
                type="text"
                onChange={OnChangePW}
                value={password}
                placeholder=" Password"
              />
            </div>
          </div>
          <div className="loginbtn" onClick={Login}>
            <div className="loginbtn-text">Login</div>
          </div>
          <div className="create" onClick={createAccount}>
            <div className="create-text">Create Account</div>
          </div>
        </form>
      </div>
    </>
  );
}
export default Login;
