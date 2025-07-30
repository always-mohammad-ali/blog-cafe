import React, { useEffect, useState } from 'react';

const Blog = () => {
    const [blog, setBlog] = useState([])

    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlog(data))

    } ,[])
    return (
        <div className='md:w-2/3'>
            <h1 className='text-3xl border-2 '>Blogs:{blog.length}</h1>
        </div>
    );
};

export default Blog;