import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./calendar.css";
import moment from "moment";

export default function ReactDatepicker() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "flex-end", marginRight: 20 }}
    >
      <div style={{ marginRight: 20 }}>
        <DatePicker
          selected={startDate}
          onChange={handleStartDateChange}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          dateFormat="yyyy-MM-dd"
          className="calendar"
          placeholderText="Дата начала"
        />
      </div>
      <div style={{ marginRight: 20 }}>
        <DatePicker
          selected={endDate}
          onChange={handleEndDateChange}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate}
          dateFormat="yyyy-MM-dd"
          className="calendar"
          placeholderText="Дата окончания"
        />
      </div>
    </div>
  );
}
