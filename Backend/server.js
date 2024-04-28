const express = require("express");
const sqlite3 = require("sqlite3").verbose();

const cors = require("cors");

const appp = express();
const db = new sqlite3.Database("./sqlite/database.db");

appp.use(cors());
appp.use(express.json());

// Получение всех данных из таблицы Звонки
appp.post("/login", (req, res) => {
  const { login, password } = req.body;

  db.get(
    "SELECT * FROM Accounts WHERE login = ? AND password = ?",
    [login, password],
    (err, row) => {
      if (err) {
        res.status(500).send("Internal Server Error");
      } else if (row) {
        res.status(200).send("Login successful");
      } else {
        res.status(401).send("Unauthorized");
      }
    }
  );
});

// Получение всех данных из таблицы звонков этого месяца
appp.get("/allRings", (req, res) => {
  db.all("SELECT * FROM Rings ", [], (err, rows) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(rows);
    }
  });
});

//Получение данных из таблицы звонков(сколько было в день)
appp.get("/callsCountToday", (req, res) => {
  const date = new Date();

  const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")} ${date
    .getHours()
    .toString()
    .padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}:${date
    .getSeconds()
    .toString()
    .padStart(2, "0")}`;

  console.log(formattedDate); // Выведет дату и время в формате YYYY-MM-DD HH:mm:ss

  db.get(
    "SELECT COUNT(*) AS count FROM Rings WHERE date(date_start) = date(?)",
    [formattedDate],
    (err, row) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send({ count: row.count });
      }
    }
  );
});

// Получение данных из таблицы звонков(с начала даты)
appp.get("/allRingsdatestart", (req, res) => {
  db.all(
    "SELECT * FROM Rings WHERE date(date_start) <= date(?)",
    [],
    (err, rows) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(rows);
      }
    }
  );
});

// Получение данных из таблицы звонков(по окончанию даты)
appp.get("/allRingsdateend", (req, res) => {
  db.all(
    "SELECT * FROM Rings WHERE date(date_start) >= date(?)",
    [],
    (err, rows) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.send(rows);
      }
    }
  );
});

// Получение всех данных из таблицы Аккаунты
appp.get("/allAccounts", (req, res) => {
  db.all("SELECT * FROM Accounts", [], (err, rows) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(rows);
    }
  });
});

// Получение всех данных из таблицы Абоненты
appp.get("/allAbonents", (req, res) => {
  db.all("SELECT * FROM Abonents", [], (err, rows) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(rows);
    }
  });
});

// Получение всех данных из таблицы Тарифы
appp.get("/allTariffs", (req, res) => {
  db.all("SELECT * FROM Tariffs", [], (err, rows) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(rows);
    }
  });
});

// Запуск сервера
appp.listen(3001, () => {
  console.log("Сервер запущен на порту 3001");
});
