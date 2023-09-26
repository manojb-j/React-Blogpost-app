import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteBlog } from './UserReducer';
import { useLikedBlogs } from './LikedBlogsContext';
import './cards.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Home() {
    const { likedBlogs, toggleLike } = useLikedBlogs();
    const blogs = useSelector((state) => state.blogs);
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true); // State variable to track loading state

    useEffect(() => {
        // Simulate an API request delay (you can replace this with your actual data fetching logic)
        setTimeout(() => {
            setIsLoading(false); // Set isLoading to false when data is loaded
        }, 1000); // Adjust the delay time as needed
    }, []);

    const handleDelete = (id) => {
        dispatch(deleteBlog({ id: id }));
    };

    return (
        <div className='container'>
             <header className="header-container">
                <div className="header-background"></div>
                <h1 className='header-title'>Daily Blogs.</h1>
                <Link to='/Create' className='btn btn-primary create-button'>New Blog</Link>
            </header>
            {isLoading ? ( // Display loading screen when isLoading is true
                <div className="text-center mt-5">
                    {/* <div className="background-loding"></div> */}
                    <h3>Loading.....</h3>
                </div>
            ) : (
                <div class="ag-format-container">
                    <div class="ag-courses_box">
                        {blogs.map((blog, index) => (
                            <div key={index} class="ag-courses_item">
                                <Link class="ag-courses-item_link">
                                    <div class="ag-courses-item_bg"></div>
                                    <div class="ag-courses-item_title">
                                        {blog.name}
                                    </div>
                                    <p className='text-white'>Category : {blog.category}</p>
                                    <div class="ag-courses-item_date-box">
                                        <Link to={`/view/${blog.id}`} class="ag-courses-item_date">
                                            More →
                                        </Link>
                                        <span onClick={() => toggleLike(blog.id)} className='heart-div'>
                                            {likedBlogs.includes(blog.id) ? (
                                                <i class="bi bi-heart-fill heart"></i> // Filled heart
                                            ) : (
                                                <i class="bi bi-heart heart"></i> // Empty heart
                                            )}
                                        </span>
                                        <button onClick={() => handleDelete(blog.id)} className='btn btn-sm btn-outline-light delete-button' >Delete</button>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Home;
