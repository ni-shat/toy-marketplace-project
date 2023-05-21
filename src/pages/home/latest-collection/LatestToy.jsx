import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';


const LatestToy = ({ toy }) => {

    const { _id, pictureUrl, name, price, rating, category, description, sellerName, sellerEmail } = toy

    const [isClicked, setIsClicked] = useState(false);

    const handleViewDetails = () => {

        setIsClicked(true);
    }

    useEffect(() => {
        AOS.init();
      }, [])

    return (
        <>
            <button data-aos="fade-left" onClick={handleViewDetails} className="flex justify-center items-center">
                <img 

                className='hover:scale-105 duration-500 rounded border-2 h-[200px] md:h-[300px] shadow-xl  drop-shadow-xl w-[full] md:w-[300px] object-cover ' 
                
                src={pictureUrl} alt="" />
            </button>
            {
                isClicked &&
                <Navigate state={{ _id, pictureUrl, name, price, rating, category, description, sellerName, sellerEmail }} replace to='/view-details' ></Navigate>
            }
        </>
    );
};

export default LatestToy;