import React from "react";
import { Chart } from "react-google-charts";

const data = [
  ["Task", "Hours per Day"],
  ["Basic Tees", 55],
  ["Custom Short Pants", 31],
  ["Super hoodies", 14],
];


export function PieChart() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      
      width={"100%"}
      height={"200px"}
    />
  );
}