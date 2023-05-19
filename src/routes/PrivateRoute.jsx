
// import { RiseLoader } from "react-spinners";

import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    if (loading) {
        return <div className="md:w-[80%] w-[85%] relative mb60">
            <div className="absolute right-10 top-32">
                {/* <RiseLoader color="#ED8B1F" /> */}
                loading
            </div>

        </div>
    }

    if (user) {
        return children;
    }

    return <Navigate state={{ from: location }} to='/auth-layout/login' replace></Navigate>;
    
};

export default PrivateRoute;