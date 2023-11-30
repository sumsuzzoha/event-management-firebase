import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Speakers = () => {
    const [allSpeakers, setAllSpeakers] = useState([]);


    useEffect(() => {
        fetch('/speakers.json')
            .then(res => res.json())
            .then(data => setAllSpeakers(data))
    }, [])

    return (
        <div className="py-6 bg-gray-300">
            <div className="bg-emerald-700 rounded-lg py-10">
                <div className="text-center text-white space-y-6 max-w-xl mt-10 mx-auto ">
                    <h2 className="font-bold text-lg text-slate-300">SPEAKERS</h2>
                    <h2 className="text-5xl font-bold">Meet Our Speakers</h2>
                    <p>Speakers offer expertise, insights, and guidance, engaging audiences through informative talks, discussions, and interactive sessions.</p>
                </div>
                <div className=" text-white grid md:grid-cols-4 gap-4 md:gap-6 p-4 md:p-10">
                    {
                        allSpeakers.map(speakers =>
                            <Link key={speakers.id}
                                to={`/speaker/${speakers.id}`}
                            >
                                <div className="card">
                                    <figure className="px-10 pt-10">
                                        <img src={speakers.spk_img} alt="Shoes" className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title font-extrabold">{speakers.name}</h2>
                                        <p>{speakers.designation} </p>
                                        <p>{speakers.company}</p>

                                    </div>
                                </div>
                            </Link>)
                    }
                </div>


            </div>
        </div>
    );
};
export default Speakers;