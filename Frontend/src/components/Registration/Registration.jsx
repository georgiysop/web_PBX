import React, { useState } from "react";

const Registration = ({ onLogin }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ login, password }),
      });

      if (response.status === 200) {
        console.log("Login successful");
        onLogin(true);
      } else {
        console.log("Unauthorized");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
        placeholder="Login"
        autoComplete="on"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        autoComplete="on"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Registration;
