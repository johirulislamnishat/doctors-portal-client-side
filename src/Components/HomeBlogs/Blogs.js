import { Typography } from '@mui/material';
import React from 'react';
import blogs from '../../../Data/blogs';
import BlogPost from './BlogPost';
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


                <div className="mt-5">
                    <div class="blog-container">
                        <div class="blog-card">
                            <div class="card__header">
                                <img src="https://source.unsplash.com/600x400/?computer" alt="card__image" class="blog-img card__image" width="600" />
                            </div>
                            <div class="card__body">
                                <span class="blog-tag  tag-blue">Technology</span>
                                <h4>What's new in 2022 Tech</h4>
                                <p className='text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
                            </div>
                            <div class="card__footer">
                                <div class="blog-user">
                                    <img src="https://i.pravatar.cc/40?img=1" alt="user__image" class="user__image" />
                                    <div class="user__info">
                                        <h5>Jane Doe</h5>
                                        <small>2h ago</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="blog-card">
                            <div class="card__header">
                                <img src="https://source.unsplash.com/600x400/?food" alt="card__image" class="blog-img card__image" width="600" />
                            </div>
                            <div class="card__body">
                                <span class="blog-tag tag-brown">Food</span>
                                <h4>Delicious Food</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
                            </div>
                            <div class="card__footer">
                                <div class="blog-user">
                                    <img src="https://i.pravatar.cc/40?img=2" alt="user__image" class="user__image" />
                                    <div class="user__info">
                                        <h5>Jony Doe</h5>
                                        <small>Yesterday</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="blog-card">
                            <div class="card__header">
                                <img src="https://source.unsplash.com/600x400/?car,automobile" alt="card__image" class="blog-img card__image" width="600" />
                            </div>
                            <div class="card__body">
                                <span class="blog-tag tag-red">Automobile</span>
                                <h4>Race to your heart content</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!</p>
                            </div>
                            <div class="card__footer">
                                <div class="blog-user">
                                    <img src="https://i.pravatar.cc/40?img=3" alt="user__image" class="user__image" />
                                    <div class="user__info">
                                        <h5>John Doe</h5>
                                        <small>2d ago</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;