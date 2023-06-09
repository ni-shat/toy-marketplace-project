import { faBangladeshiTakaSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Rating } from '@smastrom/react-rating';
import React, { useContext, useEffect, useState } from 'react';
import { Navigate  } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../providers/AuthProviders';
import AOS from 'aos';
import 'aos/dist/aos.css'

const Toy = ({ toy }) => {

    const { user } = useContext(AuthContext);
    console.log("user", user);

    const { _id, pictureUrl, name, price, rating, category, description, sellerName, sellerEmail } = toy;
    const [isClicked, setIsClicked] = useState(false);
    

    const handleViewDetails = () => {

        setIsClicked(true);
    }

    useEffect(() => {
        AOS.init();
      }, [])


    return (
        <div data-aos="fade-up" className="card bg-base-100 shadow-xl w-full md:w-[385px] md:h-[580px]">
            <figure className='h-[280px] md:w-[385px] md:h-[350px] border'><img className='object-cover rounded-lg' src={pictureUrl} alt="toy" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className=''>
                    <div className="text-sm flex gap-2.5">
                        <span>{price}</span>
                        <span><FontAwesomeIcon className="text-[#e3c94a]" icon={faBangladeshiTakaSign} /></span>
                    </div>
                </div>

                <div className="card-actions flex items-center justify-between mt-5 md:mt-8">
                    <div className="flex gap-1.5">
                        <span>{rating} </span>
                        <Rating style={{ maxWidth: 60 }} value={rating} readOnly />
                    </div>
                    {/* <Link to='/view-details'> */}
                    <button onClick={handleViewDetails} className="btn border-0 btn-primary bg-[#70b2a2] hover:bg-slate-300 font-semibold">View Details</button>
                    {
                        isClicked &&
                        <Navigate state={{ _id, pictureUrl, name, price, rating, category, description, sellerName, sellerEmail }} to='/view-details' replace></Navigate>
                    }


                </div>
            </div>
        </div>

    );
};

export default Toy;