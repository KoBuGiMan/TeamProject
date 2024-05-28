import { useState, useEffect } from "react";

function Users() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("users")
      .then((res) => {
        return res.json();
      })
      .then(function (data) {
        setUser(data);
      });
  }, []);

  return (
    <div>
      <h2>유저 리스트</h2>

      <ul>
        {user.map((user) => (
          <li key={`${user.id}`}>
            <p>ID: {user.id}</p>
            <p>Login ID: {user.loginId}</p>
            <p>First Name: {user.firstName}</p>
            <p>Last Name: {user.lastName}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Role: {user.userRole}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
