import { FaFacebook, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className="flex justify-between bg-gray-100 p-6 rounded">
            <h2 className="text-3xl font-bold">Welcome To <span className="text-green-400"><span className="text-red-400">Digi</span>VENTS</span> </h2>
            <div className="flex items-center gap-4">
                <div className=" avatar text-3xl">
                    <Link><FaTwitter /></Link>

                </div>
                <div className=" avatar text-2xl">
                    <Link><FaFacebook /></Link>
                </div>
                <div className=" avatar text-3xl">
                    <Link><FaLinkedinIn/></Link>
                </div>
            </div>
        </div>
    );
};

export default Header;