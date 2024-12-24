'use client'
import React from 'react'
import {Chart as ChartJs, ArcElement, Tooltip, Legend} from 'chart.js'
import {Doughnut} from 'react-chartjs-2'
ChartJs.register(ArcElement, Tooltip, Legend)
const DoughnutChart = ({accounts}:DoughnutChartProps) => {
    const data={
        datasets:[
            {
                label:"Banks",
                data:[1250,2500,3750],
                backgroundColor:["#1d4ed8","#3b82f6","#f59e0b"],
            }
        ],
        labels:["Bank 1","Bank 2","Bank 3"],
    }

  return (
   <Doughnut
   options={{
    cutout:'60%',
    plugins:{legend:
        {display:false}
    }
   }}
   
   data={data} />
  )
}

export default DoughnutChart