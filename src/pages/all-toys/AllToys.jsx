import { useLoaderData } from "react-router-dom";
import TableRow from "../../components/TableRow";
import { FaArrowCircleRight } from "react-icons/fa";
import {  useState } from "react";


const AllToys = () => {

    const toys = useLoaderData();

    // const [clickedSeeAll, setClickedSeeAll] = useState(false);
    const [loadedToys, setLoadedToys] = useState(toys);


    const handleSearch = (event) => {

        let text = event.target.value; console.log(text)

        if(!text){
            // 
        }
        else {
            const searchedToys = toys.filter( toy => toy.name.toLowerCase().includes(text.toLowerCase()) || toy.category.toLowerCase().includes(text.toLowerCase()) );

            console.log(searchedToys);

            if(searchedToys){
                setLoadedToys(searchedToys);
            } 
            else {
                setLoadedToys(toys);
            }
           
        }
    }


    return (
        <div className="pt-20">
            <div className="flex justify-between">
                <div>
                    <h3 className="text-4xl text-[#7ec7b5] w-[85%] mx-auto mb-10 font-extrabold inline ml-24">All toys</h3>
                    <p className="text-base text-[#7ec7b5] inline"> all fun</p>
                </div>
                <div className="form-control  mr-24">
                    <div className="input-group">
                        <input onChange={handleSearch} type="text" placeholder="Search…" className="input input-bordered" />
                        <button className="btn btn-square">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                    </div>
                </div>
            </div>


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