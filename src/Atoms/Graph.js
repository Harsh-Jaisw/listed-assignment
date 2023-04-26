import { Line, Chart } from "react-chartjs-2";
import "chart.js/auto";

const chartData = {
  labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
  datasets: [
    {
      label: "Guest",
      data: [100, 420, 130, 400, 190, 230],
      borderColor: "#9BDD7C",
      tension: 0.5,
      pointStyle: false,
    },
    {
      label: "User",
      data: [200, 390, 200, 300, 220, 440],
      borderColor: "#E9A0A0",
      tension: 0.5,
      pointStyle: false,
    },
  ],
};
const chartOptions = {
  scales: {
    y: {
      min: 0,
      max: 500,
      beginAtZero: true,
      ticks: {
        stepSize: 100,
      },
    },
    x: {
      grid: {
        display: false,
      },
      ticks: {
        stepSize: 100,
      },
    },
  },
  plugins: {
    legend: {
      display: false, 
    },
  },
};
export default function Graph() {
  return (
    <div style={{ height: "240px", width: "800px" }}>
    <Line data={chartData} options={chartOptions} />
  </div>
  );
}
