import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Toys from "./shopOfToys/Toys";
import Categories from "./shopOfToys/Categories";
import { useEffect, useState } from "react";


const Home = () => {
    // const loadedToys = useLoaderData();
    // const [loadedToys, setLoadedToys] = useState([]);
    // console.log("data from home", loadedToys)

    // useEffect( () => {
    //     fetch('http://localhost:5000/toys')
    //     .then(res => res.json())
    //     .then(data => setLoadedToys(data))
    // }, []);

    return (
        <div>
            <Banner></Banner>
            <Toys></Toys>

            <Categories></Categories>
        </div>

    );
};

export default Home;