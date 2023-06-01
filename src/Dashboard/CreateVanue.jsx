import React, { useState } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckIcon from '@mui/icons-material/Check';

const CreateVenue = () => {


    const [tab, setTab] = useState(1);

    return (
        <div className='p-5'>
            <h2 className='text-3xl font-medium my-5 text-center title text-blue-950'>
                {tab === 1 ? 'Venue Information' : ''}
                {tab === 2 ? 'Venue Place & Time' : ''}
                {tab === 3 ? 'Venue Information' : ''}
                {tab === 4 ? 'Venue Term' : ''}
            </h2>


            {/* div  1st section     */}

            <section className='flex justify-center items-center'>
                <div className='h-8 w-8 bg-gradient-to-t from-orange-500 to-[#d10b0b] rounded-full flex items-center justify-center text-white font-bold'>
                    {tab >= 1 ? <CheckIcon></CheckIcon> : 1}
                </div>
                <div className='h-2 bg-gradient-to-t from-orange-500 to-[#d10b0b] w-20'>

                </div>
                <div className='h-8 w-8 bg-gradient-to-t from-orange-500 to-[#d10b0b] rounded-full flex items-center justify-center text-white font-bold'>
                    {tab >= 2 ? <CheckIcon></CheckIcon> : 2}
                </div>
                <div className='h-2 bg-gradient-to-t from-orange-500 to-[#d10b0b] w-20'>

                </div>
                <div className='h-8 w-8 bg-gradient-to-t from-orange-500 to-[#d10b0b] rounded-full flex items-center justify-center text-white font-bold'>
                {tab >= 3 ? <CheckIcon></CheckIcon> : 3}
                </div>
                <div className='h-2 bg-gradient-to-t from-orange-500 to-[#d10b0b] w-20'>

                </div>
                <div className='h-8 w-8 bg-gradient-to-t from-orange-500 to-[#d10b0b] rounded-full flex items-center justify-center text-white font-bold'>
                    4
                </div>

            </section>

            {/* tab 1  */}
            <div className={`${tab === 1 ? 'block' : 'hidden'}`}>
                <div className='mt-10 gap-10'>
                    <input type="text" className="py-2 px-3  mb-3 focus:outline-0 w-full bg-white  border-slate-200 rounded-sm shadow  border placeholder:text-stone-800" placeholder="Event Title " />
                    <select name="" id="" className="py-2 px-3  mt-3 focus:outline-0 w-full bg-white  placeholder:text-stone-800 border-slate-200 rounded-sm shadow  border placeholder:title">
                        <option value="">---select category---</option>
                    </select>
                    <select name="" id="" className="py-2 px-3  mt-3 focus:outline-0 w-full bg-white  placeholder:text-stone-800 border-slate-200 rounded-sm shadow  border placeholder:title">
                        <option value="">---select sub category---</option>
                    </select>
                    <p className='text-blue-950 mt-4'>Upload Image</p>
                    <input type="file" className='py-2 px-3  mt-1 focus:outline-0 w-full bg-white  placeholder:text-stone-800 border-slate-200 rounded-sm shadow  border placeholder:title' />
                    <p className='text-blue-950 mt-4'>Upload Video</p>
                    <input type="file" className='py-2 px-3  mt-1 focus:outline-0 w-full bg-white  placeholder:text-stone-800 border-slate-200 rounded-sm shadow  border placeholder:title' />
                    
                </div>
               
                <div className='text-end'>
                    <button onClick={() => setTab(2)} className='bg-gradient-to-t from-orange-500 to-[#d10b0b]  px-4 py-2 rounded-sm  mt-5 mx-auto text-white'>Next <ArrowForwardIcon className='text-white' /> </button>
                </div>
            </div>


            {/* tab 2  */}

            <div className={`${tab === 2 ? 'block' : 'hidden'} mt-16 w-full`}>

                <div className=''>
                <textarea className='h-24 w-full mt-5 py-1 px-3   focus:outline-0 bg-white  placeholder:text-stone-800 border-slate-200 rounded shadow  border placeholder:title' placeholder='Event Description'></textarea>
                <input type="text" placeholder='Google map iframe Link' className='w-full mt-5 py-2 px-3   focus:outline-0 bg-white  placeholder:text-stone-800 border-slate-200 rounded-sm shadow  border placeholder:title' />
                <input type="text" placeholder='Address [Full address]' className='w-full mt-5 py-2 px-3   focus:outline-0 bg-white  placeholder:text-stone-800 border-slate-200 rounded-sm shadow  border placeholder:title' />
                </div>
                <div className='text-end '>
                    <button onClick={() => setTab(1)} className=' bg-gradient-to-t from-orange-500 to-[#d10b0b] mx-2  px-4 py-2 rounded-sm  mt-5  text-white'>Prv <ArrowForwardIcon className='text-white' /> </button>
                    <button onClick={() => setTab(3)} className='bg-gradient-to-t from-orange-500 to-[#d10b0b]  px-4 py-2 rounded-sm mt-5 mx-auto text-white'>Next <ArrowForwardIcon className='text-white' /> </button>
                </div>
            </div>

            {/* tab 3  */}
            <div className={`${tab === 3 ? 'block' : 'hidden'} mt-16 `}>
                <div className='w-full grid lg:grid-cols-2 grid-cols-1 gap-5'>       
                <select className='py-2 px-3  focus:outline-0 w-full bg-white  border-slate-200 rounded-sm shadow  border placeholder:text-stone-800'>
                    <option value="">---Targeted Fish---</option>
                    <option value="">1</option>
                    <option value="">1</option>
                </select>
                <input type="number" className='py-2 px-3  focus:outline-0 w-full bg-white  border-slate-200 rounded-sm shadow  border placeholder:text-stone-800' placeholder='Day of Fishing' />
            </div>
                <div className='w-full grid lg:grid-cols-2 grid-cols-1 gap-5'>       
                
                <label className='mt-3'>
                <p className='text-blue-950'>Start Time</p>
                <input type="time" className='py-2 px-3  focus:outline-0 w-full bg-white  border-slate-200 rounded-sm shadow  border placeholder:text-stone-800' placeholder='Day of Fishing' />
                </label>
                <label className='mt-3'>
                <p className='text-blue-950'>End Time</p>
                <input type="time" className='py-2 px-3  focus:outline-0 w-full bg-white  border-slate-200 rounded-sm shadow  border placeholder:text-stone-800' placeholder='Day of Fishing' />
                </label>
                
            </div>
            <div className='text-end '>
                    <button onClick={() => setTab(2)} className='bg-gradient-to-t from-orange-500 to-[#d10b0b] mx-2  px-4 py-2 rounded-sm  mt-5  text-white'>Prv <ArrowForwardIcon className='text-white' /> </button>
                    <button onClick={() => setTab(4)} className='bg-gradient-to-t from-orange-500 to-[#d10b0b]  px-4 py-2 rounded-sm mt-5 mx-auto text-white'>Next <ArrowForwardIcon className='text-white' /> </button>
                </div>
            </div>


            <div className={`${tab === 4 ? 'block' : 'hidden'} mt-16 `}>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-5'>
                        <input type="number" className='py-2 px-3  mt-3  focus:outline-0 w-full bg-white  border-slate-200 rounded-sm shadow  border placeholder:text-stone-800' placeholder='Total seat' />
                        <input type="number" className='py-2 px-3  mt-3 focus:outline-0 w-full bg-white  border-slate-200 rounded-sm shadow  border placeholder:text-stone-800' placeholder='Water label (Foot)' />
                        <input type="number" className='py-2 px-3  mt-3 focus:outline-0 w-full bg-white  border-slate-200 rounded-sm shadow  border placeholder:text-stone-800' placeholder='Gap between seat to seat (foot)' />
                        <input type="number" className='py-2 px-3  mt-3 focus:outline-0 w-full bg-white  border-slate-200 rounded-sm shadow  border placeholder:text-stone-800' placeholder='Contact Number' />
                </div>
            <div className='text-end '>
                    <button onClick={() => setTab(3)} className='bg-gradient-to-t from-orange-500 to-[#d10b0b] mx-2  px-4 py-2 rounded-sm  mt-5  text-white'>Prv <ArrowForwardIcon className='text-white' /> </button>
                    <button onClick={() => setTab(4)} className='bg-green-400  px-4 py-2 rounded-sm mt-5 mx-auto text-white'>Submit  </button>
                </div>
            </div>

        </div>
    );
};

export default CreateVenue;







// Khulna Division

// Dhaka Division

// Rajshahi Division