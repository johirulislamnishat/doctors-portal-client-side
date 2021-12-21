import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import React, { useState } from 'react';

const UserInfo = ({ user }) => {

    const { displayName, _id, email, role } = user;


    //Delete User
    const [deleteUser, setDeleteUser] = useState([]);

    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/deleteUser/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Delete Success');
                        const remainingUser = deleteUser.filter(user => user._id !== id);
                        setDeleteUser(remainingUser);
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
                {displayName}
            </TableCell>

            <TableCell >
                {email}
            </TableCell>

            <TableCell> {role} </TableCell>

            <TableCell style={{ fontSize: 23 }} > <button className='bg-transparent border-0' onClick={() => handleDeleteUser(user._id)}><i style={{ cursor: 'pointer' }} className="far fa-trash-alt text-danger"></i></button> </TableCell>


        </TableRow>
    );
};

export default UserInfo;