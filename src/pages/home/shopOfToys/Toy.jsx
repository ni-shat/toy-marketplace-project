import React from 'react';

const Toy = ({ toy }) => {

    const { _id, pictureUrl, name, price, rating, category } = toy;


    return (
        <div className="card bg-base-100 shadow-xl w-[385px] h-[580px]">
            <figure className='w-[385px] h-[400px] border'><img className='object-cover rounded-lg' src={pictureUrl} alt="toy" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{price}</p>
                <p>
                    <p>{category}</p>
                    <p>{rating}</p>
                </p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>

    );
};

export default Toy;