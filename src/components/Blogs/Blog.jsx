import React, { useEffect, useState } from 'react';
import SingleBlog from '../singleBlog/SingleBlog';

const Blog = ({addToBookmark, handleReadingTime}) => {
    const [blog, setBlog] = useState([])

    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlog(data))

    } ,[])
    return (
        <div className='md:w-2/3'>
            <h1 className='text-2xl font-bold'>Blogs:{blog.length}</h1>
            {
                blog.map(blog => <SingleBlog handleReadingTime={handleReadingTime} addToBookmark={addToBookmark} id={blog.id} blog={blog}></SingleBlog>)
            }
        </div>
    );
};

export default Blog;