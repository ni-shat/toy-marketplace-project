import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategoryTab from './CategoryTab';
import CategoryTabPanel from './CategoryTabPanel';

const Categories = () => {

    const [tabIndex, setTabIndex] = useState(0);
    const [loadedData, setLoadedData] = useState([]);
    const [categoriesAr, setCategoriesAr] = useState([]); // this will only store all the category names of toys the website contains. 
    const [toysOfCategories, setToysOfCategories] = useState([]); // this stores the toys of specific categories. 

    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => setLoadedData(data))
    }, []);

    useEffect(() => {
        console.log("loadedData", loadedData)
        let tempCategory = [];

        for (const element of loadedData) {
            if (!tempCategory.includes(element.category)) {
                tempCategory.push(element.category);
            }
        }
        setCategoriesAr(tempCategory);


        let tempToys_OfOneCategory_Ar = [];

        for (const category of tempCategory) {
            const toysOf_OneCategory = loadedData.filter(data => data.category == category);
            console.log(category);
            console.log(toysOf_OneCategory);

            tempToys_OfOneCategory_Ar.push(toysOf_OneCategory); // this arr is storing all toys by specific categories.
        }
        setToysOfCategories(tempToys_OfOneCategory_Ar);

    }, [loadedData]);


    console.log("baire", toysOfCategories);


    return (
        <Tabs className='mt-20 w-[85%] mx-auto' selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)} id="controlled-tabs" selectedTabClassName="bg-blue">
            <TabList className='ml-10 pb-10' >
                {/* {
                    categoriesAr.map(category => <CategoryTab key={loadedData._id} CategoryTab={category}></CategoryTab>)
                } */}
                {
                    categoriesAr.map(category => <Tab tabindex="-1" className='focus:bg-slate-50 focus:rounded-lg focus:border-b focus:border-cyan-500 px-3 inline mr-2 text-gray-600 py-3' key={categoriesAr.indexOf(category)}>{category}</Tab>)
                }
            </TabList>


            {
                toysOfCategories.map(toys => <TabPanel key={toysOfCategories.indexOf(toys)}><CategoryTabPanel key={toys._id}
                    toysByCategory={toys}
                    toysOfCategories={toysOfCategories}

                ></CategoryTabPanel> </TabPanel>)
            }

           
        </Tabs>
    );
};

export default Categories;