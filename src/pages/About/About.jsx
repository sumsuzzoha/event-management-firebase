import aboutImg2 from '../../assets/images/aboutImg2.png'
const About = () => {
    return (
        <div className='md:space-y-6 py-6'>
            <div className="grid md:grid-cols-2 md:gap-10 md:mx-20 " >
                <div className=' grid content-center space-y-6 mt-6 mx-6 md:pr-6 '>
                    <h2 className='text-xl font-bold text-slate-400'>ABOUT DigiSESSION</h2>
                    <h2 className='text-5xl font-bold '>Welcome to DigiSESSION Conference</h2>
                    <p>The bustling business seminar gathered industry leaders, fostering innovation and collaboration. Expert panels unveiled trends, strategies, and insights, igniting dialogue among participants. Networking thrived as minds converged, exchanging ideas that sparked newfound opportunities. It was a melting pot of visionaries, shaping the future of commerce in a dynamic, electrifying atmosphere.</p>
                    <button className='btn btn-primary w-max'>Read More</button>
                </div>
                <img className='max-h-fit rounded-xl' src={aboutImg2} alt="" />

            </div>
            <div className="grid md:grid-cols-2 md:gap-10 md:mx-20 md:pt-10">
                <div className='md:max-w-md space-y-3'>
                    <div>
                        <h4 className='text-2xl font-bold'>Easy Booking</h4>
                        <p>Effortlessly secure your spot with seamless, user-friendly online booking systems.</p>
                    </div>
                    <div>
                        <h4 className='text-2xl font-bold'>Complete Facilities</h4>
                        <p>All-inclusive amenities for seamless convenience and optimal functionality.</p>
                    </div>
                    <div>
                        <h4 className='text-2xl font-bold'>Professional Speakers</h4>
                        <p>Professional speakers are adept communicators who captivate audiences with expertise and charisma.</p>
                    </div>
                </div>
                <div className='md:max-w-md md:ms-10 space-y-6'>
                    <h4 className='text-xl font-bold text-slate-400	'>WHY CONSESSION</h4>
                    <h2 className='text-5xl font-bold'>3 Main Reasons to Join</h2>
                    <p>Access global expertise, networking, and convenience—immerse in insights, innovation, and collaboration while maximizing flexibility and eliminating geographical constraints.</p>
                </div>

            </div>
            <div className='flex justify-around bg-base-100 shadow-xl rounded mx-4 p-6'>
                <h2 className='text-3xl font-bold '>45K<span className='text-red-500'>+</span><span className='text-xl'>ATTENDEES</span></h2>
                <h2 className='text-3xl font-bold '>25<span className='text-red-500'>+</span><span className='text-xl'>SPEAKERS</span></h2>
                <h2 className='text-3xl font-bold '>50<span className='text-red-500'>+</span><span className='text-xl'>SESSIONS</span></h2>
                <h2 className='text-3xl font-bold '>35<span className='text-red-500'>+</span><span className='text-xl'>PARTICIPANS</span></h2>
            </div>



        </div>
    );
};

export default About;