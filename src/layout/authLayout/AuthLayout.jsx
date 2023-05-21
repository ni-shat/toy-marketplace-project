
import { Outlet } from 'react-router-dom';
import Header from '../../pages/shared/header/Header';
import Footer from '../../pages/shared/footer/Footer';

const AuthLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default AuthLayout;