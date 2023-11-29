import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import bannerImg from '../assets/images/banner2.jpg'

const Root = () => {
    return (
        <div className="">
            <div
                style={{
                    backgroundImage: `linear-gradient(45deg, rgba(0, 0, 0, 0.8), rgba(67, 67, 247, 0.5)),url(${bannerImg}`,
                    backgroundSize: 'cover',
                }}
            >
                <Header></Header>
                <Navbar></Navbar>
            </div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;