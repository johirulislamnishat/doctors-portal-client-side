import { Button, Paper, TableContainer } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import React, { useState } from 'react';

const columns = [
    { id: 'brand', label: 'Brand' },
    { id: 'number', label: 'Card Number' },
    { id: 'date', label: 'Expire Date' },
    { id: 'cvc', label: 'CVC' },
    { id: 'zip', label: 'Zip Code' },

];

const cardInfos = [
    {
        id: '01',
        brand: 'Visa (debit)',
        number: '4000056655665556',
        date: '06/26',
        cvc: '343',
        zip: '40987',
    },
    {
        id: '02',
        brand: 'Mastercard (2-series)',
        number: '2223003122003222',
        date: '06/26',
        cvc: '343',
        zip: '40987',
    },
    {
        id: '03',
        brand: 'Mastercard (debit)',
        number: '5200828282828210',
        date: '09/29',
        cvc: '673',
        zip: '08979',
    },
    {
        id: '04',
        brand: 'American Express',
        number: '378282246310005',
        date: '07/30',
        cvc: '878',
        zip: '98987',
    },
    {
        id: '05',
        brand: 'American Express',
        number: '371449635398431',
        date: '12/28',
        cvc: '763',
        zip: '65587',
    },
    {
        id: '06',
        brand: 'Discover',
        number: '6011000990139424',
        date: '03/25',
        cvc: '543',
        zip: '56987',
    },
]
const CardInfo = () => {

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(15);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <div>
            <h1 className='mt-4'>Use This Card Info</h1>
            <Paper sx={{ marginTop: 6, width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 550 }}>
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
                            {cardInfos
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((cardInfo) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={cardInfo.id}>

                                            <TableCell >
                                                {cardInfo.brand}
                                            </TableCell>

                                            <TableCell >
                                                {cardInfo.number}
                                            </TableCell>

                                            <TableCell >
                                                {cardInfo.date}
                                            </TableCell>

                                            <TableCell> {cardInfo.cvc} </TableCell>

                                            <TableCell> {cardInfo.zip} </TableCell>

                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>

                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={cardInfos.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>

        </div>
    );
};

export default CardInfo;