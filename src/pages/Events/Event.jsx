import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Event = ({ event, index }) => {
    const {id, name, location, date_and_time, speakers, } = event;


    return (
        <div>
            <div className="flex justify-center md:mt-10">
                <div className=" stat flex w-full rounded-lg bg-white shadow-lg ">
                    <div className="p-2 flex items-center">
                        <div className="text-5xl font-bold ">0{index + 1}</div>
                    </div>

                    <div className="stat ">
                        <div className="text-2xl ">
                            <h2 className="font-bold">{name}</h2>
                        </div>
                        <div className="grid grid-cols-9 gap-4 items-center">
                            <div className="my-4 col-span-4 grid grid-cols-2 items-center gap-6 ">
                                <div className="">
                                    <>{date_and_time?.date}</><br></br><>{date_and_time?.time}</>
                                </div>
                                <div className=" ">
                                    <>{location?.buildings}, </><>{location?.city}</>
                                </div>
                            </div>
                            <div className="mx-auto col-span-5">
                                <h3 className="text-center">Main Speakers</h3>
                                <div className=" avatar-group -space-x-6 rtl:space-x-reverse">
                                    {
                                        speakers.map((speaker, idx) => <section key={idx}>
                                            {<div className="avatar">
                                                <div className="w-12">
                                                    <img src={speaker?.spk_img} alt="img" />

                                                </div>
                                            </div>}

                                        </section>

                                        )
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="stat-actions my-auto">
                        <Link to={`/event/${id}`} props={event}><button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg  btn-info">See Details</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};
Event.propTypes = {
    event: PropTypes.object,
    index: PropTypes.number,
};
export default Event;