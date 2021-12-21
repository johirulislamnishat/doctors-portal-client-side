import { Paper, TableContainer } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import React, { useEffect, useState } from 'react';
import UserInfo from './UserInfo';


const columns = [
    { id: 'id', label: 'ID', width: 70 },
    { id: 'displayName', label: 'User Name', minWidth: 120, },
    { id: 'email', label: 'User Email', minWidth: 130, },
    { id: 'role', label: 'User Role', minWidth: 80, },
    { id: 'action', label: 'Action', }

];

const ManageUsers = () => {

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(15);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    // engineer data

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const url = (`http://localhost:5000/users/`)
        fetch(url)
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setUsers(data))
    }, [])

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 550 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead >
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{
                                        fontSize: '14px', textTransform: 'uppercase',
                                        fontWeight: '600', backgroundColor: '#0dc276', color: '#fff', minWidth: column.minWidth
                                    }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {users
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((user) => {
                                return (
                                    <UserInfo
                                        key={user._id}
                                        user={user}
                                    ></UserInfo>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>

            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={users.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
};

export default ManageUsers;