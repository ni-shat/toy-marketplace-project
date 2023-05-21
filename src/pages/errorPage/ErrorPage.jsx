import error from '../../assets/error/err.png';
import four from '../../assets/error/404.png';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <>
            <div className='flex justify-center -mt-14 items-center '>
                <img className='w-[43%]' src={four} alt="" />

            </div>
            <div className='flex justify-center items-center mt-14 text-3xl font-normal border border-[#64a0a1] rounded-full px-10 py-5 w-fit mx-auto'>
                <Link to='/'>Go Back to <span className='text-[#64a0a1] font-semibold'>HOME</span></Link>
            </div>
        </>
    );
};

export default ErrorPage;