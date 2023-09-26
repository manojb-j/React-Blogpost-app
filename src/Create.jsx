import React, { useState } from 'react'
import { addBlog } from './UserReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


const Create = () => {
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate();

    const blogs = useSelector((state) => state.blogs);
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addBlog({ id: blogs[blogs.length - 1].id + 1, name, category, content }))
        navigate('/')
    }

    return (
        <div className="container">
            <div className="row justify-content-center align-items-center min-vh-100 newPost-bg ">
                <form onSubmit={handleSubmit} className="col-md-6 p-5 rounded "
                style={{ 
                    background: 'rgba(255, 255, 255, 0.6)', // Translucent white background
                    backdropFilter: 'blur(5px)', // Adjust the blur amount as needed
                    borderRadius: '10px', // Rounded corners for the glassmorphism effect
                    padding: '20px', // Optional padding
                  }}
                >
                    <h3 className='text-dark'>Add New post</h3>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" name="name" className="form-control" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} required/>
                    </div>
                    <div className="form-group">
                        <label>Category</label>
                        <input type="text" name="category" className="form-control" placeholder="Enter Category" onChange={(e) => setCategory(e.target.value)} required/>
                    </div>
                    <div className="form-group">
                        <label>Content</label>
                        <textarea type="text" name="content" className="form-control" placeholder="Enter Content" onChange={(e) => setContent(e.target.value)} required/>
                    </div><br></br>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary">New Post</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Create
