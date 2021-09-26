import React, { useState } from "react";
import { Typography, Container, Box } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";
import { useQuery, useMutation } from '@apollo/client';
import { GET_ME } from '../utils/queries';

export default function CustomCharts() {

  const { loading, data } = useQuery(GET_ME);
  const userData = data?.me || {};



  const [chartData, setChartData] = useState({

    labels: [
      'Enivormental Score',
      'Social Score',
      'Governance Score'
    ],

    datasets: [{
      label: 'something',
      data: [316, 339, 300],
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