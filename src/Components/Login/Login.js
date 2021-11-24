import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import loginBg from '../../../src/images/login.png'
import { Container, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Sneackbar from '../Sneackbar';

const Login = () => {
    const [openSneackBar, setOpenSneackBar] = React.useState(false);

    const handleOnSubmit = e => {
        e.preventDefault();

    }


    // password field
    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
    });

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <Container>
            <Box sx={{ width: '100%' }}>
                <Grid sx={{ width: '75%' }} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12} md={6}>
                        <Typography marginBottom='20px' variant="h6" textAlign='center'>
                            Login
                        </Typography>

                        <form onSubmit={handleOnSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
                            <TextField
                                label="User name"
                                type="text"
                                sx={{ width: '75%', m: 1 }}
                                variant="standard"
                            />
                            <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={values.showPassword ? 'text' : 'password'}
                                    value={values.password}
                                    onChange={handleChange('password')}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                            >
                                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Password"
                                />
                            </FormControl>
                            <Typography variant="body2" color='#ff1744' style={{ margin: 1, textAlign: 'left' }}>
                                Forgot your password?
                            </Typography>

                            <Button onClick={() => setOpenSneackBar(true)} sx={{ width: '75%', m: 1, mt: 6, background: "rgba(25,211,174)" }} variant="contained" uppercase='true'>Sign In</Button>
                        </form>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <CardMedia
                            component="img"
                            height='100vh'
                            image={loginBg}
                            alt="Paella dish"
                        />
                    </Grid>

                </Grid>
            </Box>
            <Sneackbar openSneackBar={openSneackBar} setOpenSneackBar={setOpenSneackBar} />
        </Container>
    );
};

export default Login;