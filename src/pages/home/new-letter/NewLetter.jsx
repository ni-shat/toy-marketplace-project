import kid from '../../../assets/homePagePictures/kid.png';

const NewLetter = () => {
    return (
        <div className='md:mt-[300px] mt-[240px]'>
            <div className='relative '>
                <div className='text-white absolute h-[185px] z-10 w-full bg-[#F8F8F8] top-[50px] md:top-[120px]'>
                    
                </div>
            </div>
            <div className='flex flex-col-reverse md:flex-row justify-center items-center z-20  relative mx-auto w-[85%] mt-40'>
                <div className='md:w-[50%] w-full flex justify-center mt-10 md:mt-0 md:relative -top-24 md:top-0 md:right-0'>
                    {/* <div> */}
                    <img className='w-full' src={kid} alt="" />
                    {/* </div> */}
                </div>
                <div className='md:w-[60%] w-full'>
                    <h3 className='text-xl md:text-4xl font-semibold py-2 md:py-12 md:text-start text-center'>Newletter</h3>
                    <div className="form-control mt-4 md:mt-0">
                        <label className='py-2 md:py-3 text-center md:text-start text-xs md:text-base'>Subscribe to the TOYBOX mailing list to receive updates on new arrivals, special offers and other discount information.</label>
                        <div className="flex items-center mt-4">
                            <input type="text" placeholder="Enter Your Email" className="input md:h-[46px] h-9 px-10 md:pr-40 input-bordered rounded-3xl" />
                            <button className="bg-gray-700 md:py-3 py-2.5 text-white font-semibold text-xs md:text-base px-4 md:px-10 rounded-3xl relative -left-10">
                               <span className=''>Subscribe</span> 
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default NewLetter;