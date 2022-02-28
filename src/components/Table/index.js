import React, { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import EditIcon from '@mui/icons-material/Edit';
import Edit from '../Icons/Edit'
import More from '../Icons/More'
import { makeStyles, Box, Container, Toolbar } from "@material-ui/core";
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Leftbar from '../Leftbar'
import axios from 'axios'
// import ModalAccordian from '../ModalAccordian'

const useStyles = makeStyles((theme) => ({
    root: {
        fontFamily: 'Helvetica'
    },
    paperTable: {
        width: '100%',
        overflow: 'hidden',
        height: '100%'
    },
    icon: {
        cursor: 'pointer'
    },
}));

const theme = createTheme({
    typography: {
        fontFamily: 'Quicksand, 500'
    }
});

const columns = [
    { id: 'id', label: 'Id', minWidth: 70 },
    { id: 'technology', label: 'Technology', minWidth: 170 },
    { id: 'grade', label: 'Grade', minWidth: 100 },
    {
        id: 'lastmodifieddate',
        label: 'Last Modified Date',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'status',
        label: 'Status',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'cluster',
        label: 'Cluster',
        minWidth: 170,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'change',
        label: 'More Actions',
        minWidth: 120,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    }
];


export default function Mytable({ records }) {
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(6);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <ThemeProvider theme={theme}>
            <Container>
                <Paper className={classes.paperTable}>
                    <TableContainer sx={{ height: 450 }}>
                        <Table stickyHeader aria-label="sticky table" className={classes.table}>
                            <TableHead>
                                <TableRow>
                                    {columns.map((column) => (
                                        <TableCell
                                            key={column.id}
                                            align={column.align}
                                            style={{ minWidth: column.minWidth, height: '4rem' }}
                                        >
                                            {column.label}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody className={classes.tableBody}>
                                {records
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((row) => {
                                        return (
                                            <TableRow hover role="checkbox" tabIndex={-1} key={row.code} style={{ height: '4rem' }}>
                                                {/* {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.format && typeof value === 'number'
                                                        ? column.format(value)
                                                        : value}
                                                </TableCell>
                                                
                                            );
                                            
                                        })} */}
                                                <TableCell>{row.id}</TableCell>
                                                <TableCell>{row.technology}</TableCell>
                                                <TableCell>{row.grade}</TableCell>
                                                <TableCell align={'right'}>{row.lastmodifieddate}</TableCell>
                                                <TableCell align={'right'}>{row.status}</TableCell>
                                                <TableCell align={'center'}>{row.cluster}</TableCell>
                                                <TableCell align={'center'} className={classes.tableIcons}><Edit /><More /></TableCell>
                                                {/* <TableCell align={'center'}></TableCell> */}
                                                {/* className={classes.icon} fontSize="medium" */}
                                            </TableRow>
                                        );
                                    })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Divider />

                    <TablePagination
                        rowsPerPageOptions={[6, 12, 24, 100]}
                        component="div"
                        count={records.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                        style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center', margin: 'auto' }}
                    />

                    {/* <MaterialTable data={data}
                columns={columns} className={classes.table}>

            </MaterialTable> */}
                </Paper>
            </Container>
        </ThemeProvider>

    );
}