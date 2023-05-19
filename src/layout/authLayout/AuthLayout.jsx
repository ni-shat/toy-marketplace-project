
import { Outlet } from 'react-router-dom';
import Header from '../../pages/shared/header/Header';

const AuthLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;