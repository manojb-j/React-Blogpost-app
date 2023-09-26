import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { updateBlog } from './UserReducer';


const Update = () => {
    const {id} = useParams();
    const blogs = useSelector((state) => state.blogs);
    const existingBlog = blogs.filter(f => f.id == id);
    const {name, category, content} = existingBlog[0];
    const [uname, setName] = useState(name);
    const [ucategory, setCategory] = useState(category);
    const [ucontent, setContent] = useState(content);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleUpdate = (event) => {
        event.preventDefault();
        dispatch(updateBlog({
            id: id,
            name: uname,
            category: ucategory,
            content: ucontent
        }))
        navigate('/')
    }

  return (
    <div className='container'>
    <div className='row justify-content-center align-items-center min-vh-100 newPost-bg '>
        <div className=' w-50 text-dark p-5'
        style={{ 
            background: 'rgba(255, 255, 255, 0.6)', // Translucent white background
            backdropFilter: 'blur(5px)', // Adjust the blur amount as needed
            borderRadius: '10px', // Rounded corners for the glassmorphism effect
            padding: '20px', // Optional padding
          }}
        >
            <h3>Edit the post</h3>
            <form onSubmit={handleUpdate}>
                <div>
                    <label>Name:</label>
                    <input type='text' name='name' className='form-control' value={uname} onChange={e => setName(e.target.value)}/>
                </div>
                <div>
                    <label>Category:</label>
                    <input type='text' name='category' className='form-control' value={ucategory} onChange={e => setCategory(e.target.value)}/>
                </div>
                <div>
                    <label>Content:</label>
                    <textarea type='text' name='content' className='form-control' value={ucontent} onChange={e => setContent(e.target.value)}/>
                </div><br/>
                <button className='btn btn-danger'>Update</button>
            </form>

        </div>
        </div>
    </div>
  )
}

export default Update
