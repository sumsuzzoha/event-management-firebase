import { useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Event from "./Event";

const EventsWithBanner = () => {
    const eventData = useLoaderData();
    // console.log(eventData);
    return (
        <>
            <Navbar></Navbar>
            <div className="text-center flex justify-center">
                <div className=' card shrink-0 w-full max-w-2xl  space-y-6 mt-6 mx-6 md:pr-6 '>
                    <h2 className='text-lg font-bold text-slate-400'>SCHEDULE</h2>
                    <h2 className='text-5xl font-bold '>Conference Schedules</h2>
                    <p>The bustling business seminar gathered industry leaders, fostering innovation and collaboration. Expert panels unveiled trends, strategies, and insights, igniting dialogue among participants..</p>
                </div>
            </div>
            {
                eventData.map((event, idx) => <Event
                    key={event.id}
                    event={event}
                    index ={idx}
                ></Event>)
            }
            
        </>
    );
};

export default EventsWithBanner;