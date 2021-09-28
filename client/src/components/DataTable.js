import React, { useState } from "react";
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



export default function DataTable(props) {

    function createData(enviroGrade, enviroScore, socialGrade, socialScore, govGrade, goveScore) {
        return { enviroGrade, enviroScore, socialGrade, socialScore, govGrade, goveScore };
    }
    const classes = useStyles(props)


    return (
       
            <Box sx={{
        width: 400,
        height: 200,
        marginBottom: '20px',
        color: '#111D13'
      }}>
            <TableContainer className={classes.root}>
                <Table>
                    <TableHead>
                        <h1>Company Name</h1>
                        <TableRow >
                            <TableCell />
                            <TableCell style={{
                                color: '#111D13'
                                }}> Score </TableCell>
                            <TableCell style={{color: '#111D13'}}> Grade </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow className={classes.row} >
                            <TableCell style={{color: '#111D13'}}>Environmental</TableCell>
                            <TableCell style={{color: '#111D13'}}>A</TableCell>
                            <TableCell style={{color: '#111D13'}}>100</TableCell>
                        </TableRow>
                        <TableRow className={classes.row}>
                            <TableCell style={{color: '#111D13'}}>Social</TableCell>
                            <TableCell style={{color: '#111D13'}}>A</TableCell>
                            <TableCell style={{color: '#111D13'}}>100</TableCell>
                        </TableRow>
                        <TableRow className={classes.row}>
                            <TableCell style={{color: '#111D13'}}>Governance</TableCell>
                            <TableCell style={{color: '#111D13'}}>A</TableCell>
                            <TableCell style={{color: '#111D13'}}>100</TableCell>
                        </TableRow>

                    </TableBody>
                </Table>
            </TableContainer>
            </Box>
           
        
        
    );
}