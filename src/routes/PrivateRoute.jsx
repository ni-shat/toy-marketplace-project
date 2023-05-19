import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { RiseLoader } from "react-spinners";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    if (loading) {
        return <div className="md:w-[80%] w-[85%] relative mb60">
            <div className="absolute right-10 top-32">
                <RiseLoader color="#ED8B1F" />
            </div>

        </div>
    }

    if (user) {
        return children;
    }

    return <Navigate state={{ from: location }} to='/auth-layout/login' replace></Navigate>;
    
};

export default PrivateRoute;