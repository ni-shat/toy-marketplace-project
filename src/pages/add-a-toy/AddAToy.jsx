import Header from "../shared/header/Header";
import bear from '../../assets/auth/bear.jpeg';
import { useState } from "react";


const AddAToy = () => {

    const [selectedOption, setSelectedOption] = useState('');


    const handleAdding = (event) => {
        event.preventDefault();
        

        const form = event.target;
        const toyName = form.toyName.value;
        const photo = form.photo.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const sellerName = form.sellerName.value;
        const description = form.description.value;
        const email = form.email.value;
        const rating = form.rating.value;
        const category = selectedOption;
        const toy = {
            name: toyName,
            pictureUrl: photo,
            price,
            rating,
            category,
            sellerName,
            sellerEmail: email,
            availableQuantity: quantity,
            description
        };

        fetch('http://localhost:5000/toy', {
            method: 'POST', 
            headers: {
                'content-type': 'application/json'
            }, 
            body: JSON.stringify(toy)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                alert('data added successfully')
            }
        })
    }

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        console.log(selectedOption);
    };


    return (
        <div>
            <Header></Header>
            <div className="mt-14 bg-slate-50 pt-8">
                <h3 className="text-4xl text-[#7ec7b5] text-center mb-10 font-extrabold">Add a toy</h3>

                {/* <div className="relative bg-black">
                    <img className="h-60 w-60 absolute left-52 top-6 " src={bear} alt="" />
                </div> */}
                <div className="w-[700px] h-fit px-8 pt-10 bg-white top-60 left-0 right-0 ml-auto mr-auto rounded-lg border">
                    <form onSubmit={handleAdding} className='space-y-5 pb-20'>
                        <div className='flex gap-8 justify-between'>
                            <div className="form-control w-2/4">
                                <label className="label">
                                    <span className="label-text">Name of the toy</span>
                                </label>
                                <label className="input-group">
                                    <span className="w-[90px]">name</span>
                                    <input type="text" name="toyName" placeholder="teddy bear" className="input flex-grow input-bordered" />
                                </label>
                            </div>
                            <div className="form-control w-2/4">
                                <label className="label">
                                    <span className="label-text">Picture Url</span>
                                </label>
                                <label className="input-group">
                                    <span className="w-[90px]">url</span>
                                    <input type="text" name="photo" placeholder="url" className="input flex-grow input-bordered" />
                                </label>
                            </div>
                        </div>
                        <div className='flex gap-8 justify-between'>
                            <div className="form-control w-2/4">
                                <label className="label">
                                    <span className="label-text">Available Quantity</span>
                                </label>
                                <label className="input-group">
                                    <span className="w-[90px]">quantity</span>
                                    <input type="text" name="quantity" placeholder="4" className="input flex-grow input-bordered" />
                                </label>
                            </div>
                            <div className="form-control w-2/4">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <label className="input-group">
                                    <span className="w-[90px]">price</span>
                                    <input type="text" name="price" placeholder="25" className="input flex-grow input-bordered" />
                                </label>
                            </div>
                        </div>
                        <div className='flex gap-8 justify-between'>
                            <div className="form-control w-2/4">
                                <label className="label">
                                    <span className="label-text">Seller Name</span>
                                </label>
                                <label className="input-group">
                                    <span className="w-[90px]">name</span>
                                    <input type="text" name="sellerName" placeholder="john" className="input flex-grow input-bordered" />
                                </label>
                            </div>
                            <div className="form-control w-2/4 ">
                                <label className="label">
                                    <span className="label-text">Seller Email</span>
                                </label>
                                <label className="input-group">
                                    <span className="w-[90px]">email</span>
                                    <input type="text" name="email" placeholder="info@site.com" className="input flex-grow input-bordered" />
                                </label>
                            </div>
                        </div>
                        <div className='flex gap-8 justify-between'>
                            <div className="form-control w-2/4">
                                <label className="label">
                                    <span className="label-text">Rating</span>
                                </label>
                                <label className="input-group">
                                    <span className="w-[90px]">rating</span>
                                    <input type="text" name="rating" placeholder="4.5" className="input flex-grow input-bordered" />
                                </label>
                            </div>
                            <div className="form-control w-2/4">
                                <label className="label">
                                    <span className="label-text">Category</span>
                                </label>
                                <label className="input-group">
                                    <span className="w-[90px]">rating</span>
                                    <select value={selectedOption} onChange={handleOptionChange} className="select select-bordered text-gray-800 font-normal w-full flex-1">
                                        <option disabled selected></option>
                                        <option>Star Wars</option>
                                        <option>Harry Potter</option>
                                        <option>Lord of the Rings</option>
                                        <option>Planet of the Apes</option>
                                        <option>Star Trek</option>
                                    </select>
                                </label>
                            </div>
                        </div>

                        {/* <div className="form-control">
                            <div className="w-full">
                                <label className="input-group">
                                    <span className="w-[90px]">category</span>
                                    <select value={selectedOption} onChange={handleOptionChange} className="select select-bordered text-gray-800 font-normal">
                                        <option disabled selected></option>
                                        <option>Star Wars</option>
                                        <option>Harry Potter</option>
                                        <option>Lord of the Rings</option>
                                        <option>Planet of the Apes</option>
                                        <option>Star Trek</option>
                                    </select>
                                </label>
                            </div>
                        </div> */}




                        {/* text area */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Detail description</span>
                            </label>
                            <textarea className="textarea textarea-bordered h-24" name="description" placeholder="description"></textarea>
                        </div>


                        <div className="form-control">
                            <input type="submit" value="Add" className="btn mt-8 px-10 bg-[#ED71A3] text-white font-semibold border-0" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddAToy;