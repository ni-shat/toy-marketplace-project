import { useEffect, useState } from "react";
import LatestToy from "./LatestToy";


const LatestCollection = () => {

    const [latest, setLatest] = useState([]);

    useEffect(() => {
        fetch('https://a-11-server-seven.vercel.app/latest-toys')
            .then(res => res.json())
            .then(data => setLatest(data));
    }, []);


    return (
        <div className="md:mt-[170px] mt-20 w-[100%] mx-auto ">
            <h2 className="md:text-4xl text-xl w-[60%] mx-auto text-gray-800 text-center font-bold">Our Latest Collection</h2>
            <p className="md:py-6 py-2 text-xs md:text-base text-center">The Ultimate Toy Wonderland</p>

            <div className="px-3 md:px-[150px] -mt-20 py-32 md:grid  grid-cols-5 gap-2 md:gap-6 hidden ">
                {
                    latest.map(l => <LatestToy key={l._id} toy={l}></LatestToy>)
                }

            </div>
            <div>
                <div className="px-3 md:px-[150px] -mt-24 py-32 grid grid-cols-2  gap-2 md:hidden">
                    {

                        latest.map(l =>
                            //     {
                            (latest.indexOf(l) < 6) && <LatestToy key={l._id} toy={l}></LatestToy>
                            // }


                        )
                    }
                </div>
                <div className="flex justify-center -mt-20 -mb-32">
                    <button className="btn border-0 btn-primary bg-[#70b2a2] hover:bg-slate-300 font-semibold">See more</button>
                </div>
            </div>

        </div>
    );
};

export default LatestCollection;