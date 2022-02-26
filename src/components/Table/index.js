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

// function createData(id, technology, grade, date, status, cluster, edit, more) {
//     // const density = population / size;
//     return { id, technology, grade, date, status, cluster, edit, more };
// }

// const rows = [
//     createData(1, 'Python', 'C1', '12/02/2021', 'Open', 'CSI', <EditIcon style={{ cursor: 'pointer' }} />, <MoreVertIcon style={{ cursor: 'pointer' }} />),
//     createData(2, 'Java', 'A5', '12/02/2021', 'Closed', 'CSI', <EditIcon style={{ cursor: 'pointer' }} />, <MoreVertIcon style={{ cursor: 'pointer' }} />),
//     createData(3, 'Spring Boot', 'B1', '12/02/2021', 'On Hold', 'CSI', <EditIcon style={{ cursor: 'pointer' }} />, <MoreVertIcon style={{ cursor: 'pointer' }} />),
//     createData(4, 'Angular', 'B2', '12/02/2021', 'In Progress', 'CSI', <EditIcon style={{ cursor: 'pointer' }} />, <MoreVertIcon style={{ cursor: 'pointer' }} />),
//     createData(5, 'React', 'A4', '12/02/2021', 'Cancelled', 'CSI', <EditIcon style={{ cursor: 'pointer' }} />, <MoreVertIcon style={{ cursor: 'pointer' }} />),
//     createData(6, 'Manual testing', 'B2', '12/02/2021', 'Withdrawn', 'CSI', <EditIcon style={{ cursor: 'pointer' }} />, <MoreVertIcon style={{ cursor: 'pointer' }} />),
//     createData(7, 'Python', 'C2', '12/02/2021', 'Open', 'CSI', <EditIcon style={{ cursor: 'pointer' }} />, <MoreVertIcon style={{ cursor: 'pointer' }} />),
//     createData(8, 'Java', 'A4', '12/02/2021', 'Withdrawn', 'CSI', <EditIcon style={{ cursor: 'pointer' }} />, <MoreVertIcon style={{ cursor: 'pointer' }} />),
//     createData(9, 'Spring Boot', 'A4', '12/02/2021', 'Closed', 'CSI', <EditIcon style={{ cursor: 'pointer' }} />, <MoreVertIcon style={{ cursor: 'pointer' }} />),
//     createData(10, 'Angular', 'B2', '12/02/2021', 'On Hold', 'CSI', <EditIcon style={{ cursor: 'pointer' }} />, <MoreVertIcon style={{ cursor: 'pointer' }} />),
//     createData(11, 'React', 'C1', '12/02/2021', 'Withdrawn', 'CSI', <EditIcon style={{ cursor: 'pointer' }} />, <MoreVertIcon style={{ cursor: 'pointer' }} />),
//     createData(12, 'Manual testing', 'C2', '12/02/2021', 'Closed', 'CSI', <EditIcon style={{ cursor: 'pointer' }} />, <MoreVertIcon style={{ cursor: 'pointer' }} />),

// ];
const records = [
    {
        "id": 1,
        "technology": "Python & Django",
        "grade": "C1",
        "lastmodifieddate": "18-08-2021",
        "status": "Open",
        "cluster": "DSI"
    },
    {
        "id": 2,
        "technology": "Java & Spring",
        "grade": "A5",
        "lastmodifieddate": "19-08-2021",
        "status": "Closed",
        "cluster": "R&S"
    },
    {
        "id": 3,
        "technology": "Angular",
        "grade": "B1",
        "lastmodifieddate": "10-08-2021",
        "status": "On Hold",
        "cluster": "R&E"
    },
    {
        "id": 4,
        "technology": "Python",
        "grade": "A4",
        "lastmodifieddate": "02-08-2021",
        "status": "In progress",
        "cluster": "Multi-Channel"
    },
    {
        "id": 5,
        "technology": "Java & Spring  boot",
        "grade": "A4",
        "lastmodifieddate": "01-08-2021",
        "status": "Cancelled",
        "cluster": "R&S"
    },
    {
        "id": 6,
        "technology": "Manual Testing",
        "grade": "B2",
        "lastmodifieddate": "30-08-2021",
        "status": "Withdrawn",
        "cluster": "R&E"
    },
    {
        "id": 7,
        "technology": "Manual Testing",
        "grade": "B2",
        "lastmodifieddate": "30-08-2021",
        "status": "Withdrawn",
        "cluster": "R&E"
    },
    {
        "id": 8,
        "technology": "Manual Testing",
        "grade": "B2",
        "lastmodifieddate": "30-08-2021",
        "status": "Withdrawn",
        "cluster": "R&E"
    },
    {
        "id": 9,
        "technology": "Manual Testing",
        "grade": "B2",
        "lastmodifieddate": "30-08-2021",
        "status": "Withdrawn",
        "cluster": "R&E"
    },
    {
        "id": 10,
        "technology": "Manual Testing",
        "grade": "B2",
        "lastmodifieddate": "30-08-2021",
        "status": "Withdrawn",
        "cluster": "R&E"
    },
]

// const columns = [
//     {
//         title: 'Id', field: 'id',
//     },
//     {
//         title: 'Technology', field: 'technology',
//     },
//     {
//         title: 'Grade', field: 'grade',
//     },
//     {
//         title: 'Last Modified Date', field: 'lastmodifieddate',
//     },
//     {
//         title: 'Status', field: 'status',
//     },
//     {
//         title: 'Cluster', field: 'cluster',
//     },
// ]

const requests = []


export default function Mytable() {
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(6);
    const [requests, setRequests] = useState(records)

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    // useEffect(async () => {
    //     let requests = await axios.get("url")
    // }, [])

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
                                {requests
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
                    {/* <Divider style={{ marginTop: '2rem' }} /> */}

                    <TablePagination
                        rowsPerPageOptions={[6, 12, 24, 100]}
                        component="div"
                        count={requests.length}
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