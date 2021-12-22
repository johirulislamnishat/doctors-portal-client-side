import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Service = (props) => {
    const { name, description, image } = props.service;

    return (
        <Card sx={{ minWidth: 275, boxShadow: 0, mt: 6 }}>
            <CardContent>
                <CardMedia
                    component="img"
                    style={{ width: 'auto', height: '80', margin: '0 auto' }}
                    image={image}
                    alt={name}
                />
                <Typography sx={{ textAlign: 'center', my: 2 }} variant="h5" component="div">
                    {name}
                </Typography>
                <Typography sx={{ textAlign: 'center', mb: 1.5 }} color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default Service;