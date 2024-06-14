import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "../Pages/Users.js";
import Rooms from "../Pages/Rooms.js";
import Reservation from "../Pages/Reservation";
import CreateAccount from "../Pages/CreateAccount.js";
import Login from "../Pages/Login";
import CreateReservation from "../Pages/CreateReservation.js";
import Header from "../Pages/Header";
import Home from "../Pages/Home.js";
import { useEffect, useState } from "react";
import LoginHeader from "../Pages/LoginHeader.js";
import SelectRoomRole from "../Pages/SelectRoomRole.js";
import Footer from "../Pages/Footer.js";
import ReservationRoom from "../Pages/ReservationRoom.js";
import ReservationComplete from "../Pages/ReservationComplete.js";
import Enjoy from "../Pages/Enjoy.js";

function Routers() {
  const [loginId, setLoginId] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const [roomRole, setRoomRole] = useState("standard");

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(
    new Date(new Date().setDate(new Date().getDate() + 1))
  );
  const [sum, setSum] = useState(1);

  const changeLoginId = (data) => {
    setLoginId(data);
  };

  const changeIsLogin = (data) => {
    setIsLogin(data);
  };
  const [count, setCount] = useState([]);
  const [price, setPrice] = useState([]);
  const [role, setRole] = useState([]);
  const [adult, setAdult] = useState(2);
  const [child, setChild] = useState(0);
  const [baby, setBaby] = useState(0);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [zoneCode, setZoneCode] = useState("");
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
  }, []);

  return (
    <>
      <BrowserRouter>
        {isLogin ? <LoginHeader loginId={loginId} /> : <Header />}

        <Routes>
          <Route path="" element={<Home />} />
          <Route path="users" element={<Users />} />
          <Route
            path="rooms"
            element={<Rooms roomRole={roomRole} setRoomRole={setRoomRole} />}
          />
          <Route path="reservations" element={<Reservation />} />
          <Route path="createAccount" element={<CreateAccount />} />
          <Route
            path="login"
            element={
              <Login
                changeLoginId={changeLoginId}
                changeIsLogin={changeIsLogin}
              />
            }
          />
          <Route
            path="reservation"
            element={
              <CreateReservation
                isLogin={isLogin}
                startDate={startDate}
                setStartDate={setStartDate}
                endDate={endDate}
                setEndDate={setEndDate}
                sum={sum}
                setSum={setSum}
                count={count}
                setCount={setCount}
                roomRole={roomRole}
                setRoomRole={setRoomRole}
                price={price}
                setPrice={setPrice}
                role={role}
                setRole={setRole}
                adult={adult}
                setAdult={setAdult}
                child={child}
                setChild={setChild}
                baby={baby}
                setbaby={setBaby}
              />
            }
          />
          <Route
            path="select"
            element={
              <SelectRoomRole setRoomRole={setRoomRole} roomRole={roomRole} />
            }
          />
          <Route path="/enjoy" element={<Enjoy />} />
          <Route
            path="/reservation/reservationRoom"
            element={
              <ReservationRoom
                startDate={startDate}
                endDate={endDate}
                sum={sum}
                price={price}
                roomRole={roomRole}
                adult={adult}
                child={child}
                baby={baby}
                name={name}
                setName={setName}
                phone={phone}
                setPhone={setPhone}
                address={address}
                setAddress={setAddress}
                email={email}
                setEmail={setEmail}
                zoneCode={zoneCode}
                setZoneCode={setZoneCode}
                loginId={loginId}
              />
            }
          />
          <Route
            path="/reservation/complete"
            element={<ReservationComplete loginId={loginId} />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default Routers;
