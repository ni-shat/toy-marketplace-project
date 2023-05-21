import ActiveLink from "../../../components/ActiveLink";
import logo from '../../../assets/logo/logo1.png'
import banner from '../../../assets/banner/logo2.jpg'
import { useContext, useState } from "react";
import { AuthContext } from "../../../providers/AuthProviders";
import { Link } from "react-router-dom";
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {

    const [open, setOpen] = useState(false);
    const { user, logout } = useContext(AuthContext);

    console.log("navbar photoURL", user?.photoURL)
    console.log("navbar displayName", user?.displayName)


    console.log("user", user);

    const handleLogout = () => {
        logout()
            .then()
            .catch(error => console.log(error));
    }


    return (
        <div className=" mx-auto">
            <div className="flex items-center navbar justify-between max-w-screen-xl mx-auto">
                {/*  */}
                <div className="flex">
                    <div className="dropdown ">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <ActiveLink to='/'>Home</ActiveLink>
                            </li>
                            <li>
                                <ActiveLink to='/all-toys'>All Toys</ActiveLink>
                            </li>
                            <li>
                                <ActiveLink to='/auth-layout/my-toys'>My Toys</ActiveLink>
                            </li>
                            <li>
                                <ActiveLink to='/add-a-toy'>Add A Toy</ActiveLink>
                            </li>
                            <li>
                                <ActiveLink to='/Blogs'>Blog</ActiveLink>
                            </li>
                            <li>
                                <div className=''>
                                    <div>
                                    {
                                        user &&
                                        <>
                                            {
                                                user.displayName ?
                                                    <>
                                                        <div className="tooltip" data-tip={user.displayName}>
                                                            {
                                                                user.photoURL ? <img className='rounded-full w-9 h-9 object-cover' src={user.photoURL} alt="" />
                                                                    : <FaUserCircle className='w-8 h-8 text-gray-500' />
                                                            }
                                                        </div>
                                                    </>
                                                    :
                                                    <>
                                                        {
                                                            user.photoURL ? <img className='rounded-full w-9 h-9 object-cover' src={user.photoURL} alt="" />
                                                                : <FaUserCircle className='w-8 h-8 text-gray-500' />
                                                        }
                                                    </>
                                            }
                                        </>
                                    } 
                                    </div>
                                    <div className=' -mt-1'>
                                        {
                                            user ? <button onClick={handleLogout} className='px-3 py-2 text-white duration-150 rounded-lg bg-[#ED71A3] hover:bg-slate-200 active:shadow-lg font-semibold text-xs'>Log out</button>
                                                :
                                                <Link to='/auth-layout/login'><button className='px-3 py-2 text-white duration-150 rounded-lg bg-[#ED71A3] hover:bg-slate-200 active:shadow-lg font-semibold text-xs -ml-3.5'>Login</button></Link>


                                        }
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="md:w-[98px]  w-10 h-10 md:h-[127px] md:relative absolute right-3">
                        {/* <a className="btn btn-ghost normal-case text-xl">TOY BOX</a> */}
                        <img className="w-full object-contain" src={logo} alt="" />
                    </div>
                </div>
                {/*  */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-4 justify-between px-1">
                        <li>
                            <ActiveLink to='/'>Home</ActiveLink>
                        </li>
                        <li>
                            <ActiveLink to='/all-toys'>All Toys</ActiveLink>
                        </li>
                        <li>
                            <ActiveLink to='/add-a-toy'>Add A Toy</ActiveLink>
                        </li>
                        <li>
                            <ActiveLink to='/auth-layout/my-toys'>My Toys</ActiveLink>
                        </li>
                        <li>
                            <ActiveLink to='/Blogs'>Blog</ActiveLink>
                        </li>

                    </ul>
                </div>


                {/* avate */}
                <div className="dropdown dropdown-end">

                    <div className='md:flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-5 md:items-center hidden '>
                        {
                            user &&
                            <>
                                {
                                    user.displayName ?
                                        <>
                                            <div className="tooltip" data-tip={user.displayName}>
                                                {
                                                    user.photoURL ? <img className='rounded-full w-9 h-9 object-cover' src={user.photoURL} alt="" />
                                                        : <FaUserCircle className='w-8 h-8 text-gray-500' />
                                                }
                                            </div>
                                        </>
                                        :
                                        <>
                                            {
                                                user.photoURL ? <img className='rounded-full w-9 h-9 object-cover' src={user.photoURL} alt="" />
                                                    : <FaUserCircle className='w-8 h-8 text-gray-500' />
                                            }
                                        </>
                                }
                            </>

                        }

                        <span className='hidden w-px h-6 bg-gray-300 md:block'></span>

                        <div className='space-y-3 items-center gap-x-6 md:flex md:space-y-0'>
                            {
                                user ? <button onClick={handleLogout} className='px-10 py-2 text-white duration-150 rounded-lg bg-[#ED71A3] hover:bg-slate-200 active:shadow-lg font-bold'>Log out</button>
                                    :
                                    <Link to='/auth-layout/login'><button className='px-10 py-2 text-white duration-150 rounded-lg bg-[#ED71A3] hover:bg-slate-200 active:shadow-lg font-bold'>Login</button></Link>


                            }
                        </div>
                    </div>
                    {/* </label> */}

                </div>
            </div>
        </div>

    );
};

export default Header;