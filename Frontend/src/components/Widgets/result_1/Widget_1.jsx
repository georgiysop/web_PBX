// Filename - Form.js
import s from "../Widgets.module.css";
import React, { useState, useEffect } from "react";

export default function Widgets() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/callsCountToday")
      .then((response) => response.json())
      .then((data) => setCount(data.count))
      .catch((error) => console.error("Error fetching count:", error));
  }, []);

  return (
    <div className={s.wrapper}>
      <p>Звонков в день</p>
      <p>{count}</p>
    </div>
  );
}
