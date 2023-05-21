
import { Outlet } from 'react-router-dom';
import Header from '../../pages/shared/header/Header';
import Footer from '../../pages/shared/footer/Footer';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';

const AuthLayout = () => {

    const {loading} = useContext(AuthContext);

    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            {
                !loading && <Footer></Footer>
            }
            
        </div>
    );
};

export default AuthLayout;