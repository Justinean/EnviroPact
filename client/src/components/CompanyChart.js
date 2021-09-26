import React, { useState } from "react";
import { Typography, Container, Box } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";
import { useQuery, useMutation } from '@apollo/client';
import { GET_ME } from '../utils/queries';

export default function CustomCharts(props) {


  const [score, setScore] = useState([])
  score.push(props.data[0].environment_score, props.data[0].social_score, props.data[0].governance_score );


  const [chartData, setChartData] = useState({

    labels: [
      'Enivormental Score',
      'Social Score',
      'Governance Score'
    ],

    datasets: [{
      label: 'something',
      data: score,
      backgroundColor: [
        '#415D43',
        '#CED0CE',
        '#1E91D6'
      ],
      hoverOffset: 4
    }]

  });

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