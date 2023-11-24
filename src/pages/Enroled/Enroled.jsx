import { useLoaderData, useParams } from "react-router-dom";

const Enroled = () => {
    const { id } = useParams();
    const idInt = parseInt(id);
    // console.log(typeof idInt);
    const eventEnroled = useLoaderData();
    const enroledE = eventEnroled.find(event => event.id === idInt)
    console.log(enroledE);
    return (
        <div className={`flex ${ enroledE < 2 ? 'justify-center' : 'grid grid-cols-2' }`}>
            
            <div className="card w-96 bg-primary text-primary-content">
                <div className="card-body">
                    <h2 className="card-title">Card title!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Enroled;