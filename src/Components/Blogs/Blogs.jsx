import  { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogs,setBlogs]=useState([])
    useEffect(()=>{
      fetch('blog.json')
      .then(res=>res.json())
      .then(data=>setBlogs(data))
    },[])
    return (
        <div className='md:w-2/3'>
            <h2 className='text-2xl'>Blogs:{blogs.length}</h2>
            
           {
            blogs.map(blog=><Blog blog={blog} key={blog.id}></Blog>)
           } 
        </div>
    );
};

export default Blogs;