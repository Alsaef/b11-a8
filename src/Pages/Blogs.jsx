import React, { useEffect, useState } from 'react';

const Blogs = () => {
    const [blogs, setBlogs] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('FAQ.json', {
            method: 'GET',
            cache: 'no-cache'
        })
            .then(res => res.json())
            .then(data => { setBlogs(data), setLoading(false) })
            .catch(err => console.error('Error fetching data:', err));
    }, []);

    if (loading) {
        return (
            <div className='flex items-center justify-center min-h-screen'>
                <span className="loading loading-bars loading-lg"></span>
            </div>
        )
    }

    return (
        <div>
            <h2 className='text-center text-3xl font-bold my-2'>Blogs</h2>
            <p className='text-center my-3'>Let's Explor Our Blogs Page</p>

            <div className='my-10'>
                {
                    blogs.map(blog => (
                        <div className="card my-5 bg-gray-200 card-lg shadow-sm mx-auto w-[95%]">
                            <div className="card-body">
                                <h2 className="card-title pb-3">{blog.question}</h2>
                                <hr />
                                <p className='text-green-500 font-semibold'>Answer:</p>
                                <p>{blog.answer}</p>
                            </div>
                        </div>

                    ))
                }
            </div>
        </div>
    );
};

export default Blogs;