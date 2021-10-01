import React from "react";
import { Box } from "@material-ui/core";
import { Table, TableHead, TableBody, TableRow, TableCell, TableContainer } from '@mui/material'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#CED0CE',
    border: ' 2px solid #111D13',
    color: '#111D13',
  },
  row: {
    backgroundColor: '#CED0CE',
    color: '#111D13',
    '&:hover': {
      backgroundColor: '#1E91D6',
      color: 'snow'
    }
  },
  cell: {
    color: '#111D13',
  },
  box: {
    marginBottom: '20px',
  }
})

export default function DataTable({ data }) {
  const classes = useStyles(data)

  return (

    <Box sx={{
      width: 400,
      // height: 200,
      // marginLeft: '50px',
      marginTop: '85px',
      marginBottom: '30px',
      color: '#111D13'
    }}>
      <TableContainer className={classes.root}>
        <Table>
          <TableHead>
            {/* <h1>{data.companyName ? data.companyName : "Loading"}</h1> */}
            <TableRow >
              <TableCell />
              <TableCell style={{
                color: '#111D13'
              }}> Score </TableCell>
              <TableCell style={{ color: '#111D13' }}> Grade </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow className={classes.row} >
              <TableCell style={{ color: '#111D13' }}>Environmental</TableCell>
              <TableCell style={{ color: '#111D13' }}>{data.environmentGrade ? data.environmentGrade : 0}</TableCell>
              <TableCell style={{ color: '#111D13' }}>{data.environmentScore ? data.environmentScore : 0}</TableCell>
            </TableRow>
            <TableRow className={classes.row}>
              <TableCell style={{ color: '#111D13' }}>Social</TableCell>
              <TableCell style={{ color: '#111D13' }}>{data.socialGrade ? data.socialGrade : 0}</TableCell>
              <TableCell style={{ color: '#111D13' }}>{data.socialScore ? data.socialScore : 0}</TableCell>
            </TableRow>
            <TableRow className={classes.row}>
              <TableCell style={{ color: '#111D13' }}>Governance</TableCell>
              <TableCell style={{ color: '#111D13' }}>{data.governanceGrade ? data.governanceGrade : 0}</TableCell>
              <TableCell style={{ color: '#111D13' }}>{data.governanceScore ? data.governanceScore : 0}</TableCell>
            </TableRow>

          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  



  );
}