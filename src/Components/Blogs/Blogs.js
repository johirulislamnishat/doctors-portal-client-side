import { Typography } from '@mui/material';
import React from 'react';
import blogs from '../../Data/blogs';
import BlogPost from '../BlogPost/BlogPost';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className="blogs my-5">
            <div className="container">
                <Typography className='text-primary text-uppercase' sx={{ mb: 2, mt: 2, textAlign: 'center' }} variant="h6" component="div">
                    our blog
                </Typography>
                <Typography sx={{ textAlign: 'center' }} variant="h4" component="div">
                    From Our Blog News
                </Typography>


                <div className="card-deck mt-5">
                    {
                        blogs.map(blog => <BlogPost blog={blog} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Blogs;