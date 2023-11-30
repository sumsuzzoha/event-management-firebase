import { useLoaderData, useParams } from "react-router-dom";

const BookedEvent = () => {
    const { id } = useParams();
    const idInt = parseInt(id);
    // console.log(typeof idInt);
    const eventEnroled = useLoaderData();
    const enroledE = eventEnroled.find(event => event.id === idInt)
    const { name, date_and_time, event_img, location } = enroledE;
    return (
        <div style={{ background: 'linear-gradient(to bottom right, #4951f2 40%, #b81f5c 60%)' }}
         className="flex justify-center py-4 md:py-10">
            <div className="card w-96 bg-base-100 shadow-xl image-full">
                <figure><img src={event_img} alt="Shoes" /></figure>
                <div className="card-body flex flex-col justify-between">
                    <div className="space-y-6">
                        <h2 className="card-title">{name}</h2>
                        <div>
                            <p>{location.buildings}</p>
                            <p>{location.city}</p>
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="justify-start text-red-500 font-bold">
                            <p>{date_and_time?.date}</p>
                            <p>{date_and_time?.time}</p>
                        </div>
                        <div className=" justify-end">
                            <div></div><div className="badge badge-accent badge-outline font-bold">Booked</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookedEvent;