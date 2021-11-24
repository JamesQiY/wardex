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
  const red = ~~(Math.random() * 256/2);
  const green = ~~(Math.random() * 256/2);
  const blue = ~~(Math.random() * 256/2);
  return [`rgb(${red},${green}, ${blue}, 1)`, `rgb(${red},${green}, ${blue}, 0.4)`];
}
function generateLightColor() {
  const red = ~~((1 + Math.random()) * 256/2);
  const green = ~~((1 + Math.random()) * 256/2);
  const blue = ~~((1 + Math.random()) * 256/2);
  return [`rgb(${red},${green}, ${blue}, 1)`, `rgb(${red},${green}, ${blue}, 0.4)`];
}

function getColor(darkTheme) {
  return darkTheme? generateLightColor() : generateDarkColor();
}

function getData(playerData, darkTheme) {
  const [borderColor,backgroundColor] = getColor(darkTheme);

  const ratingArr = [
    playerData.opening,
    playerData.formation,
    playerData.unit,
    playerData.economy,
    playerData.speed,
    playerData.tactics
  ]

  const data = {
    labels: ['Opening', 'Formation', 'Unit Comp', 'Economy', 'Speed', 'Tactics'],
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


const Graph = ({ playerData = {}, darkTheme }) => {
  const data = getData(playerData, darkTheme);
  const borderColor = darkTheme ? "rgba(255, 255, 255, 0.7)" : "rgba(0, 0, 0, 0.6)";

  const chartOptions = {
    layout: {
      padding: {
        left: 2
      }
    },
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