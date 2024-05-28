import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Users from "./Pages/Users";
import Rooms from "./Pages/Rooms";
import Reservation from "./Pages/Reservation";
import CreateAccount from "./Pages/CreateAccount";
import Login from "./Pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="users" element={<Users />} />
        <Route path="rooms" element={<Rooms />} />
        <Route path="reservations" element={<Reservation />} />
        <Route path="createAccount" element={<CreateAccount />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
