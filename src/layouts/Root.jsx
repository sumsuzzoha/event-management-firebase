import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import bannerImg from '../assets/images/banner2.jpg'
import { ToastContainer } from "react-toastify";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";



const Root = () => {
    useEffect(() => {
        AOS.init();
    }, [])

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
            <ToastContainer
                position="top-center"
                pauseOnHover={false} />
        </div>
    );
};

export default Root;