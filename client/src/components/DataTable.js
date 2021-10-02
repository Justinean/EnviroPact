import React from "react";
import { Box } from "@material-ui/core";
import { Table, TableHead, TableBody, TableRow, TableCell, TableContainer, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#CED0CE',
    border: ' 2px solid #111D13',
    color: '#111D13',
    maxHeight: 440,
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
    marginBottom: '40px',
    width: 400,
    // height: 200,
    // marginLeft: '50px',
    color: '#111D13'
  },
  thead: {
    paddingTop: '10px',
  }
})

export default function DataTable({ data, useFullData }) {
  const classes = useStyles(data)

  const _renderStandardSetOfData = () => {
    return (
        <Table >
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
            <Typography className={classes.thead}>Last update on: </Typography>
            <Typography style={{color: '#1E91D6'}}>[{lastProcessingDate}]</Typography>
            <TableRow >
              <TableCell />
              <TableCell style={{
                color: '#111D13'
              }}></TableCell>
              <TableCell style={{ color: '#111D13' }}></TableCell>
              <TableCell style={{ color: '#111D13' }}> </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          <TableRow className={classes.row} >
            <TableCell style={{ color: '#111D13' }}>Company Id</TableCell>
            <TableCell />       
            <TableCell style={{ color: '#111D13' }}>{companyId ? companyId : 0}</TableCell>
            <TableCell /> 
          </TableRow>
          <TableRow className={classes.row} >
            <TableCell style={{ color: '#111D13' }}>Company Name</TableCell>
            <TableCell />       
            <TableCell style={{ color: '#111D13' }}>{companyName ? companyName : 0}</TableCell>
            <TableCell /> 
          </TableRow>
          <TableRow className={classes.row} >
            <TableCell style={{ color: '#111D13' }}>Exchange Symbol</TableCell>
            <TableCell />       
            <TableCell style={{ color: '#111D13' }}>{exchangeSymbol ? exchangeSymbol : 0}</TableCell>
            <TableCell /> 
          </TableRow>
          <TableRow className={classes.row} >
            <TableCell style={{ color: '#111D13' }}>Stock Symbol</TableCell>
            <TableCell />       
            <TableCell style={{ color: '#111D13' }}>{stockSymbol ? stockSymbol : 0}</TableCell>
            <TableCell /> 
          </TableRow>
            <TableRow className={classes.row} >
            <TableCell style={{ color: '#111D13' }}>Environmental Grade</TableCell>
            <TableCell />       
            <TableCell style={{ color: '#111D13' }}>{environmentGrade ? environmentGrade : 0}</TableCell>
            <TableCell /> 
          </TableRow>
          <TableRow className={classes.row} >
            <TableCell style={{ color: '#111D13' }}>Environmental Level</TableCell>
            <TableCell />
            <TableCell style={{ color: '#111D13' }}>{environmentLevel ? environmentLevel : 0}</TableCell>
            <TableCell />
          </TableRow>
          <TableRow className={classes.row} >
            <TableCell style={{ color: '#111D13' }}>Environmental Score</TableCell>
            <TableCell />
            <TableCell style={{ color: '#111D13' }}>{environmentScore ? environmentScore : 0}</TableCell>
            <TableCell />
          </TableRow>
          <TableRow className={classes.row} >
            <TableCell style={{ color: '#111D13' }}>Social Grade</TableCell>
            <TableCell />
            <TableCell style={{ color: '#111D13' }}>{socialGrade ? socialGrade : 0}</TableCell>
            <TableCell />
          </TableRow>
          <TableRow className={classes.row} >
            <TableCell style={{ color: '#111D13' }}>Social Level</TableCell>
            <TableCell />
            <TableCell style={{ color: '#111D13' }}>{socialLevel ? socialLevel : 0}</TableCell>
            <TableCell />
          </TableRow>
          <TableRow className={classes.row} >
            <TableCell style={{ color: '#111D13' }}>Social Score</TableCell>
            <TableCell />
            <TableCell style={{ color: '#111D13' }}>{socialScore ? socialScore : 0}</TableCell>
            <TableCell />
          </TableRow>
          <TableRow className={classes.row} >
            <TableCell style={{ color: '#111D13' }}>Governance Grade</TableCell>
            <TableCell />
            <TableCell style={{ color: '#111D13' }}>{governanceGrade ? governanceGrade : 0}</TableCell>
            <TableCell />
          </TableRow>
          <TableRow className={classes.row} >
            <TableCell style={{ color: '#111D13' }}>Governance Level</TableCell>
            <TableCell />
            <TableCell style={{ color: '#111D13' }}>{governanceLevel ? governanceLevel : 0}</TableCell>
            <TableCell />
          </TableRow>
          <TableRow className={classes.row} >
            <TableCell style={{ color: '#111D13' }}>Governance Score</TableCell>
            <TableCell />
            <TableCell style={{ color: '#111D13' }}>{governanceScore ? governanceScore : 0}</TableCell>
            <TableCell />
          </TableRow>
          <TableRow className={classes.row} >
            <TableCell style={{ color: '#111D13' }}>Comprehensive Grade</TableCell>
            <TableCell />
            <TableCell style={{ color: '#111D13' }}>{totalGrade ? totalGrade : 0}</TableCell>
            <TableCell />
          </TableRow>
          <TableRow className={classes.row} >
            <TableCell style={{ color: '#111D13' }}>Comprehensive Level</TableCell>
            <TableCell />
            <TableCell style={{ color: '#111D13' }}>{totalLevel ? totalLevel : 0}</TableCell>
            <TableCell />
          </TableRow>
          <TableRow className={classes.row} >
            <TableCell style={{ color: '#111D13' }}>Comprehensive Score</TableCell>
            <TableCell />
            <TableCell style={{ color: '#111D13' }}>{total ? total : 0}</TableCell>
            <TableCell />
          </TableRow>
          </TableBody>
        </Table>
    )
  }


  return (

    <Box className={classes.box}>
      <TableContainer className={classes.root}>
        {useFullData ? _renderFullSetOfData() : _renderStandardSetOfData() }
      </TableContainer>
    </Box>
  );
}