<div>
{/* The button to open modal */}
<label htmlFor="my-modal" className="btn">open modal</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal" className="modal-toggle" />
<div className="modal">
    <div className="modal-box">
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
</div>