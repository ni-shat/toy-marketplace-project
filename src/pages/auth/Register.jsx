import toys1 from '../../assets/auth/toys1.jpg';
import cat from '../../assets/auth/fluppy-cat.jpg';
import toys from '../../assets/auth/kid0.jpg';
import google from '../../assets/auth/google.svg';
import { Link, useNavigate } from 'react-router-dom';
import '../home/shopOfToys/style.css';
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProviders';

const Register = () => {

    const { createUser, loginWithGoogle, update, setLoading } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();


    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target; console.log(form)
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        console.log(name, email, photo, password);

        setError('');

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        if (password.length < 6) {
            setError("Password should be at least 6 characters long.");
            return;
        }

        createUser(email, password)
            .then((userCredential) => {
                // Signed in 
                console.log(userCredential.user);
                update_user(userCredential.user, name, photo);
                // navigate('/', { replace: true });
                setSuccess("Your account jas been successfully created!")
                form.reset();
            })
            .catch((error) => {
                console.log(error);
                setError("You may provided an invalid email. Please check again.");
                setLoading(false);
            });
    }

    const handleGoogleLogin = () => {
        loginWithGoogle()
            .then((result) => {
                // navigate('/', { replace: true });
                console.log(result.user);
            }).catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }

    function isImage(url) {
        return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
    }

    const update_user = (currentUser, name, photo) => {
        console.log("in update user", currentUser);

        const isValid = isImage(photo);
        if (!isValid) {
            photo = "";
        }

        update(currentUser, {
            displayName: name, photoURL: photo
        })
            .then(() => {
                // console.log(currentUser);
                setLoading(false);
                navigate('/', { replace: true });
            }).catch((error) => {
                console.log(error)
            });
    }



    return (
        <div className='mt-0'>
            <div className='relative h-[900px]'>
                <img className='h-full w-full object-cover' src={toys} alt="" />
                {/* <div className="absolute h-full w-full  inset-0 bg-gradient-to-b from-transparent to-black bg-blend-multiply"></div> */}
            </div>
            <div className='w-[650px] h-fit px-8 pt-20 transparent-bg  absolute top-60 left-0 right-0 ml-auto mr-auto rounded-lg border'>
                <form onSubmit={handleRegister} className='space-y-5'>
                    <div className='flex gap-4 justify-between'>
                        <div className="form-control w-2/4">
                            <label className="label">
                                <span className="">Your Name</span>
                            </label>
                            <label className=" ">

                                <input type="text" name='name' placeholder="john" className="input flex-grow rounded-md w-full text-gray-800" />
                            </label>
                        </div>
                        <div className="form-control w-2/4">
                            <label className="label">
                                <span className="">Your Email</span>
                            </label>
                            <label className="">

                                <input type="text" name='email' placeholder="info@site.com" className="input flex-grow rounded-md w-full text-gray-800" />
                            </label>
                        </div>
                    </div>
                    <div className='flex gap-4 justify-between'>
                        <div className="form-control w-2/4">
                            <label className="label">
                                <span className="">Password</span>
                            </label>
                            <label className=" ">

                                <input type="text" name='password' placeholder="password" className="input flex-grow rounded-md w-full text-gray-800" />
                            </label>
                        </div>
                        <div className="form-control w-2/4">
                            <label className="label">
                                <span className="">Confirm Password</span>
                            </label>
                            <label className="">

                                <input type="text" name='confirmPassword' placeholder="password" className="input flex-grow rounded-md w-full text-gray-800" />
                            </label>
                        </div>
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="">Photo URL</span>
                        </label>
                        <label className="">

                            <input type="text" name='photo' placeholder="url" className="input flex-grow rounded-md w-full text-gray-800" />
                        </label>
                    </div>
                    <div className="form-control">
                        <input type="submit" value="Register" className="btn mt-8 px-10 bg-[#7ec7b5] text-white font-semibold border-0" />
                    </div>
                </form>
                <div className=" mt-14 flex items-center justify-center">
                    <span className=" w-[40%]  h-px bg-gray-300"></span>
                    <p className="inline-block w-fit text-sm  px-2 ">Or</p>
                    <span className=" w-[40%]  h-px bg-gray-300"></span>
                </div>
                <button onClick={handleGoogleLogin} className='flex mx-auto items-center justify-center gap-3 mt-8'>
                    <img className='w-5 h-5' src={google} alt="" /> <span>Sign in with Google</span>
                </button>
                <div className='pt-16 pb-10'>
                    <p className="text-center">ALready have an account?
                        <Link to="/auth-layout/login" className="font-medium text-[#7ec7b5] hover:text-slate-300 ml-1">  Log in</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;