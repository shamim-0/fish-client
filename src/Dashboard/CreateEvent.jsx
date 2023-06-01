import React, { useState } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckIcon from '@mui/icons-material/Check';

const CreateEvent = () => {


    const [tab, setTab] = useState(1);

    return (
        <div className='p-5'>
            <h2 className='text-3xl font-medium my-5 text-center title text-white'>
                {tab === 1 ? 'Event Information' : ''}
                {tab === 2 ? 'Event Place & Time' : ''}
                {tab === 3 ? 'Featured Information' : ''}
                {tab === 4 ? 'Event Term' : ''}
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
                <div className='mt-10 md:flex gap-10'>
                    <input type="text" className="py-1 px-3  focus:outline-0 w-full bg-white  border-slate-200 rounded shadow  border placeholder:text-stone-800" placeholder="Event Title " />
                    <select name="" id="" className="py-1 px-3  focus:outline-0 w-full bg-white  placeholder:text-stone-800 border-slate-200 rounded shadow  border placeholder:title">
                        <option value="">---select category---</option>
                    </select>
                    <input type="text" className="py-1 px-3  focus:outline-0 w-full bg-white  border-slate-200 rounded shadow  border placeholder:text-stone-800" placeholder="Ticket Price" />
                </div>
                <div className='mt-3 flex gap-5'>
                    <input type="text" className="py-1 px-3  focus:outline-0 w-full bg-white  border-slate-200 rounded shadow  border placeholder:text-stone-800" placeholder="Total seat " />
                    <input type="text" className="py-1 px-3  focus:outline-0 w-full bg-white  border-slate-200 rounded shadow  border placeholder:text-stone-800" placeholder="left seat" />
                </div>
                <textarea className='h-24 w-full mt-5 py-1 px-3   focus:outline-0 bg-white  placeholder:text-stone-800 border-slate-200 rounded shadow  border placeholder:title' placeholder='Event Description'></textarea>

                <div className='text-end'>
                    <button onClick={() => setTab(2)} className='bg-gradient-to-t from-orange-500 to-[#d10b0b]  px-4 py-2 rounded-sm  mt-5 mx-auto text-white'>Next <ArrowForwardIcon className='text-white' /> </button>
                </div>
            </div>


            {/* tab 2  */}

            <div className={`${tab === 2 ? 'block' : 'hidden'} mt-16 w-full`}>
                {/* <select className="py-1 px-3  focus:outline-0 w-full bg-white  border-slate-200 rounded shadow  border placeholder:text-stone-800">
                    <option value="">---select place--</option>
                </select> */}
                <div className='grid grid-cols-3 gap-5'>
                    <label htmlFor="">
                        <p className='text-sm'>Start Date</p>
                        <input type="date" className="py-1 px-3  focus:outline-0 w-full block bg-white  border-slate-200 rounded shadow  border placeholder:text-stone-800" />
                    </label>
                    <label htmlFor="">
                        <p className='text-sm'>Start Time</p>
                        <input type="time" className="py-1 px-3  focus:outline-0 w-full bg-white  border-slate-200 rounded shadow  border placeholder:text-stone-800" />
                    </label>
                    <label htmlFor="">
                        <p className='text-sm'>End Time</p>
                        <input type="time" className="py-1 px-3  focus:outline-0 w-full bg-white  border-slate-200 rounded shadow  border placeholder:text-stone-800" />
                    </label>
                </div>

                <div className='mt-5 grid grid-cols-3 gap-5'>
                    <select className='py-1 px-3  focus:outline-0 w-full bg-white  border-slate-200 rounded shadow  border placeholder:text-stone-800'>
                        <option value="null">---select Division---</option>
                        <option value="Dhaka">Dhaka</option>
                        <option value="Khulna">Khulna</option>
                        <option value="Rajshahi">Rajshahi</option>
                        <option value="Sylhet">Sylhet</option>
                        <option value="Rangpur">Rangpur</option>
                        <option value="Mymensingh">Mymensingh</option>
                        <option value="Mymensingh">Chittagong</option>
                        <option value="Barisal">Barisal</option>
                    </select>
                    <select className='py-1 px-3  focus:outline-0 w-full bg-white  border-slate-200 rounded shadow  border placeholder:text-stone-800'>
                        <option value="null">---select Districts ---</option>
                        <option value="Dhaka">Dhaka North</option>
                        <option value="Khulna">Dhaka South</option>
                        <option value="Rajshahi">Gazipur</option>
                        <option value="Sylhet">Manikganj</option>
                        <option value="Rangpur">Munshiganj</option>
                        <option value="Mymensingh">Narayanganj</option>
                        <option value="Mymensingh">Narsingdi</option>
                        <option value="Barisal">Tangail</option>
                        <option value="Barisal">Bagerhat</option>
                        <option value="Barisal">Chuadanga</option>
                        <option value="Barisal">Jessore</option>
                        <option value="Barisal">Jhenaidah</option>
                        <option value="Barisal">Khulna</option>
                        <option value="Barisal">Kushtia</option>
                        <option value="Barisal">Magura</option>
                        <option value="Barisal">Narail</option>
                        <option value="Barisal">Satkhira</option>
                    </select>
                    <input type="text" className='py-1 px-3  focus:outline-0 w-full bg-white  border-slate-200 rounded shadow  border placeholder:text-stone-800' placeholder='Enter Address hare' />
                </div>

                <div className='mt-5 grid grid-cols-3 gap-5'>
                    <input type="text" className='py-1 px-3  focus:outline-0 w-full bg-white  border-slate-200 rounded shadow  border placeholder:text-stone-800' placeholder='Google map link' />
                    <input type="text" className='py-1 px-3  focus:outline-0 w-full bg-white  border-slate-200 rounded shadow  border placeholder:text-stone-800' placeholder='phone number' />
                    <input type="text" className='py-1 px-3  focus:outline-0 w-full bg-white  border-slate-200 rounded shadow  border placeholder:text-stone-800' placeholder='Email Address' />
                </div>
                <div className='text-end '>
                    <button onClick={() => setTab(1)} className=' bg-gradient-to-t from-orange-500 to-[#d10b0b] mx-2  px-4 py-2 rounded-sm  mt-5  text-white'>Prv <ArrowForwardIcon className='text-white' /> </button>
                    <button onClick={() => setTab(3)} className='bg-gradient-to-t from-orange-500 to-[#d10b0b]  px-4 py-2 rounded-sm mt-5 mx-auto text-white'>Next <ArrowForwardIcon className='text-white' /> </button>
                </div>
            </div>

            {/* tab 3  */}
            <div className={`${tab === 3 ? 'block' : 'hidden'} mt-16 `}>
                <div className='w-full grid grid-cols-3 gap-5'>

                
                <select className='py-1 px-3  focus:outline-0 w-full bg-white  border-slate-200 rounded shadow  border placeholder:text-stone-800'>
                    <option value="">---seat plan---</option>
                    <option value="">Lottery</option>
                    <option value="">Chose</option>
                </select>
                <input type="text" className='py-1 px-3   focus:outline-0 w-full bg-white  border-slate-200 rounded shadow  border placeholder:text-stone-800' placeholder='Seat Rods (
Maximum rods use
)' />

                <select className='py-1 px-3   focus:outline-0 w-full bg-white  border-slate-200 rounded shadow  border placeholder:text-stone-800'>
                    <option value="">---select Reserve day----</option>
                    <option value="">Paid</option>
                    <option value="">Free</option>
                </select>
                <select className='py-1 px-3   focus:outline-0 w-full bg-white  border-slate-200 rounded shadow  border placeholder:text-stone-800'>
                    <option value="">---Return Policy---</option>
                    <option value="">Yes</option>
                    <option value="">No</option>
                </select>
                <select className='py-1 px-3   focus:outline-0 w-full bg-white  border-slate-200 rounded shadow  border placeholder:text-stone-800'>
                    <option value="">---Lunch Box---</option>
                    <option value="">Yes</option>
                    <option value="">No</option>
                </select>
                <input type="text" className='py-1 px-3   focus:outline-0 w-full bg-white  border-slate-200 rounded shadow  border placeholder:text-stone-800' placeholder='Angling Time (Hour)' />
                <select className='py-1 px-3   focus:outline-0 w-full bg-white  border-slate-200 rounded shadow  border placeholder:text-stone-800'>
                    <option value="">---select Lighting ---</option>
                    <option value="">Yes</option>
                    <option value="">No</option>
                </select>
            </div>
            <div className='text-end '>
                    <button onClick={() => setTab(2)} className='bg-gradient-to-t from-orange-500 to-[#d10b0b] mx-2  px-4 py-2 rounded-sm  mt-5  text-white'>Prv <ArrowForwardIcon className='text-white' /> </button>
                    <button onClick={() => setTab(4)} className='bg-gradient-to-t from-orange-500 to-[#d10b0b]  px-4 py-2 rounded-sm mt-5 mx-auto text-white'>Next <ArrowForwardIcon className='text-white' /> </button>
                </div>
            </div>


            <div className={`${tab === 4 ? 'block' : 'hidden'} mt-16 `}>
                <div>
                    <label htmlFor="check1" className='flex gap-2'>
                        <input type="checkbox" name="" id="check1" />
                        <small>No use Charkath</small>
                    </label>
                    <label htmlFor="check1" className='flex gap-2'>
                        <input type="checkbox" name="" id="check1" />
                        <small>No use Charkath</small>
                    </label>
                </div>
            <div className='text-end '>
                    <button onClick={() => setTab(3)} className='bg-gradient-to-t from-orange-500 to-[#d10b0b] mx-2  px-4 py-2 rounded-sm  mt-5  text-white'>Prv <ArrowForwardIcon className='text-white' /> </button>
                    <button onClick={() => setTab(4)} className='bg-green-400  px-4 py-2 rounded-sm mt-5 mx-auto text-white'>Submit  </button>
                </div>
            </div>

        </div>
    );
};

export default CreateEvent;







// Khulna Division

// Dhaka Division

// Rajshahi Division