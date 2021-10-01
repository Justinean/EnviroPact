import React, { Fragment } from "react";
import { Box } from "@material-ui/core";
import { Table, TableHead, TableBody, TableRow, TableCell, TableContainer, List, ListItem, ListItemText } from '@mui/material'
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

export default function DataTable({ data, useFullData }) {
  const classes = useStyles(data)

  const _renderStandardSetOfData = () => {
    return (
        <Table>
          <TableHead>
            {/* <h1>{data.companyName ? data.companyName : "Loading"}</h1> */}
            <TableRow >
              <TableCell />
              <TableCell style={{
                color: '#111D13'
              }}> Grade </TableCell>
              <TableCell style={{ color: '#111D13' }}> Level </TableCell>
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
    );
  }

  const _renderFullSetOfData = () => {
    const {
      companyId,
      companyName,
      exchangeSymbol,
      stockSymbol,
      environmentGrade,
      environmentLevel,
      environmentScore,
      socialGrade,
      socialScore,
      socialLevel,
      governanceGrade,
      governanceLevel,
      governanceScore,
      total,
      totalGrade,
      totalLevel,
      lastProcessingDate
    } = data;

    return (
      <Table>
          <TableHead>
          <p>{companyId} - {companyName} - {exchangeSymbol}/{stockSymbol} [{lastProcessingDate}]</p>
            <TableRow >
              <TableCell />
              <TableCell style={{
                color: '#111D13'
              }}> Grade </TableCell>
              <TableCell style={{ color: '#111D13' }}> Level </TableCell>
              <TableCell style={{ color: '#111D13' }}> Score </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow className={classes.row} >
            <TableCell style={{ color: '#111D13' }}>Environmental</TableCell>
            <TableCell style={{ color: '#111D13' }}>{environmentGrade ? environmentGrade : 0}</TableCell>
            <TableCell style={{ color: '#111D13' }}>{environmentLevel ? environmentLevel : 0}</TableCell>
            <TableCell style={{ color: '#111D13' }}>{environmentScore ? environmentScore : 0}</TableCell>
          </TableRow>
          <TableRow className={classes.row} >
            <TableCell style={{ color: '#111D13' }}>Social</TableCell>
            <TableCell style={{ color: '#111D13' }}>{socialGrade ? socialGrade : 0}</TableCell>
            <TableCell style={{ color: '#111D13' }}>{socialLevel ? socialLevel : 0}</TableCell>
            <TableCell style={{ color: '#111D13' }}>{socialScore ? socialScore : 0}</TableCell>
          </TableRow>
          <TableRow className={classes.row} >
            <TableCell style={{ color: '#111D13' }}>Governance</TableCell>
            <TableCell style={{ color: '#111D13' }}>{governanceGrade ? governanceGrade : 0}</TableCell>
            <TableCell style={{ color: '#111D13' }}>{governanceLevel ? governanceLevel : 0}</TableCell>
            <TableCell style={{ color: '#111D13' }}>{governanceScore ? governanceScore : 0}</TableCell>
          </TableRow>
          <TableRow className={classes.row} >
            <TableCell style={{ color: '#111D13' }}>Total</TableCell>
            <TableCell style={{ color: '#111D13' }}>{totalGrade ? totalGrade : 0}</TableCell>
            <TableCell style={{ color: '#111D13' }}>{totalLevel ? totalLevel : 0}</TableCell>
            <TableCell style={{ color: '#111D13' }}>{total ? total : 0}</TableCell>
          </TableRow>
          </TableBody>
        </Table>
    )
  }


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
        {useFullData ? _renderFullSetOfData() : _renderStandardSetOfData() }
      </TableContainer>
    </Box>
  );
}