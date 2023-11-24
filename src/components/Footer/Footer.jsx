import { Link } from "react-router-dom";
import { FaFacebook, FaLandmark, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { FiPhoneIncoming } from "react-icons/fi";
import { MdEmail } from "react-icons/md";



const Footer = () => {
    return (
        <div className=" ">
            <div className="bg-gray-800 md:py-10 text-white flex justify-around">
                <div className="space-y-6">
                    <h4 className="text-xl font-bold">The Events Specialists!
                    </h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, veniam?</p>
                </div>
                <div className="space-y-6">
                    <h4 className="text-lg">Keep In Touch
                    </h4>
                    <p className="flex items-center gap-3"><FaLandmark /> 38-2 Hilton Street, California, USA</p>
                    <p className="flex items-center gap-3"><FiPhoneIncoming />(+01) 123 456 7890</p>
                    <p className="flex items-center gap-3"><MdEmail />info@dvents.org</p>
                </div>

            </div>
            <div className="bg-black text-white flex justify-around">
                <div className="max-w-4xl h-20 flex items-center">
                    <p>© 2017 Dvents – The Events Specialists All Rights Reserved.</p>
                    <p className="ms-6"><Link>Terms of Use</Link></p>
                    <p className="ms-2">|</p>
                    <p className="ms-2"><Link>Privacy Policy</Link></p>

                </div>
                <div className=" text-white flex items-center gap-4">
                    <div className=" avatar text-3xl">
                        <Link><FaTwitter /></Link>

                    </div>
                    <div className=" avatar text-2xl">
                        <Link><FaFacebook /></Link>
                    </div>
                    <div className=" avatar text-3xl">
                        <Link><FaLinkedinIn /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;