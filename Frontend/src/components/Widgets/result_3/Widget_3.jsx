// Filename - Form.js
import s from "../Widgets.module.css";
import BarChart from "./Chart";
import { useState } from "react";

const UserData = [
  { year: "Мобильные", userGain: 80000, userLost: 823 },
  { year: "Межгородские", userGain: 83464, userLost: 461 },
  { year: "Городские", userGain: 84330, userLost: 123 },
];

export default function Widgets() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      { label: "Users Gained", data: UserData.map((data) => data.userGain) },
    ],
  });

  return (
    <div className={s.wrapper}>
      <BarChart chartData={userData} />
    </div>
  );
}
