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

function getData(playerData) {
  const r = ~~(Math.random() * 255);
  const b = ~~(Math.random() * 255);
  const g = ~~(Math.random() * 255);

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
        backgroundColor: `rgba(${r}, ${g}, ${b}, 0.2)`,
        borderColor: `rgba(${r}, ${g}, ${b}, 1)`,
        borderWidth: 1,
      },
    ],
  };
  return data;
}


const Graph = ({ playerData = {}, darkTheme }) => {
  const data = getData(playerData);
  const borderColor = darkTheme? "rgba(255, 255, 255, 0.7)": "rgba(0, 0, 0, 0.4)" ;

  const chartOptions = {
    layout: {
      padding: {
        left: 5
      }
    },
    scales: {
      r: {
        angleLines: { color: borderColor},
        grid: { color: borderColor},
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