import React from 'react';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Subscribe = () => {
    return (
        <div className='max-w-6xl mx-auto my-20 bg-gradient-to-t from-blue-950 to-cyan-800  md:rounded shadow text-center'>
            <MailOutlineIcon className='we-icon text-white mt-10'></MailOutlineIcon>
            <p className='my-5 text-white'>Subscribe to the newsletter</p>
            <input type="text" className='p-2 rounded-3xl border mt-10 block md:w-1/2 w-2/3 mx-auto focus:outline-none' />
            <button className='text-blue-950 bg-white py-2 px-5 rounded my-10'>Subscribe</button>
        </div>
    );
};

export default Subscribe;