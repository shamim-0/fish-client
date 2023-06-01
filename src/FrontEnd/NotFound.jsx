import React from 'react';

const NotFound = () => {
    return (
        <div>
            <div className='w-96 shadow-2xl h-96 mx-auto mt-20 text-center'>
                <h1 className='text-5xl font-bold text-blue-900 text-center pt-10'>404</h1>
                <p className='text-center mt-5 text-blue-950'>Page not Found</p>
                <p className='text-center mt-5 text-blue-950'>Please check url , Where you want to go </p>
                <div className='border border-dashed border-blue-900 my-10'></div>

                <button className='bg-gradient-to-t from-blue-950 to bg-cyan-800 px-5 py-2  text-white  rounded-sm my-5'>Home</button>
            </div>
        </div>
    );
};

export default NotFound;