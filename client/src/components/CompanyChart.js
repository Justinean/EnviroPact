import React, { useState, useEffect } from "react";
import { Typography, Container, Box } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";
import { useQuery, useMutation } from '@apollo/client';
import { GET_ME } from '../utils/queries';

export default function CustomCharts(props) {

  const [chartData, setChartData] = useState();
  const [score, setScore] = useState([])
  // setScore.push(props.data[0].environment_score, props.data[0].social_score, props.data[0].governance_score );
// setScore

  useEffect(() => {
    let newScore = []
    newScore.push(props.data[0].environment_score, props.data[0].social_score, props.data[0].governance_score );
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

  }, [setScore, props])

 

  return (
    <>
      
      <Box sx={{
        width: 400,
        height: 200,
      }}>
        <h1>{props.data[0].company_name}</h1>
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