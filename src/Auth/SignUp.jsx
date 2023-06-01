import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import auth from './Firebase.init';
import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth';
import Loading from './Loading/Loading';
import { toast } from 'react-toastify';

const SignUp = () => {

    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,] = useCreateUserWithEmailAndPassword(auth);

    const handleSignUp =(e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        createUserWithEmailAndPassword(email, password);
    }

    if(user){
        navigate('/update')
    }
    if(error){
        toast.error(error.message)
    }

    if(loading){
        return <Loading></Loading>
    }

    return (
        <div>
            <div
                className="flex flex-col items-center justify-center px-5 py-5"
            >
                {/* <h1 className="text-4xl mb-10 font-bold">Go Fishing Pro</h1> */}
                <form onSubmit={handleSignUp} className="bg-white text-gray-500 shadow w-96 overflow-hidden mt-10">
                    <h5 className='text-center mt-5'>Sign Up !! </h5>
                    <div className="w-full">
                        <div className="w-full py-10 px-5 md:px-10">
                            <div>
                                <div className="flex -mx-3">
                                    <div className="w-full px-3 mb-5">
                                        <div className="flex">
                                            <input
                                                required
                                                name='email'
                                                type="email"
                                                className="w-full -mr-10 pr-10 pl-3 py-2 rounded-lg border-2 border-blue-200 outline-none bg-[#fafcff]"
                                                placeholder="example@gmail.com"
                                            />
                                            <div
                                                className="w-10 z-10 pr-1 text-center pointer-events-none flex items-center justify-center bg-white border-2 border-gray-200"
                                            >
                                               <EmailIcon/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex -mx-3">
                                    <div className="w-full px-3 mb-5">
                                        <div className="flex">
                                            <input
                                                required
                                                name='password'
                                                type="password"
                                                className="w-full -mr-10 pr-10 pl-3 py-2 rounded-lg border-2 border-blue-200 outline-none bg-[#feffff]"
                                                placeholder="Password"
                                            />
                                            <div
                                                className="w-10 z-10 pr-1 text-center pointer-events-none flex items-center justify-center bg-white border-2 border-gray-200"
                                            >
                                               <KeyIcon/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex -mx-3">
                                    <div className="w-full px-3 mb-5 flex justify-between items-start">
                                        <div className='flex gap-4'>
                                            <input type="checkbox" name="remember" id="remember" />
                                            <label for="remember" className="text-lg font-semibold"
                                            >Remember Me</label>
                                        </div>
                                        <button
                                            className="block bg-gradient-to-r from-blue-900 to-cyan-900 text-white px-4 py-2 font-semibold"
                                        >
                                            Sign Up
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <p>
                                    <Link to="/login" className="text-blue-900 text-sm"
                                        >Already have an account</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;