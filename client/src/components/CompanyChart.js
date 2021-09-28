import React, { useState, useEffect } from "react";
import { Typography, Container, Box } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";
import { useQuery, useMutation } from '@apollo/client';
import { GET_ME } from '../utils/queries';

export default function CustomCharts({ data }) {

  const [chartData, setChartData] = useState();
  const [score, setScore] = useState([])
  // setScore.push(data.environmentScore, data.socialScore, data.governanceScore );
// setScore

  useEffect(() => {
    let newScore = []
    newScore.push(data.environmentScore, data.socialScore, data.governanceScore );
    setScore(newScore)

    const newChart = {

      labels: [
        'Enivormental Score',
        'Social Score',
        'Governance Score'
      ],
  
      datasets: [{
        label: 'something',
        data: newScore,
        backgroundColor: [
          '#415D43',
          '#CED0CE',
          '#1E91D6'
        ],
        hoverOffset: 4
      }]
  
    } 
      setChartData(newChart)

  }, [setScore, data])

 

  return (
    <>
      
      <Box sx={{
        width: 400,
        height: 200,
      }}>
        <h1>{data.companyName}</h1>
        <Typography variant="h6">ESG Scores</Typography>
      <Doughnut
        data={chartData}
        options={{
          maintainAspectRatio: true,
          title: {
            display: true,
            text: "ESG Scores",
            fontSize: 25 
          },
          legend: { display: true, position: "bottom" }
        }}
        />
      </Box>

    </>
  );
}