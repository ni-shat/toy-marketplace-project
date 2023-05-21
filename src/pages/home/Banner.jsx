import banner from '../../assets/banner/banner.jpg'
import pic1 from '../../assets/banner/pic-1.png'
import pic2 from '../../assets/banner/pic-2.png'
import boy1 from '../../assets/banner/boy-1.png'
import girl from '../../assets/banner/girl.png'
import elephant from '../../assets/banner/elephant.png'
import tree from '../../assets/banner/tree-2.png'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


const Banner = () => {


    useEffect(() => {
        AOS.init();
      }, [])

    return (
        <div className='flex md:flex-row flex-col-reverse  pb-10'>
            <div className=''>
                <img className='w-[40%] absolute top-[250px] -left-[100px]  opacity-10' src={pic2} alt="" />
            </div>
            <div className='bg-slate-100'>
                <img className='w-[12%] absolute top-[150px] right-1  opacity-30' src={tree} alt="" />
            </div>
            <div className='bg-slate-100'>
                <img className='w-[20%] absolute top-[500px] right-10  opacity-10' src={elephant} alt="" />
            </div>
            {/* <img src={banner} alt="" /> */}
            <div data-aos="fade-right" className='w-[95%] md:w-[35%] mx-auto mt-[300px] md:mt-32 md:ml-36'>
                <h1 className='md:text-5xl text-xl w-[60%] text-center md:text-left mx-auto text-[#5b9284] md:text-gray-600 font-extrabold md:font-medium '>Explore and Shop the Best Toys!</h1>
                <p className='md:text-base text-xs w-[90%] md:w-[60%] text-center md:text-left mx-auto text-gray-500 mt-3 md:mt-8 leading-normal md:leading-8'>
                    Dive into a World of Toys and Imagination!
                    Discover, Connect, and Create Unforgettable Memories! Join the Parade of Playfulness and Find Your Perfect Toy Companion.
                </p>
            </div>
            <div className='w-[60%] relative '>

                <div className='absolute top-0 left-16'>
                    <img className='w-full' src={girl} alt="" />
                </div>
                <div className='absolute top-24 right-20'>
                    <img className='w-3/4' src={boy1} alt="" />
                </div>

            </div>
            
        </div>
    );
};

export default Banner;