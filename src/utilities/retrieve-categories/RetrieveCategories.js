import { useEffect, useState } from "react";



const RetrieveCategories = () => {

    const [loadedData, setLoadedData] = useState([]);
    const [categoriesAr, setCategoriesAr] = useState([]); // this will only store all the category names of toys the website contains. 
    const [toysOfCategories, setToysOfCategories] = useState([]); // this stores the toys of specific categories. 


    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => setLoadedData(data))
    }, []);

    useEffect(() => {
        // console.log("loadedData", loadedData)
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
            // console.log(category);
            // console.log(toysOf_OneCategory);

            tempToys_OfOneCategory_Ar.push(toysOf_OneCategory); // this arr is storing all toys by specific categories.
        }
        setToysOfCategories(tempToys_OfOneCategory_Ar);

    }, [loadedData]);


    // console.log("baire", toysOfCategories);

    return { categoriesAr, toysOfCategories};
};

export default RetrieveCategories; 