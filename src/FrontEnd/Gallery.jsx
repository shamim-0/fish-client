import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import DateRangeIcon from '@mui/icons-material/DateRange';

const Gallery = () => {
    return (
        <div className='max-w-6xl mx-auto p-5'>
            <h5 className='mt-10 text-2xl  font-bold text-blue-950'>Latest Post's</h5>
            <h5 className='text-blue-950'>See our Memories</h5>
            <hr className='bg-blue-800' />


        <div className='my-20 grid lg:grid-cols-3 gap-5 grid-cols-1'>
            <div className='bg-[#e7cc9a] border-4 border-white rounded shadow-xl'>
                <img src="https://s1.1zoom.me/big0/156/Lake_Fishing_Men_Evening_Grass_546125_1280x853.jpg" alt="" />
                <div className='flex justify-between items-center px-4 text-blue-950'>
                <div className='flex items-center  gap-2 p-2'>
                    <img className='h-10 w-10 rounded-full'  src="https://cdn-icons-png.flaticon.com/512/219/219969.png" alt="" />
                    <p className='text-sm'>MD. Mamun Sheikh</p>
                </div>
                <div className='flex justify-start gap-2 items-center '>
                    <DateRangeIcon></DateRangeIcon>
                    <p className='text-sm'>15-8-2023</p>
                </div>
                </div>
                <div className='border my-3 border-dashed border-blue-950'></div>
                <p className='px-3 text-sm text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, saepe Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, saepe.....</p>
                <button className='bg-gradient-to-tr from-blue-950  to-cyan-600 px-5 py-2 mt-5 text-white w-full'>Read More >></button>
            </div>
            <div className='bg-[#e7cc9a] border-4 border-white rounded shadow-xl'>
                <img src="https://s1.1zoom.me/big0/156/Lake_Fishing_Men_Evening_Grass_546125_1280x853.jpg" alt="" />
                <div className='flex justify-between items-center px-4 text-blue-950'>
                <div className='flex items-center  gap-2 p-2'>
                    <img className='h-10 w-10 rounded-full'  src="https://cdn-icons-png.flaticon.com/512/219/219969.png" alt="" />
                    <p className='text-sm'>MD. Mamun Sheikh</p>
                </div>
                <div className='flex justify-start gap-2 items-center '>
                    <DateRangeIcon></DateRangeIcon>
                    <p className='text-sm'>15-8-2023</p>
                </div>
                </div>
                <div className='border my-3 border-dashed border-blue-950'></div>
                <p className='px-3 text-sm text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, saepe Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, saepe.....</p>
                <button className='bg-gradient-to-tr from-blue-950  to-cyan-600 px-5 py-2 mt-5 text-white w-full'>Read More >></button>
            </div>
            <div className='bg-[#e7cc9a] border-4 border-white rounded shadow-xl'>
                <img src="https://s1.1zoom.me/big0/156/Lake_Fishing_Men_Evening_Grass_546125_1280x853.jpg" alt="" />
                <div className='flex justify-between items-center px-4 text-blue-950'>
                <div className='flex items-center  gap-2 p-2'>
                    <img className='h-10 w-10 rounded-full'  src="https://cdn-icons-png.flaticon.com/512/219/219969.png" alt="" />
                    <p className='text-sm'>MD. Mamun Sheikh</p>
                </div>
                <div className='flex justify-start gap-2 items-center '>
                    <DateRangeIcon></DateRangeIcon>
                    <p className='text-sm'>15-8-2023</p>
                </div>
                </div>
                <div className='border my-3 border-dashed border-blue-950'></div>
                <p className='px-3 text-sm text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, saepe Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, saepe.....</p>
                <button className='bg-gradient-to-tr from-blue-950  to-cyan-600 px-5 py-2 mt-5 text-white w-full'>Read More >></button>
            </div>
        </div>
        </div>
    );
};

export default Gallery;