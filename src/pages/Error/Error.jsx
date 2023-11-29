import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Error = () => {

    const [isRed, setIsRed] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsRed((prev) => !prev);
        }, 1200);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div style={{ background: 'linear-gradient(to bottom right, #ff9966 40%, #ff5e62 60%)' }} className='flex items-center mx-auto justify-center text-center min-h-screen' >
                <div className="">
                    <div className="text-white space-y-4">
                        <h2 style={{ color: isRed ? '#f71414' : '' }} className="text-6xl font-bold ">404</h2>
                        <h2 className="text-2xl font-bold ">Page not found</h2>
                        <p className="font-bold max-w-xl mx-auto px-4">Somethings gone missing!! Sorry, we couldn’t find the page you are looking for.</p>
                    </div>
                    <Link to='/'><button className="btn btn-info rounded-2xl btn-xs sm:btn-sm md:btn-md lg:btn-lg mt-10">Back to Home</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Error;