import React from 'react';

const Banner = () => {
    return (
        <div className='h-[90vh] home-banner flex justify-center items-center text-white font-bold '>
           <div className='text-center'>
           <h1 className='text-5xl text-center tittle uppercase'>BOOK YOUR <br />
            TICKETS FOR Enjoy Fishing</h1>
            <h2 className='text-xl font-bold mt-5 text-center'>Safe, secure, reliable ticketing.Your ticket to live entertainment!</h2>

            <button className='bg-gradient-to-t from-orange-500 to-red-500 px-5 py-2  mt-10 text-center rounded-sm shadow border-2 border-white '>Book Now</button>
            <div  className='h-20 w-10 border-2 border-white rounded-3xl mx-auto mt-5 flex justify-center items-center'>
                <div className='h-1 w-1 rounded-full bg-white '>

                </div>
            </div>
           </div>
        </div>
    );
};

export default Banner;