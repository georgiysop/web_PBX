import s from "../Widgets.module.css";
import BarChart from "./Chart";
import { useState } from "react";

const UserData = [
  { year: 2016, userGain: 80000, userLost: 823 },
  { year: 2017, userGain: 83464, userLost: 461 },
  { year: 2018, userGain: 84330, userLost: 123 },
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
