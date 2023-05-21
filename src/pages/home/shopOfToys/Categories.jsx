import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategoryTabPanel from './CategoryTabPanel';
import { useState } from 'react';
import RetrieveCategories from '../../../utilities/retrieve-categories/RetrieveCategories';

const Categories = () => {

    const [tabIndex, setTabIndex] = useState(0);

    const {categoriesAr, toysOfCategories} = RetrieveCategories();
    

    return (
        <Tabs className='mt-20 w-[85%] mx-auto' selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)} id="controlled-tabs" selectedTabClassName="bg-blue">
            <TabList className='ml-10 pb-10' >
                
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