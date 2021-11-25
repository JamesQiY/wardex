import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip
);

function generateDarkColor() {
  const red = ~~(Math.random() * 256 / 2);
  const green = ~~(Math.random() * 256 / 2);
  const blue = ~~(Math.random() * 256 / 2);
  return [`rgb(${red},${green}, ${blue}, 1)`, `rgb(${red},${green}, ${blue}, 0.4)`];
}
function generateLightColor() {
  const red = ~~((1 + Math.random()) * 256 / 2);
  const green = ~~((1 + Math.random()) * 256 / 2);
  const blue = ~~((1 + Math.random()) * 256 / 2);
  return [`rgb(${red},${green}, ${blue}, 1)`, `rgb(${red},${green}, ${blue}, 0.4)`];
}

function getData(playerData, label, darkTheme) {
  const [borderColor, backgroundColor] = darkTheme ? generateLightColor() : generateDarkColor();

  let ratingArr = [];
  for (const key of label) {
    ratingArr.push(playerData[key.toLowerCase()])
  }

  const data = {
    labels: label.map(label => label.split(' ')),
    datasets: [
      {
        label: 'Rating',
        data: ratingArr,
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        borderWidth: 2,
      },
    ],
  };
  return data;
}

const Graph = ({ playerData = {}, label = [], darkTheme }) => {
  let data = getData(playerData, label, darkTheme);

  const borderColor = darkTheme ? "rgba(255, 255, 255, 0.7)" : "rgba(0, 0, 0, 0.6)";

  const chartOptions = {
    layout: { padding: { left: 2 } },
    scales: {
      r: {
        angleLines: { color: borderColor },
        grid: { color: borderColor },
        min: 1,
        max: 10,
        ticks: {
          display: false,
          stepSize: 2,
        },
        pointLabels: {
          font: function (context) {
            var width = context.chart.width;
            var size = Math.round(width / 20);
            return {
              size: size,
            };
          },
          color: borderColor
        }
      }
    }
  }

  return (
    <Radar data={data} options={chartOptions} />
  )
}

export default Graph;