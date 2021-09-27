import React, { useState } from "react";
import { Typography, Container, Box } from "@material-ui/core";
import { useQuery, useMutation } from '@apollo/client';
import { GET_ME } from '../utils/queries';
import { Table, TableHead, TableBody, TableRow, TableCell, TableContainer } from '@mui/material'

export default function DataTable() {

    function createData(enviroGrade, enviroScore, socialGrade, socialScore, govGrade, goveScore) {
        return { enviroGrade, enviroScore, socialGrade, socialScore, govGrade, goveScore };
    }

    const rows = [
        createData('')
    ]

    return (
        <TableContainer>
            <h1>Hello from DataTable</h1>
            <Table>
                <TableHead>
                    <h1>Company Name</h1>
                    <TableRow>
                        <TableCell />
                        <TableCell> Score </TableCell>
                        <TableCell> Grade </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell>Enivormental</TableCell>
                        <TableCell>A</TableCell>
                        <TableCell>100</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Social</TableCell>
                        <TableCell>A</TableCell>
                        <TableCell>100</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Governance</TableCell>
                        <TableCell>A</TableCell>
                        <TableCell>100</TableCell>
                    </TableRow>

                </TableBody>
            </Table>
        </TableContainer>
    );
}