import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import React, { useState } from 'react';


const ManageContactData = ({ contact }) => {

    const { _id, userName, userEmail, subject, massage } = contact;


    //Delete Contact
    const [deleteContact, setDeleteContact] = useState([]);

    const handleDeleteContact = id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/deleteContacts/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Delete Success');
                        const remainingContact = deleteContact.filter(contact => contact._id !== id);
                        setDeleteContact(remainingContact);
                    }
                })
        }
    }
    return (
        <TableRow hover role="checkbox" tabIndex={-1}>

            <TableCell className='user-name'>
                {_id.slice(2, 8)}
            </TableCell>

            <TableCell className='user-name'>
                {userName}
            </TableCell>

            <TableCell >
                {userEmail}
            </TableCell>

            <TableCell> {subject} </TableCell>
            <TableCell> {massage} </TableCell>

            <TableCell style={{ fontSize: 23 }} > <button className='bg-transparent border-0' onClick={() => handleDeleteContact(_id)}><i style={{ cursor: 'pointer' }} className="far fa-trash-alt text-danger"></i></button> </TableCell>


        </TableRow>
    );
};

export default ManageContactData;