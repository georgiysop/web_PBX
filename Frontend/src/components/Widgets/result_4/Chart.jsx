import React from "react";
import { Line } from "react-chartjs-2";

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May"],
  datasets: [
    {
      label: "Up Line",
      data: [10, 20, 15, 40, 30],
      borderColor: "rgba(75, 192, 192, 1)", // Customize line color
      fill: false,
      tension: 0.4, // Adjust line tension for smoother curves
    },
    {
      label: "Flat Line",
      data: [60, 30, 80, 30, 90],
      borderColor: "rgba(255, 159, 64, 1)", // Customize line color
      fill: false,
      tension: 0.4,
    },
    {
      label: "Down Line",
      data: [50, 10, 30, 30, 10],
      borderColor: "rgba(255, 99, 132, 1)", // Customize line color
      fill: false,
      tension: 0.4,
    },
  ],
};

const options = {
  scales: {
    x: {
      display: true,
      title: {
        display: true,
        text: "Month",
      },
    },
    y: {
      display: true,
      title: {
        display: true,
        text: "Value",
      },
    },
  },
};

const LineChart = () => {
  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
};

export default LineChart;
