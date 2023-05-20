import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import RetrieveCategories from "../../utilities/retrieve-categories/RetrieveCategories";
import Option from "../../components/Option";


const Modal = ({id, setClickedUpdate}) => {

    const [toy, setToy] = useState([]); 

    const url = `http://localhost:5000/toys/${id}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setToy(data))
    }, [id]);

    console.log("in modal ",toy)
    //somossha hoy je, data load howar agei render hoye jay!

    // setClickedUpdate(false);
   
    

    const [selectedOption, setSelectedOption] = useState('');
    const { user } = useContext(AuthContext);

    const { categoriesAr } = RetrieveCategories();
    // console.log("categories inside add toy", categoriesAr)


    const handleAdding = (event) => {
        event.preventDefault();

        const form = event.target;
        const toyName = form.toyName.value;
        const photo = form.photo.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const sellerName = user?.displayName;
        const description = form.description.value;
        const email = user?.email;
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


        fetch(`http://localhost:5000/toys/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    // update state
                    // const remaining = bookings.filter(booking => booking._id !== id);
                    // const updated = bookings.find(booking => booking._id === id);
                    // updated.status = 'confirm'
                    // const newBookings = [updated, ...remaining];
                    // setBookings(newBookings);
                    alert('updated');
                }
            })

    }

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        // console.log(selectedOption);
    };

    const handleCross = () => {
        setClickedUpdate(false);
    }


    return (
        <>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal whitespace-normal">
                <div className="modal-box min-w-[700px] max-w-[900px] relative h-full">
                    <button onClick={handleCross}><label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label></button>
                    <h3 className="text-4xl text-[#7ec7b5] text-center mb-10 font-extrabold">Update</h3>
                    {/* <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p> */}
                    <div className="min-w-[500px] max-w-[770px] h-fit px-8 pt-10 bg-white top-60 left-0 right-0 ml-auto mr-auto rounded-lg border">
                        <form onSubmit={handleAdding} className='space-y-5 pb-20'>
                            <div className='flex gap-8 justify-between'>
                                <div className="form-control w-2/4">
                                    <label className="label">
                                        <span className="label-text">Name of the toy</span>
                                    </label>
                                    <label className="input-group">
                                        <span className="w-[90px]">name</span>
                                        <input type="text" defaultValue={toy?.name} name="toyName"  className="input flex-grow input-bordered" />
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
                                        <input type="text" defaultValue={user?.displayName} name="sellerName" placeholder="john" className="input flex-grow input-bordered" readOnly />
                                    </label>
                                </div>
                                <div className="form-control w-2/4 ">
                                    <label className="label">
                                        <span className="label-text">Seller Email</span>
                                    </label>
                                    <label className="input-group">
                                        <span className="w-[90px]">email</span>
                                        <input type="text" defaultValue={user?.email} placeholder="info@site.com" className="input flex-grow input-bordered" readOnly />
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
                                        <span className="w-[90px]">category</span>
                                        <select value={selectedOption} onChange={handleOptionChange} className="select select-bordered text-gray-800 font-normal w-full flex-1">
                                            <option disabled selected></option>
                                            {
                                                categoriesAr.map(category => <Option
                                                    key={categoriesAr.indexOf(category)}
                                                    category={category}
                                                ></Option>)
                                            }
                                            {/* <option>Star Wars</option>
                                        <option>Harry Potter</option>
                                        <option>Lord of the Rings</option>
                                        <option>Planet of the Apes</option>
                                        <option>Star Trek</option> */}
                                        </select>
                                    </label>
                                </div>
                            </div>


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
        </>
    );
};

export default Modal;