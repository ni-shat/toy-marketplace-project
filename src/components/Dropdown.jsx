import { useState } from "react";

const Dropdown = () => {

    const [selectedOption, setSelectedOption] = useState('null');

    const handleClick = () => {
        const value = event.target.innerText; 
        console.log(value);
        setSelectedOption(value);

        const elem = document.activeElement;
        console.log(elem);
        if (elem) {
            elem?.blur();
        }
    };

    return (
        <>
            

            {/* <div className="dropdown dropdown-hover dropdown-bottom dropdown-end mr-24">
                    <button className="w-40 px-1 py-1 mb-3 hover:bg-slate-100 border hover:text-black">Sort by price</button>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 border">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                    </ul>
                </div> */}
        </>
    );
};

export default Dropdown;

