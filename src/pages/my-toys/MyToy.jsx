import { faBangladeshiTakaSign, faPenToSquare, faTrash, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Rating } from "@smastrom/react-rating";
import { useContext, useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProviders";
import Modal from "./Modal";


const MyToy = ({ toyDetails, nmb }) => {

    // const { user } = useContext(AuthContext);
    const [clickedUpdate, setClickedUpdate] = useState(false);

    const { _id, pictureUrl, name, price, rating, availableQuantity, category, description } = toyDetails;
    console.log("in my toy", toyDetails)

    const handleUpdate = (id) => {
        console.log('function', id);

        setClickedUpdate(true);
    }

    return (
        <>

            <tr>
                <th className="text-[#70b2a2]">
                    <label>
                        {nmb}.
                    </label>
                </th>
                <td className="pb-10 pt-10 px-8 min-w-[12rem] max-w-[20rem] whitespace-normal">
                    <div className="flex gap-5 items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-44 h-44">
                                <img src={pictureUrl} />
                            </div>
                        </div>
                        <div className="">
                            <div className="font-bold">{name}</div>
                            <div className="text-sm flex gap-2.5 mt-2">
                                <span>{price}</span>
                                <span><FontAwesomeIcon className="text-[#e3c94a]" icon={faBangladeshiTakaSign} /></span>
                            </div>
                            <div className="mt-4">
                                <p className="w-full">{description}</p>
                            </div>
                        </div>
                    </div>
                </td>
                <td className="pb-10 pt-10 px-8">
                    {availableQuantity}
                </td>
                <td className="pb-10 pt-10 px-8">
                    {category}
                </td>
                <td className="pb-10 pt-10 px-8">
                    <div className="flex gap-1.5">
                        <span>{rating} </span>
                        <Rating style={{ maxWidth: 60 }} value={rating} readOnly />
                    </div>
                </td>
                <th>
                    <label htmlFor="my-modal-3" onClick={() => handleUpdate(_id)} className="btn w-32 mb-3 border-0  btn-primary bg-[#70b2a2] hover:bg-slate-200 font-semibold flex gap-2 items-center">
                        <span>Update </span>
                        <FontAwesomeIcon icon={faPenToSquare} />
                    </label>
                    {
                        clickedUpdate && <Modal id={_id} setClickedUpdate={setClickedUpdate}></Modal> 
                    }
                    


                    <button className="btn w-32 text-red-600 border-red-600 btn-primary bg-white border hover:bg-slate-200 font-semibold flex gap-3 items-center">
                        <div className="flex gap-2">
                            <span>Delete </span> <FontAwesomeIcon icon={faTrashCan} />
                        </div>


                    </button>
                </th>
            </tr>
        </>

    );
};

export default MyToy;