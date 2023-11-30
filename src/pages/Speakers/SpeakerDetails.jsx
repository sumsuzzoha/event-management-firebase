import { useLoaderData, useParams } from "react-router-dom";

const SpeakerDetails = () => {
    const { id } = useParams();
    const idInt = parseInt(id);
    const speakerDetail = useLoaderData();
    const speaker = speakerDetail.find(speaker => speaker.id === idInt)

    return (
        <div className="bg-emerald-600 py-6">
            <div className="card md:w-6/12 bg-base-100 shadow-xl mx-auto p-6">
                <figure><img src={speaker.spk_img} alt="Shoes" className="rounded-xl pt-4" /></figure>
                <div className="card-body text-center">
                    <h2 className=" text-3xl font-bold">{speaker.name}</h2>
                    <h4 className="text-xl font-bold">{speaker.designation}</h4>
                    <h4 className="text-lg">{speaker.company}</h4>
                    <h4 className="text-lg">Expart: {speaker.expertise}</h4>
                </div>
            </div>
        </div>
    );
};

export default SpeakerDetails;