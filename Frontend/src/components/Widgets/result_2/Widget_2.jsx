// Filename - Form.js
import s from "../Widgets.module.css";
import BarChart from "./Chart";
import { useState } from "react";

const UserData = [
  { year: 2016, userGain: 8000, userLost: 823 },
  { year: 2017, userGain: 8344, userLost: 461 },
  { year: 2018, userGain: 8430, userLost: 123 },
  { year: 2018, userGain: 8430, userLost: 123 },
];

export default function Widgets() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      { label: "Users Gained", data: UserData.map((data) => data.userGain) },
    ],
  });

  return (
    <div className={`${s.wrapper} ${s.graf}`}>
      <BarChart chartData={userData} />
    </div>
  );
}

