import { useEffect, useState } from "react";
import BlogsBanner from "./BlogsBanner";
import { Link } from "react-router-dom";
import LatestBlog from "../BlogesLatest/LatestBlog";

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);


    useEffect(() => {
        fetch('./blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div style={{ background: 'linear-gradient(to bottom right, #3564fc 40%, #fc2323 70%)' }}>
            <LatestBlog></LatestBlog>
            <BlogsBanner></BlogsBanner>
            <div className="bg- grid grid-col-1 md:grid-cols-3 gap-4 md:p-6">
                {blogs.map(blog => 
                <Link key={blog.id} to={`/blog/${blog.id}`}
                data-aos="zoom-in-up"
                data-aos-duration="1000">
                <div  className="card w-full h-full">
                    <div>
                        <figure className="p-2">
                            <img src={blog.img} alt="Img"
                                className="w-full rounded-xl" />
                        </figure>
                    </div>
                    <div className="p-3 h-full text-start flex flex-col">
                        <h2 className="card-title mb-2 grow">{blog.title}</h2>
                        <p className=''>{blog.publishedDate}</p>
                    </div>
                </div>
                </Link>
                )}
            </div>
        </div>
    );
};

export default Blogs;