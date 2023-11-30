import { Link, useLoaderData, useParams } from "react-router-dom";

const BlogDetails = () => {
    const { id } = useParams();
    const idInt = parseInt(id);
    const blogDetail = useLoaderData();
    const blog = blogDetail.find(blog => blog.id === idInt)
    return (
        <div className="w-9/12 mx-auto py-4 md:py-10">
            <div className=" text-center my-4 md:my-10">
                <h1 className="text-2xl md:text-6xl font-bold py-6">{blog.title}</h1>
                <p>Published: {blog.publishedDate}</p>
            </div>
            <img className="w-full h-full rounded-xl mb-6" src={blog.img} alt="" />
            <h3 className="text-lg text-center md:text-start font-semibold mb-6">{blog?.content?.intro}</h3>
            {blog?.content?.overview.map((overviews, idx) => <section key={idx} className="space-y-2">
                <h2 className="text-lg font-semibold mt-6">{overviews.title}</h2>
                <p>{overviews.description}</p>
            </section>)}
            <Link to='/blog'><button className="btn btn-info rounded-2xl btn-sm md:btn-md lg:btn-lg mt-10">Back to Blogs</button></Link>
        </div>
    );
};

export default BlogDetails;