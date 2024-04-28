import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const data = {
  labels: [
    "Category A",
    "Category B",
    "Category C",
    "Category D",
    "Category E",
  ],
  datasets: [
    {
      label: "Dataset 1",
      data: [10, 20, 30, 40, 50],
      backgroundColor: "rgba(255, 99, 132, 0.6)", // Customize bar color
    },
    {
      label: "Dataset 2",
      data: [5, 15, 25, 35, 45],
      backgroundColor: "rgba(54, 162, 235, 0.6)", // Customize bar color
    },
    // Add more datasets as needed
  ],
};

const BarChart = ({ chartData }) => {
  return (
    <div>
      <Bar data={chartData} />
    </div>
  );
};

export default BarChart;
