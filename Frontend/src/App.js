// Filename - App.js
import "./App.css";
import React, { useState } from "react";
import Registration from "./components/Registration/Registration";
import Menu from "./components/menu/menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Widgets from "./components/Widgets/Widgets";
import Reports from "./components/Reports/Reports";
import Settings from "./components/Settings/Settings";
import Admin from "./components/Admin/admin";
import GPT from "./components/GPT/GPT";
import Rings from "./components/Rings/Rings";


function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (isLoggedIn) => {
    setLoggedIn(isLoggedIn);
  };

  return (
    <BrowserRouter>
      {loggedIn ? (
        <div className="app-wrapper">
          <Menu />
          <Routes>
            <Route path="/" element={<Widgets />} />
            <Route path="/Widgets" element={<Widgets />} />
            <Route path="/Rings" element={<Rings />} />
            <Route path="/Reports" element={<Reports />} />
            <Route path="/Settings" element={<Settings />} />
            <Route path="/Admin" element={<Admin />} />
            {/* <Route path="/Logout" element={<Logout />} /> */}
            {/* <Route path="/GPT" element={<GPT />} /> */}
          </Routes>
        </div>
      ) : (
        <Registration onLogin={handleLogin} />
      )}
    </BrowserRouter>
  );
}

export default App;
