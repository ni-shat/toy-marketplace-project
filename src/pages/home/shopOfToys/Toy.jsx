import { faBangladeshiTakaSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Rating } from '@smastrom/react-rating';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Toy = ({ toy }) => {

    const { _id, pictureUrl, name, price, rating, category } = toy;
    const [isClicked, setIsClicked] = useState(false);
    const navigate = useNavigate();

    const handleViewDetails = () => {
        
        Swal.fire({
            position: 'top-middle',
            icon: 'success',
            title: 'You have to log in first to view details',
            showConfirmButton: false,
            timer: 1500
          })
        navigate('/view-details', { replace: true });
    }


    return (
        <div className="card bg-base-100 shadow-xl w-[385px] h-[580px]">
            <figure className='w-[385px] h-[350px] border'><img className='object-cover rounded-lg' src={pictureUrl} alt="toy" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className=''>
                    <div className="text-sm flex gap-2.5">
                        <span>{price}</span>
                        <span><FontAwesomeIcon className="text-[#e3c94a]" icon={faBangladeshiTakaSign} /></span>
                    </div>
                </div>

                <div className="card-actions flex items-center justify-between mt-8">
                    <div className="flex gap-1.5">
                        <span>{rating} </span>
                        <Rating style={{ maxWidth: 60 }} value={rating} readOnly />
                    </div>
                    {/* <Link to='/view-details'> */}
                    <button onClick={handleViewDetails} className="btn border-0 btn-primary bg-[#70b2a2] hover:bg-slate-300 font-semibold">View Details</button>
                    {/* {
                        isClicked && <>
                            <div className="toast toast-top ">

                                <div className="alert bg-slate-200 w-60 h-20">
                                    <div>
                                        <p>You have to login first</p>
                                    </div>
                                </div>
                            </div></>
                    } */}

                    {/* </Link> */}


                </div>
            </div>
        </div>

    );
};

export default Toy;