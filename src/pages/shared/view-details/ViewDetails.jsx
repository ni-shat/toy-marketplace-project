import { faBangladeshiTakaSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Rating } from '@smastrom/react-rating';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const ViewDetails = () => {


    const location = useLocation();

    //ow location er vithre state o id pawa jaibo. 
    console.log("location in view details ", location);
    const { _id, pictureUrl, name, price, rating, category, description, sellerName, sellerEmail } = location?.state;


    return (
        <div className='flex w-[80%] justify-between items-center mx-auto mt-12'>
            <div className='w-[3/4] h-[500px]'>
                <img className='w-full h-full object-cover ' src={pictureUrl} alt="" />
            </div>
            <div className='w-2/4'>
                <div className="hero bg-gray-50 rounded-3xl shadow-2xl">
                    <div className="hero-content py-10 text-center">
                        <div className="max-w-md">
                            <h1 className="text-5xl font-bold">{name}</h1>
                            <p className="py-6">{description}</p>

                            <div className="flex gap-2.5 justify-center">
                                <span>Price: {price}</span>
                                <span><FontAwesomeIcon className="text-[#e3c94a]" icon={faBangladeshiTakaSign} /></span>
                            </div>
                            <p className="py-6">Category: {category}</p>
                            <div className="flex gap-1.5 justify-center">
                                <span>{rating} </span>
                                <Rating style={{ maxWidth: 60 }} value={rating} readOnly />
                            </div>
                            {/* <div className="text-sm flex gap-8 mt mx-auto justify-between w-fit">
                                <span>Price: {price}</span>
                                <span><FontAwesomeIcon className="text-[#e3c94a]" icon={faBangladeshiTakaSign} /></span>
                            </div> */}
                            <button className="btn bg-[#7ec7b5] px-10 border-gray-400 mt-6">Buy Now</button>

                            <div className='flex justify-center'><p className='mt-20'>Posted by <span className='text-[#ED71A3] font-semibold '>{sellerName}</span> </p></div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;