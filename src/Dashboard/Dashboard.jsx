import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { Link, Outlet } from 'react-router-dom';
import PeopleIcon from '@mui/icons-material/People';
import SetMealIcon from '@mui/icons-material/SetMeal';
import TripOriginIcon from '@mui/icons-material/TripOrigin';
import HvacIcon from '@mui/icons-material/Hvac';

const Dashboard = () => {
    return (
        <div className='flex '>

            <div className='w-72 bg-[#1e2d47]  text-sm'>
                <ul className='bg-[#324970]  text-center text-white py-2'>
                    <Link to='/dashboard'> <HomeIcon/> </Link>
                </ul>
                <ul>
                <Link className='flex justify-start items-center  text-gray-100 px-5 hover:bg-[#324970] py-3 ' to='/dashboard/my-profile'><TripOriginIcon className='mini-icon' />My Profile</Link>
                </ul>
                <ul className=''>
                    <li className='flex justify-start items-center  text-gray-100 px-5 hover:bg-[#324970] py-3 gap-3'><CalendarTodayIcon className='' />Event</li>
                    <Link className='flex justify-start items-center  text-gray-100 px-5 hover:bg-[#324970] py-3' to='/dashboard/list-event'><TripOriginIcon className='mini-icon' /> List Event </Link>
                    <Link className='flex justify-start items-cent er  text-gray-100 px-5 hover:bg-[#324970] py-3' to='/dashboard/event-category'><TripOriginIcon className='mini-icon' />Add Category</Link>
                    <Link to='/dashboard/order' className='flex justify-start items-center  text-gray-100 px-5 hover:bg-[#324970] py-3'> <TripOriginIcon className='mini-icon' />Order</Link>
                </ul>
                <ul className='rounded'>
                    <li className='flex justify-start items-center  text-gray-100 px-5 hover:bg-[#324970] py-3 gap-3'><SetMealIcon className='' /> Fish</li>
                    <Link className='flex justify-start items-center py-3 text-gray-100 px-5 hover:bg-[#324970] ' to='/dashboard/add-fish'><TripOriginIcon className='mini-icon' />Add Fish</Link>
                    <Link className='flex justify-start items-center py-3 text-gray-100 px-5 hover:bg-[#324970] ' to='/dashboard/add-category'><TripOriginIcon className='mini-icon' /> Event  Category</Link>
                    <Link className='flex justify-start items-center py-3 text-gray-100 px-5 hover:bg-[#324970] ' to='/dashboard/create-event'> <TripOriginIcon className='mini-icon' />Order</Link>
                </ul>
                <ul className=''>
                <li className='flex justify-start items-center  text-gray-100 px-5 hover:bg-[#324970] py-3 gap-3'><HvacIcon className='' /> Venue</li>
                <Link className='flex justify-start items-center py-3 text-gray-100 px-5 hover:bg-[#324970] ' to='/dashboard/create-venue'> <TripOriginIcon className='mini-icon' /> Add Venue</Link>
                <Link className='flex justify-start items-center py-3 text-gray-100 px-5 hover:bg-[#324970] ' to='/dashboard/venue-list'> <TripOriginIcon className='mini-icon' /> Venue List</Link>
                <Link className='flex justify-start items-center py-3 text-gray-100 px-5 hover:bg-[#324970] ' to='/dashboard/add-venue-category'> <TripOriginIcon className='mini-icon' /> Add category</Link>
                <Link className='flex justify-start items-center py-3 text-gray-100 px-5 hover:bg-[#324970] ' to='/dashboard/add-venue-sub-category'> <TripOriginIcon className='mini-icon' /> Add sub category</Link>
                <Link className='flex justify-start items-center py-3 text-gray-100 px-5 hover:bg-[#324970] ' to='/dashboard/test-venue-request'> <TripOriginIcon className='mini-icon' /> Venue Test Request</Link>
                </ul>
                <ul className=''>
                <li className='flex justify-start items-center t text-gray-100 px-5 hover:bg-[#324970] py-3 gap-3'><PeopleIcon className='' />Angler</li>
                <Link className='flex justify-start items-center py-3 text-gray-100 px-5 hover:bg-[#324970] ' to='/dashboard/list-user'> <TripOriginIcon className='mini-icon' /> Angler List</Link>
                </ul>
                <ul className=''>
                <li className='flex justify-start items-center t text-gray-100 px-5 hover:bg-[#324970] py-3 gap-3'><PeopleIcon className='' />Blogs</li>
                <Link className='flex justify-start items-center py-3 text-gray-100 px-5 hover:bg-[#324970] ' to='/dashboard/game-fish'> <TripOriginIcon className='mini-icon' /> Game Fish</Link>
                <Link className='flex justify-start items-center py-3 text-gray-100 px-5 hover:bg-[#324970] ' to='/dashboard/game-fish-category'> <TripOriginIcon className='mini-icon' /> Game Category</Link>
                <Link className='flex justify-start items-center py-3 text-gray-100 px-5 hover:bg-[#324970] ' to='/dashboard/view-game-fish'> <TripOriginIcon className='mini-icon' /> View Game Fish</Link>
                </ul>



            </div>

            <div className='w-full'>
                <div>
                   <Outlet/>
                </div>

            </div>

        </div>
    )
};

export default Dashboard;