import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import EditIcon from '@mui/icons-material/Edit';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    
}));

const columns = [
    { id: 'id', label: 'Id', minWidth: 70 },
    { id: 'technology', label: 'Technology', minWidth: 170 },
    { id: 'grade', label: 'Grade', minWidth: 100 },
    {
        id: 'date',
        label: 'Last Modified Date',
        minWidth: 170,
        align: 'right',
        // format: (value) => value.toLocaleString('en-US'),
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
        id: 'edit',
        minWidth: 90,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    },
    {
        id: 'more',
        minWidth: 90,
        align: 'center',
        format: (value) => value.toLocaleString('en-US'),
    },
];

function createData(id, technology, grade, date, status, cluster, edit, more) {
    // const density = population / size;
    return { id, technology, grade, date, status, cluster, edit, more };
}

const rows = [
    createData(1, 'Python', 'C1', '12/02/2021', 'Open', 'CSI', <EditIcon style={{cursor:'pointer'}}/>, <MoreVertIcon style={{cursor:'pointer'}}/>),
    createData(2, 'Java', 'A5', '12/02/2021', 'Closed', 'CSI', <EditIcon style={{cursor:'pointer'}}/>, <MoreVertIcon style={{cursor:'pointer'}}/>),
    createData(3, 'Spring Boot', 'B1', '12/02/2021', 'On Hold', 'CSI', <EditIcon style={{cursor:'pointer'}}/>, <MoreVertIcon style={{cursor:'pointer'}}/>),
    createData(4, 'Angular', 'B2', '12/02/2021', 'In Progress', 'CSI', <EditIcon style={{cursor:'pointer'}}/>, <MoreVertIcon style={{cursor:'pointer'}}/>),
    createData(5, 'React', 'A4', '12/02/2021', 'Cancelled', 'CSI', <EditIcon style={{cursor:'pointer'}}/>, <MoreVertIcon style={{cursor:'pointer'}}/>),
    createData(6, 'Manual testing', 'B2', '12/02/2021', 'Withdrawn', 'CSI', <EditIcon style={{cursor:'pointer'}}/>, <MoreVertIcon style={{cursor:'pointer'}}/>),
    createData(7, 'Python', 'C2', '12/02/2021', 'Open', 'CSI', <EditIcon style={{cursor:'pointer'}}/>, <MoreVertIcon style={{cursor:'pointer'}}/>),
    createData(8, 'Java', 'A4', '12/02/2021', 'Withdrawn', 'CSI', <EditIcon style={{cursor:'pointer'}}/>, <MoreVertIcon style={{cursor:'pointer'}}/>),
    createData(9, 'Spring Boot', 'A4', '12/02/2021', 'Closed', 'CSI', <EditIcon style={{cursor:'pointer'}}/>, <MoreVertIcon style={{cursor:'pointer'}}/>),
    createData(10, 'Angular', 'B2', '12/02/2021', 'On Hold', 'CSI', <EditIcon style={{cursor:'pointer'}}/>, <MoreVertIcon style={{cursor:'pointer'}}/>),
    createData(11, 'React', 'C1', '12/02/2021', 'Withdrawn', 'CSI', <EditIcon style={{cursor:'pointer'}}/>, <MoreVertIcon style={{cursor:'pointer'}}/>),
    createData(12, 'Manual testing', 'C2', '12/02/2021', 'Closed', 'CSI', <EditIcon style={{cursor:'pointer'}}/>, <MoreVertIcon style={{cursor:'pointer'}}/>),
];

export default function Mytable() {
    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.format && typeof value === 'number'
                                                        ? column.format(value)
                                                        : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}