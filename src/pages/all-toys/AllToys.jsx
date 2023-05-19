import { useLoaderData } from "react-router-dom";
import TableRow from "../../components/TableRow";


const AllToys = () => {

    const loadedToys = useLoaderData(); 
    // console.log(loadedToys);

    return (
        <div>
            <div className="w-[90%] mx-auto mt-14">
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
                            loadedToys?.map(toy => <TableRow
                                key={toy._id}
                                nmb={loadedToys.indexOf(toy)+1}
                                toyDetails={toy}
                            ></TableRow>)
                        }
                    </tbody>
                    {/* foot */}
                    <tfoot>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </tfoot>

                </table>
            </div>
        </div>
    );
};

export default AllToys;