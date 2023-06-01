import React from 'react';
import './Loading.css'

const Loading = () => {
    return (
        <div className='h-[100vh] bg-blue-950 flex justify-center items-center'>
            <span className="loader"></span>
        </div>
    );
};

export default Loading;