import { Outlet } from "react-router-dom";
import Header from "../../pages/shared/header/Header";
import Footer from "../../pages/shared/footer/Footer";


const Main = () => {
    return (
        <div className="">
            <Header></Header>
           
            <Outlet></Outlet>

            <Footer></Footer>
        </div>
    );
};

export default Main;