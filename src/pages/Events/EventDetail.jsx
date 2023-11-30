import { Link, useLoaderData, useParams } from "react-router-dom";


const EventDetail = () => {
    const { id } = useParams();
    const idInt = parseInt(id);
    // console.log(typeof idInt);
    const eventDetail = useLoaderData();
    const event = eventDetail.find(event => event.id === idInt)
    // console.log(event);
    // const

    return (
        <div className="bg-gray-200">
            <div className="card py-4 md:py-10">
                <figure><img className="rounded-lg" src={event?.event_img} alt="Shoes" /></figure>
                <div className="card-body space-y-6">
                    <h2 className="card-title text-2xl nd:text-5xl flex flex-col md:flex-row text-center gap-6">
                        {event?.name}
                        <div className="text-lg badge badge-accent">${event?.price}</div>
                    </h2>
                    <p className="text-lg text-justify md:text-start">{event?.details}</p>
                    <div className="flex justify-center gap-6">
                        <div className="card-actions justify-end">
                            <Link to='/'><button className="btn btn-secondary">Back to  Home</button></Link>
                        </div>
                        <div className="card-actions justify-end">
                            <Link to={`/booked/${event.id}`}>
                            <button className="btn btn-accent">Book Ticket Now</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetail;