import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Toys from "./shopOfToys/Toys";
import Categories from "./shopOfToys/Categories";


const Home = () => {
    const loadedToys = useLoaderData();
    console.log("data", loadedToys)

    return (
        <div>
            <Banner></Banner>
            <Toys key={loadedToys._id} loadedToys={loadedToys}></Toys>

            <Categories></Categories>
        </div>

    );
};

export default Home;