import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LatestBlogBanner from "./LatestBlogBanner";

const LatestBlog = () => {
    const [latestBlog, setLatestBlog] = useState([]);

    useEffect(() => {
        fetch('./blogs.json')
            .then(res => res.json())
            .then(data => {
                data.sort((a, b) => new Date(b.publishedDate) - new Date(a.publishedDate));
                const latestData = data[0];
                setLatestBlog(latestData);
            })

    }, [])

    return (
        <div className="mx-2 mb-4 md:mb-14">
            <LatestBlogBanner></LatestBlogBanner>
            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row gap-6 bg-indigo-300 rounded-xl">
                    <div className="card w-full max-w-xl shadow-2xl">
                        <img className="rounded-xl" src={latestBlog?.img} alt="image" />
                    </div>
                    <div className="text-center text-white max-w-xl md:text-left">
                        <h1 className="text-3xl font-bold">{latestBlog?.title}</h1>
                        <p className="pt-6">{latestBlog?.content?.intro}</p>
                        <Link to={`/blog/${latestBlog.id}`} className="text-blue-600 font-bold">Read More.. </Link>
                        <p ></p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default LatestBlog;