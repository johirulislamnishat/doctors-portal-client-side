import React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const Sneackbar = ({ openSneackBar, setOpenSneackBar }) => {


    // const handleClick = () => {
    //     setOpen(true);
    // };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSneackBar(false);
    };
    return (

        <Stack spacing={2} sx={{ width: '100%' }}>
            {/* <Button variant="outlined" onClick={handleClick}>
                Open success snackbar
            </Button> */}
            <Snackbar open={openSneackBar} autoHideDuration={4000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    This is a success message!
                </Alert>
            </Snackbar>

            <Snackbar>
                <Alert severity="error">This is an error message!</Alert>
            </Snackbar>
            <Snackbar>
                <Alert severity="warning">This is a warning message!</Alert>
            </Snackbar>
            <Snackbar>
                <Alert severity="info">This is an information message!</Alert>
            </Snackbar>
            <Snackbar>
                <Alert severity="success">This is a success message!</Alert>
            </Snackbar>
        </Stack>

    );
};

export default Sneackbar;