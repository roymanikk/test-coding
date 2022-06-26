import { React, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

// const labels = ["January", "February", "March", "April", "May", "June", "July"];

export function TestArray() {
  const [Input, setInput] = useState();

  let color = [];
  let labels = Array.from({ length: Input }, () =>
    Math.floor(Math.random() * Input).toString()
  );

  // console.log(labels);

  function getColor(input) {
    if (input > 0 && input <= 25) {
      color.push("rgba(68, 255, 0, 0.721)");
    } else if (input > 25 && input <= 50) {
      color.push("rgba(255, 251, 0, 0.721)");
    } else if (input > 50 && input <= 75) {
      color.push("rgba(255, 0, 0, 0.721)");
    } else if (input > 75 && input <= 100) {
      color.push("rgba(0, 21, 255, 0.721)");
    } else color.push("rgba(0, 0, 0, 0.721)");

    return color;
  }

  function getRandomInt(min, max) {
    let value;
    min = Math.ceil(min);
    max = Math.floor(max);
    value = Math.floor(Math.random() * (max - min + 1) + min);
    getColor(value);
    return value;
  }

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() => getRandomInt(1, 100)),
        backgroundColor: color,
      },
    ],
  };
  return (
    <div>
      <input
        type={"number"}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      ></input>
      <button
        onClick={(e) => {
          e.preventDefault();
          setInput("");
        }}
      >
        stop
      </button>
      <Bar width={"500px"} options={options} data={data} />
    </div>
  );
}

export default TestArray;
