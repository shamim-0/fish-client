import React from 'react';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import HouseboatIcon from '@mui/icons-material/Houseboat';
import CheckIcon from '@mui/icons-material/Check';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import './Wehave.css'

const WeHave = () => {
    return (
        <div className='my-20 px-5'>

            <h4 className='text-xl font-bold text-start text-slate-800 uppercase max-w-6xl mx-auto'> What We Have Learned So Far</h4>
            <div className='my-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-6xl mx-auto'>
                <div className='text-center border-2  p-5  rounded-tr-[4rem] border-blue-950 rounded-bl-[4rem] hover:bg-gradient-to-t from-blue-900  to-cyan-950 hover:text-white shadow-2xl'>
                    <PeopleOutlineIcon className='bg-blue-950 text-white we-icon my-5 p-1 rounded-full' />
                    <h5 className='text-4xl font-bold  mt-3'>1000+</h5>
                    <p>Satisfied Customer</p>
                </div>
                <div className='text-center border-2  p-5  rounded-tr-[4rem] border-blue-950 rounded-bl-[4rem] hover:bg-gradient-to-t from-blue-900  to-cyan-950 hover:text-white shadow-2xl'>
                    <CorporateFareIcon className='bg-blue-950 text-white we-icon my-5 p-1 rounded-full'/>
                    <h5 className='text-4xl font-bold  mt-3'>10+</h5>
                    <p>Trusted Organizer</p>
                </div>
                <div className='text-center border-2  p-5  rounded-tr-[4rem] border-blue-950 rounded-bl-[4rem] hover:bg-gradient-to-t from-blue-900  to-cyan-950 hover:text-white shadow-2xl'>
                    <CheckIcon className='bg-blue-950 text-white we-icon my-5 p-1 rounded-full'/>
                    <h5 className='text-4xl font-bold  mt-3'>1000+</h5>
                    <p>Event Complete</p>
                </div>
                <div className='text-center border-2  p-5  rounded-tr-[4rem] border-blue-950 rounded-bl-[4rem] hover:bg-gradient-to-t from-blue-900  to-cyan-950 hover:text-white shadow-2xl'>
                    <HouseboatIcon className='bg-blue-950 text-white we-icon my-5 p-1 rounded-full'/>
                    <h5 className='text-4xl font-bold  mt-3'>1000+</h5>
                    <p>Venue Available</p>
                </div>
            </div>
            
        </div>
    );
};

export default WeHave;