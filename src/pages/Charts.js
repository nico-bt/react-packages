import React from 'react'
import Chart from 'chart.js/auto';
import { Line} from 'react-chartjs-2';

const data = {
    labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo"],
    datasets: [
        {
            label: "Ventas 2021",
            data: [1, 2, 4, 3, 5],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)'
        },
        {
            label: "Ventas 2020",
            data: [3, 1.5, 2.5, 4, 8],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)'
        }
    ]
}

const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Ventas acumnuladas producto Pirulo',
      },
    },
  };

function Charts() {
  return (
    <div className='container'>
        <h2 className='underline'>
        react-chartjs-2
        </h2>
        <Line data={data} options={options}></Line>
    </div>
  )
}

export default Charts