import MyToy from "./MyToy";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";


const MyToys = () => {

    const { user } = useContext(AuthContext);
    console.log("User", user.email)

    const [mytoys, setMyToys] = useState([]);
    const [mytoysAs, setMyToysAs] = useState([]);
    const [mytoysDs, setMyToysDs] = useState([]);

    useEffect(() => {
        document.title = "Toy Box - my toys";
     }, []);

    const url = `https://a-11-server-seven.vercel.app/mytoys?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                //data is an object
                const {resultAll, resultAs, resultDs} = data;
                console.log('all data', resultAll);
                console.log('ascending data', resultAs);
                console.log('descending data', resultDs);
                setMyToys(resultAll);
                setMyToysAs(resultAs);
                setMyToysDs(resultDs);
            })
    }, [url]);



    const [selectedOption, setSelectedOption] = useState('Sort by price');

    const handleClick = () => {
        const value = event.target.innerText;
        console.log(value);

        if(value == 'Low to high'){
            //as
            setMyToys(mytoysAs);
        } 
        else if(value == 'High to low'){
            setMyToys(mytoysDs);
        }

        setSelectedOption(value);

        const elem = document.activeElement;
        console.log(elem);
        if (elem) {
            elem?.blur();
        }
    };


    return (
        <div className="pt-20">
            <div className="flex justify-between items-center">
                <h3 className="text-4xl text-[#7ec7b5] w-[85%] mx-auto mb-10 font-extrabold inline ml-24">Your toys</h3>
                {/* <p className="text-base text-[#7ec7b5] inline"> all fun</p> */}

                <div className="dropdown dropdown-bottom dropdown-end mr-24">
                    <button
                        tabIndex={0}
                        className="w-40 px-1 py-1 mb-3 hover:bg-slate-100 border hover:text-black">
                        {selectedOption}
                    </button>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 border">
                        <li onClick={handleClick}><a className="hover:bg-slate-200 focus:bg-slate-200">Low to high</a></li>
                        <li onClick={handleClick}><a className="hover:bg-slate-200 focus:bg-slate-200">High to low</a></li>
                    </ul>
                </div>
            </div>


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