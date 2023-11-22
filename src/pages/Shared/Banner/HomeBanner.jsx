import { Link } from 'react-router-dom';
import headerBg from '../../../assets/headerBg.png'
import Navbar from '../Navbar';
const HomeBanner = () => {
    return (
        <div
            style={{ backgroundImage: `url(${headerBg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
            className='min-h-max w-full rounded-lg mb-10'>

            <div className="min-h-max bg-gradient-to-t from-zinc-800 rounded-lg">
                <div className='p-6'>
                    <Navbar></Navbar>
                </div>

                <div className='text-white text-center md:m-32'>
                    <h3 className='text-lg md:text-3xl font-bold text-center my-6'>World’s Biggest</h3>
                    <h2 className='text-xl md:text-6xl font-bold text-center my-6'>Digital Marketing Conference</h2>
                    <p className='text-center font-bold max-w-lg mx-auto mb-6'>At a great marketing conference, you are given access to experts with tons of experience and proven results in a range of different digital niches.</p>
                    <button className='btn btn-primary text-xl'>Get Tickets Now</button>

                </div>
                <div className='flex justify-around text-center text-white text-lg font-bold pb-10'>
                    <div>
                        <h3 className=''>Become an Exhibitor</h3>
                        <Link className='text-amber-400'>Contact Sales</Link>
                    </div>
                    <div>
                        <h3>Become a Sponsor</h3>
                        <Link className='text-amber-400'>Contact Sales</Link>
                    </div>
                    <div>
                        <h3>Host a Partner Event</h3>
                        <Link className='text-amber-400'>Become A Partner</Link>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default HomeBanner;