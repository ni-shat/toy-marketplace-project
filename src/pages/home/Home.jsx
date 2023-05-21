import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Toys from "./shopOfToys/Toys";
import Categories from "./shopOfToys/Categories";
import { useEffect, useState } from "react";
import LatestCollection from "./latest-collection/LatestCollection";
import Sale from "./sale/Sale";
import NewLetter from "./new-letter/NewLetter";


const Home = () => {

    return (
        <div>
            <Banner></Banner>
            <Toys></Toys>
            <Categories></Categories>
            <Sale></Sale>
            <LatestCollection></LatestCollection>
            
            <NewLetter></NewLetter>
        </div>

    );
};

export default Home;