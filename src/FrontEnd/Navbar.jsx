import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../Auth/Firebase.init';
import Loading from '../Auth/Loading/Loading';
import { useSignOut } from 'react-firebase-hooks/auth';
import NotificationsIcon from '@mui/icons-material/Notifications';
import fisherman from '../assets/fisherman.png'
import placeholder from '../assets/placeholder.png';
import ModeEditIcon from '@mui/icons-material/ModeEdit';


const Navbar =  () => {

    const [open, setOpen] = useState(false);
    const [user, loading, error] = useAuthState(auth)
    const [signOut, loadin, err] = useSignOut(auth);
    const navigate = useNavigate('');

    const [notification , setNotification] = useState(false);
    const [profile , setProfile] = useState(false);
    const [correntUser , setCorrentUser ] = useState({});
    
    



    if(user?.email){
        const url = `http://localhost:5000/user-email?email=${user?.email}`
        fetch(url)
        .then(res=> res.json())
        .then(data => setCorrentUser(data))
    }


    // useEffect(()=>{

    // },[user?.email])


       

    if (loading) {
        return <Loading></Loading>
    }




    

    return (
        <div className='bg-[#132946] text-white'>
            <div className='flex justify-between items-center  p-5  max-w-6xl mx-auto'>
                <Link className='text-2xl uppercase font-mono ' to='/'><img src={fisherman} alt="" /> </Link>
                <div className='md:flex justify-center items-center gap-5 hidden'>
                    <Link className='uppercase' to='/blogs'>Blogs</Link>
                    <Link className='uppercase' to='/contact'>Contact</Link>
                    <Link className='uppercase' to='/gallery'>Gallery</Link>
                    {user ? <Link className='uppercase' to='/dashboard'>Dashboard</Link> : ''}

                    {/* profile  */}
                    




                    <button onClick={() => setOpen(!open)} className='bg-gradient-to-t block md:hidden  from-orange-600 to-red-500 px-2 py-2 text-white font-bold rounded-sm '><MenuIcon /></button>
                    <div className="relative inline-block text-left">
                        <div>
                        <button onClick={()=> {
                            if(profile){
                                setNotification(!notification)
                                setProfile(!profile)
                            }else{
                                setNotification(!notification)
                            }
                        }} title='Notification' className='relative'><span className="bg-red-400 text-xs z-50 top-[-8px] left-2 absolute p-1 rounded-full h-5 w-5">5</span> <NotificationsIcon className='mid-icon' /></button>
                        </div>
                        <div className={`${notification ? '' : 'hidden'} absolute  right-0 z-10 mt-5 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                            <div className="py-1 px-2 text-gray-700 hover:bg-blue-950 hover:text-white" role="none">
                                <p className=" hover:text-white block  text-sm" role="menuitem" tabindex="-1" id="menu-item-0"><NotificationsIcon className='text-green-500'/> Lorem ipsum dolor sit amet....</p>
                                <small className='text-gray-500'>5 Minutes ago</small>
                            </div>
                            <div className="py-1 px-2 text-gray-700 hover:bg-blue-950 hover:text-white" role="none">
                                <p className=" hover:text-white block  text-sm" role="menuitem" tabindex="-1" id="menu-item-0"><NotificationsIcon className='text-green-500'/> Lorem ipsum dolor sit amet....</p>
                                <small className='text-gray-500'>5 Minutes ago</small>
                            </div>
                            <div className="py-1 px-2 text-gray-700 hover:bg-blue-950 hover:text-white" role="none">
                                <p className=" hover:text-white block  text-sm" role="menuitem" tabindex="-1" id="menu-item-0"><NotificationsIcon className='text-green-500'/> Lorem ipsum dolor sit amet....</p>
                                <small className='text-gray-500'>5 Minutes ago</small>
                            </div>
                            <div className="py-1 px-2 text-gray-700 hover:bg-blue-950 hover:text-white" role="none">
                                <p className=" hover:text-white block  text-sm" role="menuitem" tabindex="-1" id="menu-item-0"><NotificationsIcon className='text-green-500'/> Lorem ipsum dolor sit amet....</p>
                                <small className='text-gray-500'>5 Minutes ago</small>
                            </div>
                        </div>
                    </div>


                {/* profile  */}
                {
                        user ? <div className="relative inline-block text-left">
                            <div>
                                <button  onClick={()=> {
                                    if(notification){
                                        setProfile(!profile)
                                        setNotification(!notification)
                                    }else{
                                        setProfile(!profile)
                                    }
                                }} type="button">
                                    <img className='h-14 w-14 rounded-full' src={correntUser.photo ? 'https://'+correntUser.photo  : placeholder} alt="" />
                                </button>
                            </div>


                            <div className={` ${profile ? '' : 'hidden'} absolute p-2 text-center right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                                <div className="py-1" role="none">
                                    <img className='h-14 w-14 mx-auto  mt-5 rounded-full' src={correntUser.photo ? 'https://'+correntUser.photo : placeholder} alt="" />
                                    <Link to={`/edit/${correntUser._id}`}>
                                    <ModeEditIcon className='bg-green-500 h-10 w-10 rounded-full  p-1 mt-[-15px]'></ModeEditIcon>
                                    </Link>
                                    {
                                        user ? <p className='text-blue-950 text-center mt-3'>{correntUser?.name}</p> : ''
                                       
                                    }
                                    {
                                         user ? <button  className='text-white font-bold px-5 py-1 rounded-3xl w-1/2 mx-auto my-3 block text-center mt-1 bg-gradient-to-tr from-blue-900 to-teal-800'>{correntUser?.balancce_bdt} ৳</button> : ''
                                    }

                                   <div className='flex gap-2 items-center justify-center'>
                                   <button className='bg-gradient-to-r from-green-500 to-teal-500 text-white  block font-bold px-5 rounded-sm my-3 py-2'>View</button>
                                    {
                                         user ? <button onClick={async () => {
                                            const success = await signOut();
                                            if (success) {
                                                alert('You are sign out');
                                                navigate('/')
                                            }
                                        }} className='bg-gradient-to-r from-red-500 to-orange-500 text-white  px-5  block font-bold rounded-sm py-2'>Log Out</button> : ""
                                    }
                                   </div>

                                   

                                </div>
                            </div>
                        </div> : <Link to='/login'>Login</Link>
                    }

                </div>
            </div>
            <div className={`${open ? 'block' : 'hidden'}`}>
                <div className='px-5 py-5 bg-gradient-to-r from-orange-500 to-red-500'>
                    <Link className='block my-2' to='/blogs'>Blogs</Link>
                    <Link className='block my-2' to='/contact'>Contact</Link>
                    <Link className='block my-2' to='/gallery'>Gallery</Link>
                    <Link to='login' className='bg-white text-orange-500 px-5 font-bold rounded-sm h-12'>Login</Link>
                </div>
            </div>
            {/* <hr /> */}

        </div>
    );
};

export default Navbar;