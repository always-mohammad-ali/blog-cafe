import React, { useEffect, useState } from 'react';
import SingleBlog from '../singleBlog/SingleBlog';

const Blog = ({addToBookmark}) => {
    const [blog, setBlog] = useState([])

    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlog(data))

    } ,[])
    return (
        <div className='md:w-2/3'>
            <h1 className='text-3xl border-2 '>Blogs:{blog.length}</h1>
            {
                blog.map(blog => <SingleBlog addToBookmark={addToBookmark} id={blog.id} blog={blog}></SingleBlog>)
            }
        </div>
    );
};

export default Blog;