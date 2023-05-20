import { useLoaderData } from "react-router-dom";
import TableRow from "../../components/TableRow";
import { FaArrowCircleRight } from "react-icons/fa";
import { useEffect, useState } from "react";


const AllToys = () => {

    const toys = useLoaderData();
    
    // const [clickedSeeAll, setClickedSeeAll] = useState(false);
    const [loadedToys, setLoadedToys] = useState(toys);


    // const handleSeeAll = () => {
    //     console.log("handle see all");
    //     setClickedSeeAll(true);
    // }


    return (
        <div className="pt-20">
            <h3 className="text-4xl text-[#7ec7b5] w-[85%] mx-auto mb-10 font-extrabold inline ml-24">All toys</h3>
            <p className="text-base text-[#7ec7b5] inline"> all fun</p>


            <div className="w-[90%] mx-auto mt-14 mb-20">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Category</th>
                            <th>Rating</th>
                            <th>Seller</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 4 */}
                        {
                            loadedToys ?
                                loadedToys.map(toy => <TableRow
                                    key={toy._id}
                                    nmb={loadedToys.indexOf(toy) + 1}
                                    toyDetails={toy}
                                ></TableRow>)

                                : <div>Loading</div>
                        }

                    </tbody>


                </table>

                <div className="flex justify-center mt-10">
                    <button className="btn bg-[#ED71A3] border-0 px-32 hover:bg-slate-200 flex items-center gap-3">
                        <span>See all </span>
                        <span><FaArrowCircleRight /></span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AllToys;