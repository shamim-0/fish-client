import React from 'react';
import './Dashboard.css'
import CheckIcon from '@mui/icons-material/Check';

const DashboardHome = () => {
    return (
        <div className='p-5 '>
            <div className=' justify-between  items-center p-5 flex text-center bg-gradient-to-r from-red-500 to-orange-500 w-96 rounded-sm'>
                <div className='h-10 w-10 bg-white rounded-full flex items-center justify-center text-red-500 border-2 '>
                    <CheckIcon />
                </div>
                <h5 className='text-white font-bold text-xl'>Complete Event</h5>
                <h4 className='text-white font-bold text-4xl'>50 +</h4>
            </div>
        </div>
    );
};

export default DashboardHome;