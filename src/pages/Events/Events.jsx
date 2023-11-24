import {  useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EventBanner from "./EventBanner";

const Events = () => {
    const [allEvents, setAllEvents] = useState([]);


    useEffect(() => {
        fetch('event_data.json')
            .then(res => res.json())
            .then(data => setAllEvents(data))
    }, [])
    return (
        <div className="py-6">
            <EventBanner></EventBanner>
            {
                allEvents.map((event, idx) => <div
                    key={event.id}
                >
                    <div className="flex justify-center md:mt-10">
                        <div className=" stat flex w-full rounded-lg bg-white shadow-lg ">
                            <div className="p-2 flex items-center">
                                <div className="text-5xl font-bold ">0{idx + 1}</div>
                            </div>

                            <div className="stat ">
                                <div className="text-2xl ">
                                    <h2 className="font-bold">{event?.name}</h2>
                                </div>
                                <div className="grid grid-cols-9 gap-4 items-center">
                                    <div className="my-4 col-span-4 grid grid-cols-2 items-center gap-6 ">
                                        <div className="">
                                            <>{event?.date_and_time?.date}</><br></br><>{event?.date_and_time?.time}</>
                                        </div>
                                        <div className=" ">
                                            <>{event?.location?.buildings}, </><>{event?.location?.city}</>
                                        </div>
                                    </div>
                                    <div className="mx-auto col-span-5">
                                        <h3 className="text-center">Main Speakers</h3>
                                        <div className=" avatar-group -space-x-6 rtl:space-x-reverse">
                                            {
                                                event.speakers.map((speaker, idx) => <section key={idx}>
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
                                <Link
                                    to={`/event/${event.id}`}
                                >
                                    <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg  btn-info">See Details</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>)
            }


        </div>
    );
};

export default Events;