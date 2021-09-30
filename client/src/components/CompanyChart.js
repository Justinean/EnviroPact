import React, { useState, useEffect } from "react";
import { Box, Typography } from "@material-ui/core";
import { Doughnut } from "react-chartjs-2";

export default function CustomCharts({ data }) {
  const [chartData, setChartData] = useState();

  useEffect(() => {
    let newScore = []
    newScore.push(data.environmentScore, data.socialScore, data.governanceScore);

    const newChart = {
      labels: [
        'Environmental Score',
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
  }, [data])

  return (
    <>
      <Box sx={{
        width: 400,
        height: 200,
        // marginLeft: '100px',
        marginBottom:'150px'
      }}>
        {/* <h1>{data.companyName ? data.companyName : "Loading"}</h1> */}
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
};