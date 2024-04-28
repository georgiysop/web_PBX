import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MaterialTable from "material-table";
import s from "./admin.module.css";

export default function Admin() {
  const [data, setData] = useState([]);
  const [selectTable, setSelectTable] = useState("Accounts");

  useEffect(() => {
    let url = "";
    if (selectTable === "Accounts") {
      url = "http://localhost:3001/allAccounts";
    } else if (selectTable === "Tariffs") {
      url = "http://localhost:3001/allTariffs";
    } else if (selectTable === "Abonents") {
      url = "http://localhost:3001/allAbonents";
    }

    if (url) {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setData(data));
    }
  }, [selectTable]);

  const handleChange = (event) => {
    setSelectTable(event.target.value);
  };

  const columns = {
    Accounts: [
      { title: "Логин", field: "login" },
      { title: "Пароль", field: "password" },
      { title: "Уровень доступа", field: "level" },
    ],
    Tariffs: [
      { title: "Описание", field: "description" },
      { title: "Цена", field: "price" },
    ],
    Abonents: [
      { title: "Имя", field: "last_name" },
      { title: "внутр. номер", field: "abonent_number" },
      { title: "преобр. номер", field: "convert_number" },
    ],
  };

  return (
    <div>
      <div style={{ width: 200, marginTop: 20 }}>
        <Box>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Таблица</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectTable}
              label="Таблица"
              onChange={handleChange}
            >
              <MenuItem value={"Accounts"}>Аккаунты</MenuItem>
              <MenuItem value={"Tariffs"}>Тарифы</MenuItem>
              <MenuItem value={"Abonents"}>Абоненты</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
      {selectTable && (
        <div className={s.table}>
          <MaterialTable
            title=""
            columns={columns[selectTable]}
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
      )}
    </div>
  );
}
