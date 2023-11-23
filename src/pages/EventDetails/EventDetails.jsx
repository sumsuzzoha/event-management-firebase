import { Link, useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Shared/Navbar";

const EventDetails = () => {
    const { id } = useParams();
    const idInt = parseInt(id);
    const events = useLoaderData();
    const event = events.find(event => event.id === idInt)

    console.log(event);
    // const {}= children;
    return (
        <div>
            <Navbar></Navbar>
            <div className="card bg-base-100 shadow-xl">
                <figure><img src={event?.event_img} alt="Shoes" /></figure>
                <div className="card-body space-y-6">
                    <h2 className="card-title text-5xl">
                        {event?.name}
                    </h2>
                    <p className="text-lg">{event?.details}</p>
                    <div className="flex justify-center gap-6">
                        <div className="card-actions justify-end">
                            <Link to='/'><button className="btn btn-secondary">Back to  Home</button></Link>
                        </div>
                        <div className="card-actions justify-end">
                            <Link><button className="btn btn-accent">Book Ticket Now</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default EventDetails;