import React, { useState } from 'react';
import Toy from './Toy';

const Toys = ({ loadedToys }) => {

    const [toys, setToys] = useState(loadedToys);

    return (
        <div className='mt-[370px]  w-[85%] mx-auto'>
            <h2 className='text-3xl font-bold text-gray-600 text-center md:mb-14'>Featured Toys</h2>

            {/* <div className='grid grid-cols-1 md:grid-cols-2 mx-auto lg:grid-cols-3 gap-x-8 gap-y-20 justify-between w-fit'>
                {
                    toys.map(toy => <Toy key={toy._id} toy={toy}></Toy>)
                }
            </div> */}

        </div>
    );
};

export default Toys;