import { NavLink } from 'react-router-dom';


const ActiveLink = ({ to, children }) => {
    return (

        <NavLink to={to}
            className={ ({ isActive }) => isActive ? "text-[#7ec7b5] md:border-b-2 border-[#7ec7b5] py-0 md:py-2.5 md:px-2.5" : "text-black border-white md:px-2.5"}
        >
            
            {children} 

        </NavLink>
        // #EFE4E4

    );
};

export default ActiveLink;