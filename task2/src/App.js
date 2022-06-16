import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [users, setUser] = useState([]);

  const loadUser = async () => {
    // console.log('before');
    const response = await fetch("https://api.github.com/users");
    const jsonresponse = await response.json();
    setUser(jsonresponse);
  };

  return (
    <div className="app">
      <nav className="navbar">
        <ul className="nul">
          <li>XYZ Company</li>
          <li>
            <button onClick={loadUser}>Get Users</button>
          </li>
        </ul>
      </nav>
      <h1>Users:</h1>
      <ul>
        {users.map(({ id, login,avatar_url }) => (
          <li key={id}>
            <div>login: {login}</div>
            <div>avatar: {avatar_url}</div>
          
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;

