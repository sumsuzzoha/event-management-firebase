import { useEffect, useState } from "react";

const LetestBlog = () => {
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
    console.log(latestBlog);

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row gap-6">
                    <div className="card w-full max-w-xl shadow-2xl bg-base-100">
                        <img className="rounded-xl" src={latestBlog?.img} alt="image" />
                    </div>
                    <div className="text-center max-w-xl md:text-left">
                        <h1 className="text-3xl font-bold">{latestBlog?.title}</h1>
                        <p className="pt-6">{latestBlog?.content?.intro}</p>
                        <p className="text-blue-600">Read More..</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default LetestBlog;