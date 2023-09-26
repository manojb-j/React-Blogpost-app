import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { updateBlog } from './UserReducer';
import { deleteBlog } from './UserReducer';
import backgroundImage from './Gradientbg.gif'; // Import your background image file
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './cards.css'


const View = () => {
  const { id } = useParams();
  const blogs = useSelector((state) => state.blogs);
  const existingBlog = blogs.filter(f => f.id == id);
  const { name, category, content } = existingBlog[0];
  const [uname, setName] = useState(name);
  const [ucategory, setCategory] = useState(category);
  const [ucontent, setContent] = useState(content);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    dispatch(deleteBlog({ id: id }))
  }

  return (
    <div className="container-fluid vw-100" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="row justify-content-center align-items-center min-vh-100 p-5">
        <div class="card text-center"
        style={{ 
          background: 'rgba(255, 255, 255, 0.5)', // Translucent white background
          backdropFilter: 'blur(5px)', // Adjust the blur amount as needed
          borderRadius: '10px', // Rounded corners for the glassmorphism effect
          padding: '20px', // Optional padding
        }}
        >
          <div class="card-header ">
            <h4>Blog : {id}</h4>
          </div>
          <div class="card-body">
            <h2 class="card-title display-2" style={{color:'white', fontWeight: 900}}>{uname}</h2>
            <p class="card-text p-5 ">{ucontent}</p>
            <Link to='/' class="btn btn-outline-success">Back home</Link>
            <Link to={`/edit/${id}`} className='btn btn-primary ms-2'>Edit</Link>
            {/* <button onClick={() => handleDelete(id)} className='btn btn-danger ms-2'>delete</button> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default View
