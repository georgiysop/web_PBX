// Filename - Form.js
import s from "./Rings.module.css";
// import { useEffect, useState } from "react";
import Table from "./table/Table_rings";
// import Calen from "./Calendar/calendar";

const Rings = () => {
  return (
    <div className={s.container}>
      {/* <Calen /> */}
      <Table />
    </div>
  );
};

export default Rings;
