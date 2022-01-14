import { Paper, TableContainer } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import React, { useEffect, useState } from 'react';
import ManageContactData from './ManageContactData';


const columns = [
    { id: 'id', label: 'ID', width: 70 },
    { id: 'userName', label: 'User Name', minWidth: 120, },
    { id: 'userEmail', label: 'User Email', minWidth: 130, },
    { id: 'subject', label: 'Subject', minWidth: 160, },
    { id: 'massage', label: 'User Massage', minWidth: 200, },
    { id: 'action', label: 'Action', }

];

const ManageContact = () => {

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(15);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    // contact data

    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const url = (`https://homedocto.herokuapp.com/contact/`)
        fetch(url)
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setContacts(data))
    }, [])
    return (

        <>

            <div className='table-name'>Contact Management</div>

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
                            {contacts
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((contact) => {
                                    return (
                                        <ManageContactData
                                            key={contact._id}
                                            contact={contact}
                                        ></ManageContactData>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>

                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={contacts.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>

        </>
    );
};

export default ManageContact;