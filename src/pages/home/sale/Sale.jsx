import sale1 from '../../../assets/homePagePictures/toys-sale.png';
import sale50 from '../../../assets/homePagePictures/sale-50.png';
import { FaArrowCircleRight } from "react-icons/fa";

const Sale = () => {
    return (
        <div>
            <div className='md:mt-40 mt-[90px] md:px-5 flex flex-col md:flex-row items-center gap-5 md:gap-14  bg-white'>
                <div className='bg-[#F9EEF6] px-4 flex items-center md:w-2/4 hover:cursor-pointer'>
                    <img className='md:w-2/4 w-full md:h-[220px] h-[100px] object-cover' src={sale1} alt="" />
                    <div>
                        <img className='' src={sale50} alt="" />
                    </div>
                </div>
                <div><hr  className='w-60 bg-gray-600 block md:hidden h-1'/></div>
                <div className='flex justify-center items-center bg-slate-50 md:h-[220px] h-[100px] px-8  gap-10 w-full md:w-[50%] hover:cursor-pointer'>
                    <div className='md:text-7xl text-2xl text-gray-800 font-semibold'>New Styles</div>
                    <button className='flex justify-center items-center'><FaArrowCircleRight className='md:text-6xl text-xl  text-[#70b2a2] md:mt-5 '/></button>
                </div>
            </div>

            <div className="bg-amber-200 relative hidden md:block">
                <div className="absolute left-[50%] -top-60 -ml-0.5 w-0.5 h-64 bg-gray-600"></div>
            </div>
        </div>

    );
};
// #F9EEF6
export default Sale;