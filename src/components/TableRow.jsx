import { faBangladeshiTakaSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaAngleRight, FaArrowRight } from "react-icons/fa";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";


const TableRow = ({ toyDetails, nmb }) => {

    const { _id, pictureUrl, name, price, rating, availableQuantity, category, sellerName, description, sellerEmail } = toyDetails;

    const [isClicked, setIsClicked] = useState(false);

    const handleViewDetails = () => {

        setIsClicked(true);
    }

    return (
        <tr>
            <th className="text-[#70b2a2]">
                <label>
                    {nmb}.
                </label>
            </th>
            <td className="py-5">
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={pictureUrl} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                        <div className="text-sm flex gap-2.5">
                            <span>{price}</span>
                            <span><FontAwesomeIcon className="text-[#e3c94a]" icon={faBangladeshiTakaSign} /></span>
                        </div>
                    </div>
                </div>
            </td>
            <td className="py-5">
                {availableQuantity}
            </td>
            <td className="py-5">
                {category}
            </td>
            <td className="py-5">
                <div className="flex gap-1.5">
                    <span>{rating} </span>
                    <Rating style={{ maxWidth: 60 }} value={rating} readOnly />
                </div>
            </td>
            <td className="py-5">
                {sellerName}
            </td>
            <th>
                <button onClick={handleViewDetails} className="btn border-0  btn-primary bg-[#70b2a2] hover:bg-slate-200 font-semibold flex gap-3 items-center">
                    <span>Details</span>
                    <span><FaAngleRight /></span>
                </button>
                {
                    isClicked &&
                    <Navigate state={{ _id, pictureUrl, name, price, rating, category, description, sellerName, sellerEmail }} replace to='/view-details' ></Navigate>
                }
            </th>
        </tr>
    );
};

export default TableRow;