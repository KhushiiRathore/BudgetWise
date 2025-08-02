// src/components/PieChart.js
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function PieChart({ totalIncome, totalExpense }) {
  const pieData = {
    labels: ['Income', 'Expense'],
    datasets: [
      {
        data: [totalIncome, totalExpense],
        backgroundColor: ['#d8f3dc', '#fde2e4'], // pastel green & pink
        hoverBackgroundColor: ['#b7e4c7', '#f8d7da']
      }
    ]
  };

  return (
    <div className="chart-container">
      <Pie data={pieData} />
    </div>
  );
}

export default PieChart;
