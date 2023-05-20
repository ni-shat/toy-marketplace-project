import MyToy from "./MyToy";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";


const MyToys = () => {

    const { user } = useContext(AuthContext);
    console.log("User", user.email)

    const [mytoys, setMyToys] = useState([]);

    const url = `http://localhost:5000/mytoys?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [url]);


    return (
        <div className="pt-20">
            <h3 className="text-4xl text-[#7ec7b5] w-[85%] mx-auto mb-10 font-extrabold inline ml-24">Your toys</h3>
            {/* <p className="text-base text-[#7ec7b5] inline"> all fun</p> */}


            <div className="w-[90%] mx-auto mt-14 mb-20">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className="pb-10 pt-10 px-8"></th>
                            <th className="pb-10 pt-10 px-8 pl-14">Toy
                            </th>
                            <th className="pb-10 pt-10 px-8">Quantity</th>
                            <th className="pb-10 pt-10 px-8">Category</th>
                            <th className="pb-10 pt-10 px-8">Rating</th>
                            <th className="pb-10 pt-10 px-8"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 4 */}
                        {
                            mytoys?.map(toy => <MyToy
                                key={toy._id}
                                nmb={mytoys.indexOf(toy) + 1}
                                toyDetails={toy}
                                setMyToys={setMyToys}
                                mytoys={mytoys}
                            ></MyToy>)
                        }
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyToys;