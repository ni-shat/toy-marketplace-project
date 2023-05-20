
// import { RiseLoader } from "react-spinners";

import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    console.log("in private route",location);

    let title ="";
    const setToasterTitle = () => {
        if(location?.pathname == "/add-a-toy") {
            title = 'add a toy';
        }
        else if(location?.pathname == "/auth-layout/my-toys") {
            title = 'see your toys';
        }
        else if(location?.pathname == "/view-details") {
            title = 'view details';
        }
    }
    setToasterTitle();


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

    else{
        Swal.fire({
            position: 'top-middle',
            icon: 'info',
            title: `You have to log in first to ${title}!`,
            showConfirmButton: false,
            timer: 1500
        })

        return <Navigate state={{ from: location }} to='/auth-layout/login' replace></Navigate>;
    }

    
};

export default PrivateRoute;