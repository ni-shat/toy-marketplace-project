import React, { useContext, useState } from 'react';
import bear from '../../assets/auth/bear.webp';
import girls from '../../assets/auth/toys-with-girls.jpg';
import toys from '../../assets/auth/toys1.jpg';
import google from '../../assets/auth/google.svg';
import toys2 from '../../assets/auth/toys2.png';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProviders';

const Login = () => {

    const { login, loginWithGoogle, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const [error, setError] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        setError('');

        login(email, password)
            .then((result) => {
                console.log(result.user);
                // const photoUrl = result.user.photoURL;
                navigate(from, { replace: true });
                form.reset();
            })
            .catch((error) => {
                console.log(error.message);
                setError("Email address and password doesn't match.");
                setLoading(false);
            });

    }

    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then((result) => {
                console.log(result.user);
                navigate(from, { replace: true });
            }).catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }


    return (
        <div className='mt-14 flex gap-4 bg-slate-50'>
            <div className='flex-grow'>
                <img className='w-[350px] h-[500px] object-cover border-white border-r-8 border-b-8' src={toys2} alt="" />
            </div>
            <div className='absolute left-0 right-0 ml-auto mr-auto w-fit'>
                <div className='mt-40 flex h-fit'>
                    <div className='w-[500px] h-fit px-8 pt-20  bg-white'>
                        <div>
                            <p className='text-red-600 mb-5 -mt-3'>{error}</p>
                        </div>
                        <form onSubmit={handleLogin} className='space-y-5'>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Email</span>
                                </label>
                                <label className="input-group">
                                    <span>Email</span>
                                    <input type="text" name='email' placeholder="info@site.com" className="input flex-grow mr-5 input-bordered" required />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <label className="input-group">
                                    <span>password</span>
                                    <input type="text" name='password' placeholder="********" className="input flex-grow mr-5 input-bordered" required />
                                </label>
                            </div>
                            <div className="form-control label mr-5 mt-5">
                                <input type="submit" value="Login" className="btn  px-10 bg-[#ED71A3] border-0" />
                            </div>
                        </form>
                        <div className="relative mt-14">
                            <span className="block w-[90%] mx-auto h-px bg-gray-300"></span>
                            <p className="inline-block w-fit text-sm bg-white px-2 absolute -top-2 inset-x-0 mx-auto">Or</p>
                        </div>
                        <button onClick={handleGoogleLogin} className='flex mx-auto items-center justify-center gap-3 mt-8'>
                            <img className='w-5 h-5' src={google} alt="" /> <span>Sign in with Google</span>
                        </button>
                        <div className='pt-16 pb-10'>
                            <p className="text-center">Don't have an account?
                                <Link to="/auth-layout/register" className="font-medium text-[#ED71A3] hover:text-slate-300 ml-1">  Sign up</Link>
                            </p>
                            <hr className='mb-1.5 w-[70%] mx-auto mt-2 bg-[#7ec7b5]' />
                            <hr className=' w-[70%] bg-[#7ec7b5] mx-auto' />
                        </div>
                    </div>
                    <div>
                        <img className='w-[500px] h-[600px] object-cover' src={girls} alt="" />
                    </div>
                </div>
            </div>

            <div className=''>
                <img className='w-fit h-[480px] object-cover mt-[530px] ' src={bear} alt="" />
            </div>
        </div>
    );
};

export default Login;