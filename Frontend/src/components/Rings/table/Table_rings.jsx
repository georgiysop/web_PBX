import React from "react";
import { useEffect, useState } from "react";
import MaterialTable from "material-table";
import Calen from "../Calendar/calendar";
import s from "./Table_rings.module.css";

const Table = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/allRings")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const columns = [
    // { title: "ring_id", field: "ring_id" },
    { title: "Начало", field: "date_start" },
    { title: "Завершение", field: "date_time_start" },
    { title: "~ Время (мин.)", field: "amount_of_time" },
    { title: "Кто звонил", field: "number_1" },
    { title: "Кому звонил", field: "number_2" },
    { title: "Тип звонка", field: "type_ring" },
  ];

  return (
    <div>
      <div className={s.Calen}>
        <Calen />
      </div>
      <div className={s.table}>
        <MaterialTable
          title=""
          columns={columns}
          data={data}
          options={{
            search: true,
            searchAutoFocus: false,
            exportButton: true,
            pageSize: 10,
            pageSizeOptions: [10, 30, 50, 100],
          }}
        />
      </div>
    </div>
  );
};

export default Table;
