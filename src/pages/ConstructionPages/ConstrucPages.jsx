import { Link } from "react-router-dom";

const ConstrucPages = () => {
    return (
        <div>
            <div style={{ background: 'linear-gradient(to bottom right, #3564fc 40%, #fc2323 70%)' }} className='flex items-center mx-auto justify-center text-center min-h-screen' >
                <div className="">
                    <div className="text-white space-y-4">
                        <h2 className="text-3xl font-bold ">Comming soon...</h2>
                        <p className="font-bold max-w-xl mx-auto px-4">This page is currently under construction. Please check back later.</p>
                    </div>
                    <Link to='/'><button className="btn btn-info rounded-2xl btn-xs sm:btn-sm md:btn-md mt-10">Back to Home</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ConstrucPages;