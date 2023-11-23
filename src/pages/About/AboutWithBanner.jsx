import About from "./About";
import aboutBgImg from '../../assets/aboutImg.png'
import Navbar from "../Shared/Navbar";
const AboutWithBanner = () => {

    return (
        <div className="space-y-4 md:space-y-20">
            <div className="min-h-screen rounded-lg bg-gradient-to-r from-indigo-500" style={{ backgroundImage: `url(${aboutBgImg}) `, backgroundSize: "cover", }}>
                <div className="min-h-screen bg-gradient-to-t from-zinc-800 rounded-lg ">
                <Navbar></Navbar>
                <h2 className=" text-4xl md:text-8xl font-bold md:mt-56 md:ps-10 text-white
                ">About Us
                </h2>
                </div>
            </div>

            <About></About>
        </div>
    );
};

export default AboutWithBanner;