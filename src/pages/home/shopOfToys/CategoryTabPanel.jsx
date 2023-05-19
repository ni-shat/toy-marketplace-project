import { useEffect, useState } from "react";
import ToyForTabPanel from "./ToyForTabPanel";
import { TabPanel } from "react-tabs";
import Toy from "./Toy";


const CategoryTabPanel = ({ toysByCategory, toysOfCategories }) => {



    return (
        <div> 
            {/* <hr className=" w-[85%] mx-auto -mt-7 mb-14" /> */}
            <div className='grid grid-cols-1 md:grid-cols-2 mx-auto lg:grid-cols-3 gap-x-8 gap-y-20 justify-between w-fit mt-4'>
                {/* value */}
                {
                    toysByCategory.map(toy => <Toy
                        key={toysByCategory.indexOf(toy)}
                        toy={toy}

                    ></Toy>)
                }
                {/* <div>Panel 1</div> */}
            </div>
        </div>

    );
};

export default CategoryTabPanel;