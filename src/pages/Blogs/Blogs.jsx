import { useEffect, useState } from "react";
import BlogsBanner from "./BlogsBanner";

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);


    useEffect(() => {
        fetch('./blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div>
            <BlogsBanner></BlogsBanner>
            <div className="grid grid-col-1 md:grid-cols-3 gap-4  md:p-6">
                {blogs.map(blog => <div key={blog.id} className="card w-full h-full">
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
                </div>)}
            </div>
        </div>
    );
};

export default Blogs;